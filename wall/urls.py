from django.conf.urls import url
from django.views.generic import TemplateView

from .api import PostApi


urlpatterns = [
    url(r'^posts$', PostApi.as_view()),
    url(r'^home', TemplateView.as_view(template_name='wall/home.html'))

]
