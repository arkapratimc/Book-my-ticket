from django.shortcuts import render
from .models import Movie, Location, Time
from django.http import JsonResponse, HttpResponse
from .serializers import MovieSerializer, LocationSerializer, TimeSerializer


def homepage(request):
    spam = { "foo": 2 }


    print("Hi mom")

    return render(request, "movies/index.html", spam)



def getAllMovies(request):
    spam = Movie.objects.all()
    serializer = MovieSerializer(spam, many = True)
    return JsonResponse(serializer.data, safe=False)

def locationPage(request, movie, id):
    spam = { "foo": 2 }

    return render(request, "movies/index.html", spam)


def seatPage(request, movie_name, movie_id, location, location_id):
    spam = { "foo": 2 }

    return render(request, "movies/index.html", spam)



def getSpecSeat(request, time_id):
    time = Time.objects.get(id = time_id)
    serializer = TimeSerializer(time, many=False)

    return JsonResponse(serializer.data, safe=False)


def getASpecificMovie(request, id):
    movie = Movie.objects.get(id = id)
    serializer = MovieSerializer(movie, many = False)

    return JsonResponse(serializer.data, safe=False) 


def getLocations(request, movie_id):
    locations = Location.objects.filter(movie__id = movie_id)
    serializer = LocationSerializer(locations, many = True)

    return JsonResponse(serializer.data, safe=False)


