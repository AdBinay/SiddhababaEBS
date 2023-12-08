from django.shortcuts import render
from django.http import JsonResponse
from .notice import notices
# Create your views here.

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
    return JsonResponse(routes, safe=False)

def getnotices(request):
    return JsonResponse(notices, safe=False)