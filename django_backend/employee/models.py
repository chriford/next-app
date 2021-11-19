from django.db import models
from django.utils.translation import gettext_lazy as _

class EmployeeInfo(models.Model):
    """
    Assign attributes to Employee Info table or model.
    """

    TRANSPORT_CHOICES = (
        ("Walk", _("Walk")),
        ("Walk", _("Bicycle")),
        ("Bus", _("Bus")),
        ("Car", _("Car")),
        ("Plane", _("Plane")),
        ("Helicopter", _("Helicopter"))
    )
    full_name = models.CharField(
        _("Full Name"),
        max_length=100,
        null=True,
        blank=False
    )
    address = models.CharField(
        _("Address"),
        max_length=200,
        null=True,
        blank=False
    )
    transport = models.CharField(
        _("Transport"),
        max_length=100,
        choices=TRANSPORT_CHOICES,
        default="Walk",
        null=True
    )
    distance = models.SmallIntegerField(
        _("Distance"),
    )
    timestamp = models.DateTimeField(
        _("Date Published"),
        auto_now_add=True
    )
    
    def __str__(self):
        return self.full_name

    class Meta:
        verbose_name = "EmployeeInfos"
        verbose_name_plural = "EmployeeInfo"
        ordering = ["-timestamp"]


# Create your models here.
