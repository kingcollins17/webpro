from django.db import models
from accounts.models import User


class TaskManager(models.Manager):
    """Custom manager for Task Model"""

    def state(self, status):
        """filtering by state"""
        return self.filter(status=status)


class Task(models.Model):

    name = models.CharField(max_length=50, unique=True)
    description = models.CharField(max_length=200)
    value = models.FloatField(null=True)

    def get_value(self):
        return round(self.value, 2)

    def __str__(self):
        return self.name


class TaskSignature(models.Model):
    user = models.ForeignKey(
        User, related_name='signatures', on_delete=models.CASCADE)
    task = models.ForeignKey(
        Task, related_name='task_signatures', on_delete=models.CASCADE)
    hash_id = models.IntegerField(unique=True)

    def __str__(self) -> str:
        return str(self.hash_id)


class TaskMonitor(models.Model):
    PENDING = 'pending'
    PROGRESS = 'progress'
    CANCEL = 'cancel'
    FINISHED = 'finished'

    CHOICES = (
        (PROGRESS, 'InProgress'),
        (FINISHED, 'Finished'),
        (CANCEL, 'Cancelled'),
    )
    status = models.CharField(max_length=10, choices=CHOICES, default=PENDING)
    signature = models.OneToOneField(
        TaskSignature, related_name='monitor', on_delete=models.CASCADE, null=True)

    objects = TaskManager()

    def start(self):
        self.state = TaskMonitor.PENDING
        super().save()

    def cancel(self):
        self.state = TaskMonitor.CANCEL
        super().save

    def __str__(self):
        return f'{self.signature.task} {self.status}'


class TaskCertificate(models.Model):
    task = models.ForeignKey(
        Task, related_name='issued_certs', on_delete=models.PROTECT)
    user = models.ForeignKey(User, related_name='cert',
                             on_delete=models.CASCADE)
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.task.name} certificate issued to {self.user.last_name}"
