from django.urls import path

from . import views

urlpatterns = [
    path("", views.homepage, name="home page"),
    path("all-movies/", views.getAllMovies, name="All movies"),
    path("get-a-movie/<int:id>", views.getASpecificMovie, name="a spec movie"),
    path("get-locations/<int:movie_id>", views.getLocations, name="Get Locations"),
    path("get-specific-seat/<int:time_id>", views.getSpecSeat, name="get specific seats"),
    path("<movie>/<int:id>", views.locationPage, name="Location"),
    path("<movie_name>/<int:movie_id>/<location>/<int:location_id>", views.seatPage, name="Location"),
]