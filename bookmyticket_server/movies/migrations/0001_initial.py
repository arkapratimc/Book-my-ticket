# Generated by Django 5.0.6 on 2025-01-14 13:58

import django.db.models.deletion
import movies.models
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Logs',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('username', models.CharField(max_length=500)),
                ('seats_he_booked', models.JSONField()),
            ],
        ),
        migrations.CreateModel(
            name='Movie',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('description', models.CharField(max_length=500)),
                ('runtime', models.IntegerField()),
                ('rating', models.IntegerField()),
                ('poster', models.CharField(max_length=200)),
                ('cover', models.CharField(max_length=200)),
            ],
        ),
        migrations.CreateModel(
            name='TimeAndPlace',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('occurence', models.DateTimeField()),
                ('hallName', models.CharField(max_length=200)),
                ('address', models.CharField(max_length=500)),
                ('seats', models.JSONField(default=movies.models.foo)),
                ('movie', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='movies.movie')),
            ],
        ),
    ]
