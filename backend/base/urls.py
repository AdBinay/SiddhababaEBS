from django.urls import path
from . import views 

urlpatterns = [
    path('',views.getRoutes, name = "routes"),
    path('notices/',views.getnotices, name='notices'),
    path('notices/<str:pk>/',views.getnotice, name='notice'),
    # path('notices/',views.getnotices, name='notices'),
    # path('notices/<str:pk>/',views.getnotice, name='notice'),
]