from django.db import models
from django.contrib.auth.models import User
from django.contrib.sessions.models import Session

# Create your models here.
from django.utils.encoding import python_2_unicode_compatible

@python_2_unicode_compatible
class Post(models.Model):
    title = models.CharField(max_length=100)
    datetime = models.DateTimeField(null=True)
    post_description = models.CharField(max_length=500)
    user = models.ForeignKey(User, related_name='posts')

    def __str__(self):
        return "Post: {}".format(self.name)
