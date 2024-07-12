from django.urls import path

from . import views

urlpatterns = [
    path("", views.homepage, name="home page"),
    path("all-movies/", views.getAllMovies, name="All movies"),
    path("location/<movie>/<int:id>", views.locationPage, name="Location"),
    path("get-a-movie/<int:id>", views.getASpecificMovie, name="a spec movie"),
    path("get-locations/<int:movie_id>", views.getLocations, name="Get Locations"),
]