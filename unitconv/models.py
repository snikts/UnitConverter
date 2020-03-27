from django.db import models

# Create your models here.


class unitConversions(models.Model):
    units = models.CharField(max_length=250)
    value = models.FloatField()


