from django.shortcuts import render

# Create your views here.


def index(request):
    """A function for returning the index.html page"""
    return render(request, 'index.html')
