from django.urls import path
from . import views 

urlpatterns = [
    path('',views.getRoutes, name = "routes"),
    path('notices/',views.getnotices, name='notices'),
    path('notice/<str:pk>/',views.getnotice, name='notice'),
]