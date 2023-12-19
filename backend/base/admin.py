from django.contrib import admin
from . models import Notice, Faculty, Gallery , Mission, Vission, Objectives, SchoolInformation
# Register your models here.

class NoticeAdmin(admin.ModelAdmin):
    # Let you to search with title name, release year and length of duration of movie
    search_fields = ['title']
    # There will be a filter on release year
    list_filter = ['title']
 

admin.site.register(Notice, NoticeAdmin)
admin.site.register(Faculty)
admin.site.register(Gallery)
admin.site.register(Mission)
admin.site.register(Vission)
admin.site.register(Objectives)
admin.site.register(SchoolInformation)


