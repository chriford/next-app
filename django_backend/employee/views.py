from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .models import (
    EmployeeInfo
)
from .serializers import (
    EmployeeInfoSerializer
) 

@api_view(['GET'])
def employees_info(request):
    employees = EmployeeInfo.objects.all()
    employees_serializer = EmployeeInfoSerializer(employees, many=True)
    return Response(employees_serializer.data)

@api_view(['POST'])
def employee_post_info(request):
    employee_serializer = EmployeeInfoSerializer(data=request.data)
    if employee_serializer.is_valid():
        employee_serializer.save()
        return Response(employee_serializer.data, status=status.HTTP_201_CREATED)
    return Response(employee_serializer.data, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def employee_info(request, key):
    try:
        employee = EmployeeInfo.objects.get(id=key)
        employee_serializer = EmployeeInfoSerializer(employee)
        return Response(employee_serializer.data)
    except:
        return Response(f"No employee with id `{key}` was found")

@api_view(['GET', 'PUT'])
def update_employee_info(request, key):
    employee = EmployeeInfo.objects.get(id=key)
    if request.method == 'GET':
        employee_serializer = EmployeeInfoSerializer(employee)
        return Response(employee_serializer.data) 
    elif request.method == 'PUT':
        employee_serializer = EmployeeInfoSerializer(employee, data=request.data)
        if employee_serializer.is_valid():
            employee_serializer.save()
            return Response(employee_serializer.data)
    else:
        return Response("Method not allowed")

@api_view(['DELETE', 'GET'])
def delete_employee_info(request, key):
    employee = EmployeeInfo.objects.get(id=key)
    employee.delete()
    return Response("Employee info deleted successfully")

# Create your views here.
