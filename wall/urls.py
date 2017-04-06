from django.conf.urls import url
from django.views.generic import TemplateView
from rest_framework.routers import DefaultRouter

from .api import PostViewSet, UserViewSet, MasterPostViewSet


router = DefaultRouter()

router.register(r'^posts', PostViewSet)
router.register(r'^users', UserViewSet)
router.register(r'^masterposts', MasterPostViewSet)

urlpatterns = router.urls