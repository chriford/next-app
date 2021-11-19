from django.contrib import admin
from .models import (
    EmployeeInfo
)
from .table_admin import (
    EmployeeInfoAdmin
)

admin.site.register(EmployeeInfo, EmployeeInfoAdmin)

# Register your models here.
