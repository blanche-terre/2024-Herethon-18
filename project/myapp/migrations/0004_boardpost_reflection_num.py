# Generated by Django 4.2.13 on 2024-07-05 16:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0003_friendship'),
    ]

    operations = [
        migrations.AddField(
            model_name='boardpost',
            name='reflection_num',
            field=models.BooleanField(default=False),
        ),
    ]