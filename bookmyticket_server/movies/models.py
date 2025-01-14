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


def foo():
    my_dict = {}
    array = list(range(1, 50+1))
    for item in array:
        my_dict[item] = False
    
    return my_dict

class TimeAndPlace(models.Model):
    occurence = models.DateTimeField()
    movie = models.ForeignKey(Movie, on_delete=models.CASCADE)
    hallName = models.CharField(max_length=200)
    address = models.CharField(max_length=500)
    seats = models.JSONField(default=foo)

    def __str__(self):
        return "{0} happening at {1}, {2}".format(self.occurence, self.hallName, self.address)



class Logs(models.Model):
    username = models.CharField(max_length=500)
    seats_he_booked = models.JSONField()

    def __str__(self):
        return "{0}".format(self.username)