from django.conf.urls import url
from django.views.generic import TemplateView
from rest_framework.routers import DefaultRouter

from .api import PostViewSet, UserViewSet


router = DefaultRouter()

router.register(r'^posts', PostViewSet)
router.register(r'^users', UserViewSet)

urlpatterns = router.urls