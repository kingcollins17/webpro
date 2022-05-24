from rest_framework import serializers
from .models import Task, TaskCertificate, TaskMonitor, TaskSignature
from random import randrange


class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = '__all__'


class TCertSerializer(serializers.ModelSerializer):
    class Meta:
        model = TaskCertificate
        fields = '__all__'


class TMonitorSerializer(serializers.ModelSerializer):
    class Meta:
        model = TaskMonitor
        fields = ('status',)


class TSignatureSerializer(serializers.ModelSerializer):
    class Meta:
        model = TaskSignature
        fields = ('id', 'hash_id', 'user')
