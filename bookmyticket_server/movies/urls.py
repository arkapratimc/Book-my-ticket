from django.urls import path

from . import views

urlpatterns = [
    path("", views.homepage, name="home page"),
    path("all-movies/", views.getAllMovies, name="All movies"),
    path("get-a-movie/<int:id>", views.getASpecificMovie, name="a spec movie"),
    # path("get-every-dates/<int:id>", views.getEveryDates, name="get every dates for a movie"),
    # path("get-locations/<int:movie_id>", views.getLocations, name="Get Locations"),
    path("get-every-occurences/<int:movie_id>", views.getEveryOccurences, name="get every occurences"),
    path("get-seats/<int:occur_id>", views.getAspecificOccurence, name="get all seats"),
    path("get-specific-seat/<int:time_id>", views.getSpecSeat, name="get specific seats"),
    path("try-login", views.login_user, name="login"),
    path("login-access", views.login_access, name = "check whether the user is logged or not"),
    path("logout", views.try_logout, name="Log out the user"),
    path("create-user", views.create_user_account, name="create user account"),
    path("add-log", views.addLog, name="add log"),
    path("get-user-bookings", views.getAllTickets, name="get all tickets"),
    path("<movie>/<int:id>", views.locationPage, name="Location"),
    path("<movie>/<int:id>/<int:occur_id>", views.seatPage, name="seat page"),
    path("<movie_name>/<int:movie_id>/<location>/<int:location_id>/<int:timeid>", views.seatPage, name="Location"),
    path("<user>", views.auserpage, name="a user page"),
]