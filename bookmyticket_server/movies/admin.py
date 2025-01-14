from django.contrib import admin
from .models import Movie, TimeAndPlace
# Register your models here.
admin.site.register([Movie, TimeAndPlace])