from rest_framework.generics import ListAPIView
from rest_framework.viewsets import ModelViewSet
from django.contrib.auth.models import User

from .serializers import PostSerializer, UserSerializer, MasterPostSerializer
from .models import Post, MasterPost


class MasterPostViewSet(ModelViewSet):
    queryset = MasterPost.objects.all()
    serializer_class = MasterPostSerializer

class PostViewSet(ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

class UserViewSet(ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer



