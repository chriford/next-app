from django.contrib import admin

class EmployeeInfoAdmin(admin.ModelAdmin):
    """
    Create Employee Info table admin.
    """
    list_display = [
        "full_name",
        "address",
        "transport",
        "distance",
        "timestamp",
    ]
