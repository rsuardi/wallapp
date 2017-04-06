from rest_framework import serializers
from django.contrib.auth.models import User

from .models import Post, MasterPost


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = '__all__'

class MasterPostSerializer(serializers.ModelSerializer):
    masterposts = PostSerializer(read_only=True, many=True)
    class Meta:
        model = MasterPost
        fields = '__all__'



class UserSerializer(serializers.ModelSerializer):
    posts = PostSerializer(read_only=True,many=True)
    class Meta:
        model = User
        fields = '__all__'


