# Generated by Django 5.0.4 on 2024-07-07 04:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('detc', '0002_detectprofile_is_happened'),
    ]

    operations = [
        migrations.AddField(
            model_name='detectprofile',
            name='result',
            field=models.CharField(blank=True, max_length=225, null=True),
        ),
        migrations.AlterField(
            model_name='detectprofile',
            name='is_happened',
            field=models.BooleanField(blank=True, default=False, null=True),
        ),
    ]
