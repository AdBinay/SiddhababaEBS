from django.urls import path
from . import views 

urlpatterns = [
    path('',views.getRoutes, name = "routes"),
    path('notices/',views.getnotices, name='routes'),
]