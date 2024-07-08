from django.db import models

# Create your models here.
class Movie(models.Model):
    name = models.CharField(max_length=50)
    description = models.CharField(max_length=500)
    # rating = models
    runtime = models.IntegerField()
    rating = models.IntegerField()


    def __str__(self):
        return "{0}".format(self.name)





class Location:
    pass