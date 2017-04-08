from django.shortcuts import render
import json
# Create your views here.

def current_user(request):
    return request.user