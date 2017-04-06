from rest_framework.generics import ListAPIView

from .serializers import PostSerializer
from .models import Post

class PostApi(ListAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

