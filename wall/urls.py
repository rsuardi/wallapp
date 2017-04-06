from django.conf.urls import url

from .api import PostApi


urlpatterns = [
    url(r'^posts$', PostApi.as_view()),

]
