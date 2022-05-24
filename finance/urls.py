from django.urls import path
from . import views


urlpatterns = [
    path('fund/user/', views.FundView.as_view()),
    path('fund/user/deposit/', views.FundDepositView.as_view()),
    path('fund/user/withdraw/', views.WithdrawFundsView.as_view()),
]
