from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Notice(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    title = models.CharField(max_length=200, null=False,blank=False)
    #image
    description = models.TextField(null=False , blank=False)
    createdAt = models.DateTimeField(auto_now_add=True)
    _id = models.AutoField(primary_key=True, editable=False)