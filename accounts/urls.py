from django.urls import path, include
from knox.views import LogoutView
from knox import urls
from . import views


urlpatterns = [
    path('', include('knox.urls')),
    path('auth/register/', views.RegisterAPIView.as_view()),
    path('auth/login/', views.LoginAPIView.as_view()),
    path('auth/logout/', LogoutView.as_view()),
    path('auth/user/', views.UserAPIView.as_view()),
]
