from .models import EmployeeInfo
from rest_framework import serializers

class EmployeeInfoSerializer(serializers.ModelSerializer):
    timestamp = serializers.SerializerMethodField()
    class Meta:
        model = EmployeeInfo
        fields = [
            'id',
            "full_name",
            "address",
            "transport",
            "distance",
            "timestamp",
        ]
    

    def get_timestamp(self, obj):
        cleaned_date = obj.timestamp.strftime("%d-%m-%Y, %H:%M:%S")
        return cleaned_date