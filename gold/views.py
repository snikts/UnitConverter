from django.shortcuts import render
from unitconv.views import convert
from django.http import JsonResponse

# Create your views here.

def conversion(request):
    return JsonResponse(convert(request))

def index(request):
    return render(request, 'gold/index.html')