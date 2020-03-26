from django.shortcuts import render
from django.http import JsonResponse
from django.http import HttpResponse
import datetime
# Create your views here.

def convert(request):
    for (k, v) in request.GET.items():
        print(f"\tGet parameter {k} => {v}")
    return JsonResponse({'error': "Not yet implemented..."})

    # for(k, v) in request.GET.items():
    #     print(f"\tGET parameter {k} => {v}")
    #
    # if 'from' not in request.GET:
    #     resp = {'error': "Usage: from=[T, g, t_oz, kg, lb, or oz]"}
    # else:
    #     f = request.GET['from']
    #     v = request.GET['value']
    #     if f != 'T' and f!= 'g' and f!= 't_oz' and f!='kg' and f!='lb' and f!='oz':
    #         resp = {'error': "Usage: from=[T, g, t_oz, kg, lb, or oz]"}
    #     else:
    #         data = request.GET['myData']
    #         if f == 'T':
    #             conversionVal = 29166.7
    #             amount = conversionVal*data
    #             resp = {{'units': request.GET['to']}, {'value': amount}}
    #         elif f == 'g':
    #             conversionVal = 0.0322
    #             amount = conversionVal*data
    #             resp = {{'units': request.GET['to']}, {'value': amount}}
    #         elif f == 't_oz':
    #             conversionVal = 1
    #             amount = conversionVal*data
    #             resp = {{'units': request.GET['to']}, {'value': amount}}
    #         elif f == 'kg':
    #             conversionVal = 32.15
    #             amount = conversionVal*data
    #             resp = {{'units': request.GET['to']}, {'value': amount}}
    #         elif f == 'lb':
    #             conversionVal = 14.58
    #             amount = conversionVal*data
    #             resp = {{'units': request.GET['to']}, {'value': amount}}
    #         elif f == 'oz':
    #             conversionVal = 0.912
    #             amount = conversionVal *data
    #             resp = {{'units': request.GET['to']}, {'value': amount}}
    # return JsonResponse(resp)

def index(request):
    return render(request, 'unitconv/index.html')

