# Generated by Django 4.0.4 on 2022-05-19 17:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('finance', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='fund',
            name='balance',
            field=models.FloatField(default=5.0),
        ),
    ]
