# Generated by Django 5.0 on 2023-12-22 12:03

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0007_profileimage'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='profileimage',
            name='image_caption',
        ),
        migrations.RemoveField(
            model_name='profileimage',
            name='image_heading',
        ),
    ]
