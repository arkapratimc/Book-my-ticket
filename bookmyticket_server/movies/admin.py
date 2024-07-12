from django.contrib import admin
from .models import Movie, Location, Time
# Register your models here.
admin.site.register([Movie, Location, Time])