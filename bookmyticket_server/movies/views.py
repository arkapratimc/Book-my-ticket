from django.shortcuts import render
from .models import Movie, Logs, TimeAndPlace
from django.http import JsonResponse, HttpResponse, Http404, HttpResponseNotFound
from .serializers import MovieSerializer, TimeAndPlaceSerializer
from rest_framework.parsers import JSONParser
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import authenticate, login, logout, models
import json

def homepage(request):
    spam = { "foo": 2 }


    print("Hi mom")

    return render(request, "movies/index.html", spam)



def getAllMovies(request):
    spam = Movie.objects.all()
    serializer = MovieSerializer(spam, many = True)
    return JsonResponse(serializer.data, safe=False)

# https://stackoverflow.com/a/7696966


def locationPage(request, movie, id):
    spam = { "foo": 2 }

    return render(request, "movies/index.html", spam)

def seatPage(request, movie, id, occur_id):
    spam = { "foo": 2 }

    return render(request, "movies/index.html", spam)

'''
def seatPage(request, movie_name, movie_id, location, location_id, timeid):
    spam = { "foo": 2 }

    return render(request, "movies/index.html", spam)
'''


def getSpecSeat(request, time_id):
    time = Time.objects.get(id = time_id)
    serializer = TimeSerializer(time, many=False)

    return JsonResponse(serializer.data, safe=False)


def getASpecificMovie(request, id):
    movie = Movie.objects.get(id = id)
    serializer = MovieSerializer(movie, many = False)

    return JsonResponse(serializer.data, safe=False) 


def getEveryOccurences(request, movie_id):
    occurence = TimeAndPlace.objects.filter(movie__id = movie_id)
    serializer = TimeAndPlaceSerializer(occurence, many = True)
    return JsonResponse(serializer.data, safe=False)


def getAspecificOccurence(request, occur_id):
    occurence = TimeAndPlace.objects.get(id = occur_id)
    serializer = TimeAndPlaceSerializer(occurence, many=False)
    return JsonResponse(serializer.data, safe=False)


'''
def getEveryDates(request, id):
    movie = Dates.objects.filter(movie__id = id)
    serializer = DatesSerializer(movie, many = True)

    return JsonResponse(serializer.data, safe=False) 
'''


'''
def getLocations(request, movie_id):
    locations = Location.objects.filter(date__id = movie_id)
    serializer = LocationSerializer(locations, many = True)

    return JsonResponse(serializer.data, safe=False)
'''

@csrf_exempt
def login_user(request):
    if request.method == "POST":
        data = JSONParser().parse(request)
        user = authenticate(username=data["username"], password=data["password"])
        if user is not None:
            login(request, user)
            return HttpResponse("Success!")
        else:
            raise Http404("Failed authentication")


@csrf_exempt
def create_user_account(request):
    if request.method == "POST":
        data = JSONParser().parse(request)
        try:
            models.User.objects.create_user(username=data["username"], password=data["password"])
        except:
            return HttpResponse("username already exists")

        return HttpResponse("user created")

def try_logout(request):
    logout(request)
    return HttpResponse("Logged out!")

def login_access(request):
    if not request.user.is_authenticated:
        return HttpResponseNotFound("User isnt logged in")
    else:
        # https://docs.djangoproject.com/en/5.0/ref/contrib/auth/#django.contrib.auth.models.User.get_username
        return HttpResponse(request.user.get_username())




@csrf_exempt
def addLog(request):
    if request.method == "POST" and request.user.is_authenticated:
        data = JSONParser().parse(request)

        # save it to Logs
        b = Logs(seats_he_booked = data, username = request.user.get_username())
        b.save()


        ''' 
        # modify the original
        a = Time.objects.get(id = int(data["time_id"]))
        for key, value in data["seats"].items():
            a.seats[key] = value


        a.save()
        '''
        # modify the original
        a = TimeAndPlace.objects.get(id = int(data["occur_id"]))
        for key, value in data["seats"].items():
            a.seats[key] = value

        a.save()
        return HttpResponse("Hi mom")
    



@csrf_exempt
def getAllTickets(request):
    if request.method == "POST" and request.user.is_authenticated:
        obj_to_send = []
        initial = Logs.objects.filter(username = request.user.get_username())
        for x in initial:
            init = {}
            init['occur_id'] = x.seats_he_booked['occur_id']
            init['movie_id'] = x.seats_he_booked['movie_id']
            # init['location_id'] = x.seats_he_booked['location_id']
            init['seats'] = x.seats_he_booked['seats']
            obj_to_send.append(init)


        for x in obj_to_send:
            eggs = TimeAndPlace.objects.get(id = x['occur_id'])
            x["starting_time"] = eggs.occurence.strftime("%H:%M, %m/%d/%Y")
            # spam = Location.objects.get(id = x['location_id'])
            x['hallName'] = eggs.hallName
            x['address'] = eggs.address
            x['film_name'] = Movie.objects.get(id = x['movie_id']).name


        obj_to_send = json.dumps(obj_to_send)
        obj_to_send = json.loads(obj_to_send)
        return JsonResponse(obj_to_send, safe=False)



    else:
        return Http404("User not logged in")
    


def auserpage(request, user):
    spam = { "foo": 2 }

    return render(request, "movies/index.html", spam)