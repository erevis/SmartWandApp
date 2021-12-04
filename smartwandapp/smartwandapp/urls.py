from django.contrib import admin
from django.urls import include, path
from rest_framework_simplejwt import views as jwt_views

urlpatterns = [
    path('', include('account.urls')),
    path('', include('forum.urls')),
    path('admin/', admin.site.urls),
]
