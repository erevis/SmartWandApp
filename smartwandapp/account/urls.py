from django.urls import path
from .views import accounts_list, account_detail

urlpatterns = [
    path('account/', accounts_list),
    path('account/<int:pk>/', account_detail),
]