from rest_framework import serializers
from .models import DetectProfile, ClassifiProfile

class DetectSerializer(serializers.ModelSerializer):
    class Meta:
        model=DetectProfile
        fields='__all__'
        
class ClassifiSerializer(serializers.ModelSerializer):
    class Meta:
        model=ClassifiProfile
        fields='__all__'