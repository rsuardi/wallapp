from django.contrib import admin

# Register your models here.

from .models import Post, MasterPost

admin.site.register(Post)
admin.site.register(MasterPost)