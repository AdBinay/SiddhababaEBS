from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view 
from rest_framework.response import Response

from .notice import notices
from .models import Notice
from .serializers import NoticeSerializer
# Create your views here.

@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/notices/',
        '/api/notices/create/',

        '/api/notices/upload/',

        '/api/notices/top/',
        '/api/notices/<id>/',

        '/api/notices/delete/<id>/',
        '/api/notices/<update>/<id>/',
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