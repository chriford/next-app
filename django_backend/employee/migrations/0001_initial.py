# Generated by Django 3.1.13 on 2021-11-13 05:52

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='EmployeeInfo',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('full_name', models.CharField(max_length=100, null=True, verbose_name='Full Name')),
                ('address', models.CharField(max_length=200, null=True, verbose_name='Address')),
                ('transport', models.CharField(choices=[(1, 'Walk'), (2, 'Bicycle'), (3, 'Bus'), (4, 'Car'), (6, 'Plane'), (5, 'Helicopter')], default=1, max_length=100, verbose_name='Transport')),
                ('distance', models.SmallIntegerField(verbose_name='Distance')),
                ('timestamp', models.DateTimeField(auto_now_add=True, verbose_name='Date Published')),
            ],
        ),
    ]
