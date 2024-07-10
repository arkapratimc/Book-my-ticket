from django.urls import path

from . import views

urlpatterns = [
    path("", views.homepage, name="home page"),
    path("all-movies/", views.getAllMovies, name="All movies"),
    path("location/<movie>", views.locationPage, name="Location")
]