from django.db import models
# Create your models here.
class DetectProfile(models.Model):
    name=models.CharField(max_length=255)
    birth=models.IntegerField(blank=True, null=True)
    sex=models.CharField(max_length=7, blank=True, null=True)
    resigned_hospital=models.TextField(blank=True, null=True)
    is_happened=models.CharField(default='False', max_length=7, blank=True, null=True)
    image=models.ImageField(upload_to='classifi_mri_upload/')
    address=models.CharField(max_length=225, null=True, blank=True)
    phone=models.IntegerField(null=True, blank=True)
    result=models.CharField(max_length=225, null=True, blank=True)
    desc=models.TextField(null=True)
    create_at=models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return (f'{(self.name).replace(" ", "_")}-{(self.resigned_hospital).replace(" ", "_")}')
    
class ClassifiProfile(models.Model):
    name=models.CharField(max_length=255)
    birth=models.IntegerField(blank=True, null=True)
    sex=models.CharField(max_length=7, blank=True, null=True)
    resigned_hospital=models.TextField(blank=True, null=True)
    is_happened=models.CharField(default='False', max_length=7, blank=True, null=True)
    image=models.ImageField(upload_to='classifi_mri_upload/')
    address=models.CharField(max_length=225, null=True, blank=True)
    phone=models.IntegerField(null=True, blank=True)
    result=models.CharField(max_length=225, null=True, blank=True)
    desc=models.TextField(null=True)
    create_at=models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return (f'{(self.name).replace(" ", "_")}-{(self.resigned_hospital).replace(" ", "_")}')