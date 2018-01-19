from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def home(request):
    html_string = '<h1> Task List</h1>'
    return HttpResponse(html_string)

def add_task(request):
    html_string = '<h1> Add Task</h1>'
    return HttpResponse(html_string)

def complete_task(request):
    html_string = '<h1> Complete Task</h1>'
    return HttpResponse(html_string)

def index(request):
    html_string = '<h1>Index</h1>'
    return HttpResponse(html_string)

def add(request):
    html_string = '<h1>Index</h1>'
    return HttpResponse(html_string)

def details(request):
    html_string = '<h1>Detail</h1>'
    return HttpResponse(html_string)
