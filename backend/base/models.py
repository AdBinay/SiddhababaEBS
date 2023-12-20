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
    

class Mission(models.Model):
    name = models.CharField(max_length=200, null=False,blank=False)
    description = models.TextField(null=False , blank=False)

    def __str__(self):
        return self.name
    
class Vission(models.Model):
    name = models.CharField(max_length=200, null=False,blank=False)
    description = models.TextField(null=False , blank=False)

    def __str__(self):
        return self.name
    
class Objectives(models.Model):
    name = models.CharField(max_length=200, null=False,blank=False)
    description = models.TextField(null=False , blank=False)

    def __str__(self):
        return self.name
    

class SchoolInformation(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    school_name = models.CharField(max_length=200, null=False,blank=False)
    school_logo = models.ImageField(null=True,blank=True)
    school_motto = models.CharField(max_length=200, null=False,blank=False)
    nepali_name = models.CharField(max_length=200, null=False,blank=False)
    school_email = models.EmailField(("email address"), unique=True)
    school_phone = models.IntegerField()
    school_address = models.CharField(max_length=200, null=False,blank=False)
    

    def __str__(self):
        return self. school_name
    


class Profileimage(models.Model):
    image_heading = models.CharField(max_length=200, null=False,blank=False)
    image_caption = models.TextField(null=False , blank=False)
    first_image = models.ImageField(null=True,blank=True)
    second_image = models.ImageField(null=True,blank=True)
    third_image = models.ImageField(null=True,blank=True)

    def __str__(self):
        return self.image_heading