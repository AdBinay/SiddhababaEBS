from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view 
from rest_framework.response import Response
from .notice import notices
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
    return Response(notices)

@api_view(['GET'])
def getnotice(request, pk):
    notice = None
    for i in notices:
        if i['_id'] == pk:
            notice = i
            break


    return Response(notice)