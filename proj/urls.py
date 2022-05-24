
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('', include('frontend.urls')),
    path('', include('task.urls')),
    path('', include('finance.urls')),
    path('', include('accounts.urls')),
    path('admin/', admin.site.urls),
]
