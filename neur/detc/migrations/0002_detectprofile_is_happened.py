# Generated by Django 5.0.4 on 2024-06-25 03:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('detc', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='detectprofile',
            name='is_happened',
            field=models.BooleanField(default=False),
        ),
    ]
