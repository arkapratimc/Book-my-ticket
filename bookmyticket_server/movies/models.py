from django.db import models

# Create your models here.
class Movie(models.Model):
    name = models.CharField(max_length=50)
    description = models.CharField(max_length=500)
    # rating = models
    runtime = models.IntegerField()
    rating = models.IntegerField()

    poster = models.CharField(max_length=200)
    cover = models.CharField(max_length=200)

    # extras


    def __str__(self):
        return "{0}".format(self.name)





class Location(models.Model):
    hallName = models.CharField(max_length=200)
    address = models.CharField(max_length=500)
    # startTime = models.DateTimeField()
    # endTime = models.DateTimeField()

    # foreign key column
    movie = models.ForeignKey(Movie, on_delete=models.CASCADE)


    def __str__(self):
        return "{0}".format(self.hallName)


def foo():
    return { 1: False, 2: False, 3: False, 4: False, 5: False, 6: False, 7: False, 8: False, 9: False, 10: False }



class Time(models.Model):
    startTime = models.DateTimeField()
    endTime = models.DateTimeField()

    seats = models.JSONField(default=foo)


    location = models.ForeignKey(Location, on_delete=models.CASCADE, related_name='time')

    def __str__(self):
        return "Started at - {0}, Ends at - {1}".format(self.startTime, self.endTime)
    


class Logs(models.Model):
    username = models.CharField(max_length=500)
    seats_he_booked = models.JSONField()

    def __str__(self):
        return "{0}".format(self.username)