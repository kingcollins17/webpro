from django.db import models
from accounts.models import User

# Create your models here.


class FundManager(models.Manager):
    """custom manager for user funds"""

    def active(self):
        return self.filter(status='active')

    def freezed(self):
        return self.filter(status='freezed')


class Fund(models.Model):

    """model for funding and defunding user finance"""

    CHOICES = (
        ('active', 'Active'),
        ('freezed', 'Freezed')
    )
    balance = models.FloatField(default=5.00)
    user = models.OneToOneField(
        User, related_name='fund', on_delete=models.CASCADE)
    status = models.CharField(max_length=20, choices=CHOICES, default='active')

    objects = FundManager()

    def __str__(self):
        return f'${str(round(self.balance,2))}'

    def get_balance(self):
        return round(self.balance, 2)

    def activate(self):
        self.status = 'active'

    def freeze(self):
        self.status = 'freezed'

    def deposit(self, amount):
        self.balance += amount
        return self.balance

    def withdraw(self, amount):
        self.balance -= amount
        return self.balance

    def earn(self, amount):
        self.balance += amount
