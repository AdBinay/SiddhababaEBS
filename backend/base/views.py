from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view 
from rest_framework.response import Response


from .models import Notice , Faculty , Gallery, Mission, Vission, Objectives, SchoolInformation, Profileimage
from .serializers import NoticeSerializer ,FacultySerializer, GallerySerializer, MissionSerializer, VissionSerializer, ObjectivesSerializer, SchoolInformationSerializer, ProfileimageSerializer
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
        '/api/schoolinformation/',


        '/api/profilepicture/'
        
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
    serializer = ObjectivesSerializer(objectives, many = True)
    return Response(serializer.data)


@api_view(['GET'])
def getschoolinformation(request):
    schoolinformation = SchoolInformation.objects.all()
    serializer = SchoolInformationSerializer(schoolinformation, many = True)
    return Response(serializer.data)

@api_view(['GET'])
def getprofilepicture(request):
    profilepicture = Profileimage.objects.all()
    serializer = ProfileimageSerializer(profilepicture, many = True)
    return Response(serializer.data)
