from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view 
from rest_framework.response import Response

from .notice import notices
from .models import Notice , Faculty , Gallery, Mission, Vission, Objectives
from .serializers import NoticeSerializer ,FacultySerializer, GallerySerializer, MissionSerializer, VissionSerializer, ObjectivesSerializer
# Create your views here.

@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/notices/',
        '/api/notices/<id>/',

        '/api/faculty/',

        '/api/gallery/',
        # '/api/gallery/<id>/',

        '/api/mission/',
        '/api/vission/',
        '/api/objectives/',
        
    ]
    return Response(routes)


@api_view(['GET'])
def getnotices(request):
    notices = Notice.objects.all()
    serializer = NoticeSerializer(notices, many = True)
    return Response(serializer.data)

@api_view(['GET'])
def getnotice(request, pk):
    notices = Notice.objects.get(_id=pk)
    serializer = NoticeSerializer(notices, many = False)
    return Response(serializer.data)


@api_view(['GET'])
def getfaculty(request):
    faculty = Faculty.objects.all()
    serializer = FacultySerializer(faculty, many = True)
    return Response(serializer.data)

# image in gallery
@api_view(['GET'])
def getgallery(request):
    gallery = Gallery.objects.all()
    serializer = GallerySerializer(gallery, many = True)
    return Response(serializer.data)


@api_view(['GET'])
def getmission(request):
    mission = Mission.objects.all()
    serializer = MissionSerializer(mission, many = True)
    return Response(serializer.data)

@api_view(['GET'])
def getvission(request):
    vission = Vission.objects.all()
    serializer = VissionSerializer(vission, many = True)
    return Response(serializer.data)

@api_view(['GET'])
def getobjectives(request):
    objectives = Objectives.objects.all()
    serializer = GallerySerializer(objectives, many = True)
    return Response(serializer.data)
