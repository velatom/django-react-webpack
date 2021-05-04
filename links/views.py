from django.shortcuts import render
from django.core import serializers
from .models import Link

def links_detail(request):
    '''
    Vista que devuelve todos los links de la bbdd.
    Formato: JSON
    '''
    links = Link.objects.all()
    links_json = serializers.serialize('json', links)
    return render(request, 'link_detail.html', context={'links': links_json})

