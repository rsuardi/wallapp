# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
from django.conf import settings


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='post',
            fields=[
                ('id', models.AutoField(verbose_name='ID', primary_key=True, serialize=False, auto_created=True)),
                ('name', models.CharField(max_length=100)),
                ('datetime', models.DateTimeField(editable=False)),
                ('post_description', models.CharField(max_length=500)),
                ('user_id', models.ForeignKey(related_name='posts', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
