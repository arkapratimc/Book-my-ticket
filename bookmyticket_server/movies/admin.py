from django.contrib import admin
from .models import Movie, Location, Time, Dates
# Register your models here.
admin.site.register([Movie, Location, Time, Dates])