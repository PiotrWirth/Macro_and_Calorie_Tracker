# Generated by Django 4.1.5 on 2023-01-19 10:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0002_food_description'),
    ]

    operations = [
        migrations.AddField(
            model_name='food',
            name='weight',
            field=models.FloatField(default=1),
            preserve_default=False,
        ),
    ]
