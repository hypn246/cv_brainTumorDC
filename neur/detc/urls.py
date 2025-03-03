from django.urls import path
from . import views

app_name='detection'
urlpatterns = [
    path("", views.landpage, name='landpage'),
    # path("signup/", views.register, name='register'),

    path("list/", views.home, name='home'),
    path("detc/upload", views.detectUpload, name='detectUpload'),
    path("detc/predict", views.detectPredict, name='detectPredict'),
    path("detc/predict/detail/<int:id>", views.detectDetail, name='detectDetail'),
    path("detc/delete/<int:id>", views.detectDelete, name='detectDelete'),
    
    path("class/", views.classifiALL, name='classifiALL'),
    path("class/upload", views.classifiUpload, name='classifiUpload'),
    path("class/predict", views.classifiALL, name='classifiALL'),
    path("class/predict/detail/<int:id>", views.classifiDetail, name='classifiDetail'),
    path("class/delete/<int:id>", views.classifiDelete, name='classifiDelete')
]
