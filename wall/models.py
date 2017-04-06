from django.db import models
from django.contrib.auth.models import User
from django.contrib.sessions.models import Session

# Create your models here.

class Post(models.Model):
    name = models.CharField(max_length=100)
    datetime = models.DateTimeField(editable=False)
    post_description = models.CharField(max_length=500)
    user = models.ForeignKey(User, related_name='posts')
