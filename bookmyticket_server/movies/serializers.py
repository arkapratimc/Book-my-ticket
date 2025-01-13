from rest_framework import serializers
from .models import Movie, Location, Time, Dates

class DatesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Dates
        fields = "__all__"

class MovieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movie
        fields = "__all__"




class TimeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Time
        fields = "__all__"



class LocationSerializer(serializers.ModelSerializer):

    time = TimeSerializer(many = True, read_only = True)


    class Meta:
        model = Location
        fields = "__all__"




