from django.urls import path
from . import views 

urlpatterns = [
    path('',views.getRoutes, name = "routes"),
    path('notices/',views.getnotices, name='notices'),
    path('notices/<str:pk>/',views.getnotice, name='notice'),
    path('faculty/',views.getfaculty, name='faculty'),
    path('gallery/',views.getgallery, name='gallery'),
    path('mission/',views.getmission, name='mission'),
    path('vission/',views.getvission, name='vission'),
    path('objectives/',views.getobjectives, name='objectives'),
    path('schoolinformation/',views.getschoolinformation, name='schoolinformation'),
    path('profilepicture/',views.getprofilepicture, name='profilepicture'),
]

