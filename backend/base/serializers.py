from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Notice , Faculty , Gallery, Mission, Vission, Objectives

class NoticeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Notice
        fields = '__all__'


class FacultySerializer(serializers.ModelSerializer):
    class Meta:
        model = Faculty
        fields = '__all__'

class GallerySerializer(serializers.ModelSerializer):
    class Meta:
        model = Gallery
        fields = '__all__'

class MissionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Mission
        fields = '__all__'

class VissionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vission
        fields = '__all__'

class ObjectivesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Objectives
        fields = '__all__'