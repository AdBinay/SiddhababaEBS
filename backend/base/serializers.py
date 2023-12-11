from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Notice

class NoticeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Notice
        fields = '__all__'