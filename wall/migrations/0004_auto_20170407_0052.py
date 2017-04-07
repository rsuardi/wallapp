# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('wall', '0003_auto_20170406_2022'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='post',
            name='master_post',
        ),
        migrations.DeleteModel(
            name='MasterPost',
        ),
    ]
