from django.urls import path
from . import views


urlpatterns = [
    path('task/', views.list_task),
    path('task/api/<int:id>/', views.TaskAPI.as_view()),
]
