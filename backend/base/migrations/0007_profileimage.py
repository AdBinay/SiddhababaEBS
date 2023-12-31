# Generated by Django 5.0 on 2023-12-20 01:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0006_schoolinformation'),
    ]

    operations = [
        migrations.CreateModel(
            name='Profileimage',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image_heading', models.CharField(max_length=200)),
                ('image_caption', models.TextField()),
                ('first_image', models.ImageField(blank=True, null=True, upload_to='')),
                ('second_image', models.ImageField(blank=True, null=True, upload_to='')),
                ('third_image', models.ImageField(blank=True, null=True, upload_to='')),
            ],
        ),
    ]
