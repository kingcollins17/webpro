from knox.models import AuthToken
from .serializers import LoginSerializer, UserSerializer, RegisterSerializer
from rest_framework import views, status, generics, permissions
from rest_framework.response import Response

# Create your views here.


class RegisterAPIView(views.APIView):

    def post(self, request, *args, **kwargs):
        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            token = AuthToken.objects.create(user)
            return Response(
                {
                    # 'user': UserSerializer(user, context=self.get_serializer_context).data,
                    'token': token[1]

                }
            )
        else:
            return Response('Ooops!, provided inputs are not valid.', status=status.HTTP_400_BAD_REQUEST)


# Login APIVIEW...
class LoginAPIView(views.APIView):

    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.validated_data
            token = AuthToken.objects.create(user)
            return Response(
                {
                    'user': UserSerializer(user).data,
                    'token': token[1]
                }
            )


class UserAPIView(generics.RetrieveAPIView):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = UserSerializer

    def get_object(self):
        return self.request.user
