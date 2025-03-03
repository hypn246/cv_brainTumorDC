from django import forms
from .models import DetectProfile
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User

class PatientForm(forms.ModelForm):
    class Meta:
        model=DetectProfile
        fields = '__all__'

class SignupForm(UserCreationForm):
    class Meta:
        model=User
        fields=('username', 'password', 'email')