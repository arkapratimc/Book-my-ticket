from rest_framework import serializers
from .models import Movie, TimeAndPlace

class TimeAndPlaceSerializer(serializers.ModelSerializer):
    class Meta:
        model = TimeAndPlace
        fields = "__all__"


class MovieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movie
        fields = "__all__"







