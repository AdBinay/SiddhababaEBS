# Generated by Django 5.0 on 2023-12-19 11:01

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0005_mission_objectives_vission'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='SchoolInformation',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('school_name', models.CharField(max_length=200)),
                ('school_logo', models.ImageField(blank=True, null=True, upload_to='')),
                ('school_motto', models.CharField(max_length=200)),
                ('nepali_name', models.CharField(max_length=200)),
                ('school_email', models.EmailField(max_length=254, unique=True, verbose_name='email address')),
                ('school_phone', models.IntegerField()),
                ('school_address', models.CharField(max_length=200)),
                ('user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
