from django.contrib import admin
from .import models
# Register your models here.


class SignAdmin(admin.ModelAdmin):
    list_display = ('hash_id', 'user', 'task')


class TaskAdmin(admin.ModelAdmin):

    list_display = ('name', 'description', 'value')
    list_filter = ('value',)


class MonitorAdmin(admin.ModelAdmin):
    list_filter = ('status',)


class CertAdmin(admin.ModelAdmin):
    list_display = ('task', 'user', 'date')
    list_filter = ('task', 'user', 'date')


admin.site.register(models.Task, TaskAdmin)
admin.site.register(models.TaskMonitor, MonitorAdmin)
admin.site.register(models.TaskCertificate, CertAdmin)
admin.site.register(models.TaskSignature, SignAdmin)
