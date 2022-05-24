from rest_framework import generics, status, mixins, views, permissions
from .serializers import TCertSerializer, TaskSerializer, TMonitorSerializer, TSignatureSerializer
from rest_framework.response import Response
from .models import Task, TaskCertificate, TaskMonitor, TaskSignature
from rest_framework.decorators import api_view, permission_classes
from random import randrange
# Create your views here...


@api_view(['GET', ])
def list_task(request):

    if request.method == 'GET':
        data = Task.objects.all()
        serializer = TaskSerializer(data, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


def get_object(id):
    try:
        return Task.objects.get(pk=id)
    except Task.DoesNotExist:
        return None


class TaskAPI(views.APIView):
    permission_classes = [
        permissions.IsAuthenticated,
    ]

    def get_object(self, id):
        try:
            return Task.objects.get(pk=id)
        except Task.DoesNotExist:
            return None

    def _hash_gen(self, step):
        hash = randrange(1235, 7896, step)
        signs = TaskSignature.objects.all()
        for sign in signs:
            if sign.hash_id == hash:
                return self.hash_gen(step+1)

        return hash

    def get(self, request, id):
        task = self.get_object(id)
        serializer = TaskSerializer(task)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request, id):
        user = self.request.user
        task = self.get_object(id)
        hash = self._hash_gen(11)

        sign = TaskSignature.objects.create(user=user, task=task, hash_id=hash)
        monitor = TaskMonitor.objects.create(signature=sign)
        # create task monitor with the details created...
        return Response(
            {
                'task': TaskSerializer(task).data,
                'signature': TSignatureSerializer(sign).data,
                'monitor': TMonitorSerializer(monitor).data
            },
            status=status.HTTP_201_CREATED
        )
