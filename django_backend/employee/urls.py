from django.urls import path
from .views import *
urlpatterns = [
    path('employee/get/all/', employees_info),
    path('employee/post/info/', employee_post_info),
    path('employee/get/info/<int:key>/', employee_info),
    path('employee/update/info/<int:key>/', update_employee_info),
    path('employee/delete/info/<int:key>/', delete_employee_info)
]
