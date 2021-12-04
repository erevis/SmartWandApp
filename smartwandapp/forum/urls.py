from django.urls import path
from .views import post_list, post_detail, comment_detail, comment_list

urlpatterns = [
    path('post/', post_list),
    path('post/<int:pk>/', post_detail),
    path('comment/', comment_list),
    path('comment/<int:pk>/', comment_detail),
]
