from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Notice(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    title = models.CharField(max_length=200, null=False,blank=False)
    image = models.ImageField(null=True,blank=True)
    description = models.TextField(null=False , blank=False)
    createdAt = models.DateTimeField(auto_now_add=True)
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return self.title
    

class Faculty(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=200, null=False,blank=False)
    pp_image = models.ImageField(null=True,blank=True)
    description = models.TextField(null=False , blank=False)
    id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return self.name
    

class Gallery(models.Model):
    name = models.CharField(max_length=200, null=False,blank=False)
    image = models.ImageField(null=True,blank=True)

    def __str__(self):
        return self.name