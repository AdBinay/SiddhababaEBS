from django.contrib import admin
from . models import Notice, Faculty
# Register your models here.

class NoticeAdmin(admin.ModelAdmin):
    # Let you to search with title name, release year and length of duration of movie
    search_fields = ['title']
    # There will be a filter on release year
    list_filter = ['title']
 

admin.site.register(Notice, NoticeAdmin)
admin.site.register(Faculty)

