# Generated by Django 4.1.5 on 2023-01-19 10:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='food',
            name='description',
            field=models.TextField(default=1, max_length=200),
            preserve_default=False,
        ),
    ]
