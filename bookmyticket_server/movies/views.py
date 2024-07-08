from django.shortcuts import render
from .models import Movie
from django.http import JsonResponse
from .serializers import MovieSerializer


def homepage(request):
    spam = { "foo": 2 }


    print("Hi mom")

    return render(request, "movies/index.html", spam)



def getAllMovies(request):
    spam = Movie.objects.all()
    serializer = MovieSerializer(spam, many = True)
    return JsonResponse(serializer.data, safe=False)