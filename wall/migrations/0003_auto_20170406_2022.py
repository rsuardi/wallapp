# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('wall', '0002_auto_20170406_1240'),
    ]

    operations = [
        migrations.CreateModel(
            name='MasterPost',
            fields=[
                ('id', models.AutoField(verbose_name='ID', primary_key=True, serialize=False, auto_created=True)),
                ('name', models.CharField(max_length=50)),
            ],
        ),
        migrations.AddField(
            model_name='post',
            name='master_post',
            field=models.ForeignKey(default=None, related_name='masterposts', to='wall.MasterPost'),
            preserve_default=False,
        ),
    ]
