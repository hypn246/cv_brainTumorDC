from django.shortcuts import render, get_object_or_404, redirect, HttpResponse
from detc.models import DetectProfile, ClassifiProfile
from .forms import PatientForm, SignupForm

from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import DetectSerializer, ClassifiSerializer

from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import authenticate, login , logout

import os
os.chdir(os.path.dirname(os.path.abspath(__file__)))
os.environ['TF_CPP_MIN_LOG_LEVEL']='2'

from dotenv import load_dotenv
load_dotenv()
MODEL_IMG_UPLOAD=os.environ.get("MODEL_IMG_UPLOAD")
DETECTION_MODEL_PATH = os.environ.get("DETECTION_MODEL_PATH")
CLASSIFICATION_MODEL_PATH=os.getenv("CLASSIFICATION_MODEL_PATH")
# os.environ['KMP_DUPLICATE_LIB_OK'] = 'True'
IMG_SIZE=256
import tensorflow as tf
from keras.models import load_model
import cv2
import numpy as np
from PIL import Image
# Create your views here.
    
def home(request):
    return render(request, 'home.html')

def landpage(request):
    return render(request, 'landpage.html')

@api_view(['GET'])
def detectPredict(request):
    profiles=list(DetectProfile.objects.all())
    data=DetectSerializer(profiles, many=True)
    return Response(data.data, status=200)

def tumor_detect(param):
    model=load_model(DETECTION_MODEL_PATH)
    image_path = MODEL_IMG_UPLOAD+param # Join paths correctly
    img = cv2.imread(image_path)  # No extra arguments

    if img is None:
        print("Error: Could not read image.")
    else:
        print("Image loaded successfully.")

    img=Image.fromarray(img)
    img=img.resize((IMG_SIZE,IMG_SIZE))
    img=np.array(img)

    input=np.expand_dims(img,axis=0)
    input=tf.constant(input, dtype=tf.float32)
    input=input/255.0
    res=model.predict(input)
    if(res==1):
        return('there is tumor')
    else:
        return("there is no tumor")
    
@api_view(['GET'])
def detectDetail(request, id):
    obj=DetectProfile.objects.get(id=id)
    if obj.result is None:
        obj.result=tumor_detect(obj.image.url)
        obj.save()
    data=DetectSerializer(obj, many=False)
    return Response(data.data,status=200)


@csrf_exempt
def detectUpload(request):
    data=(request.POST).dict()
    print(data)
    name=data.get('name')
    birth=data.get('birth')
    resigned_hospital=data.get('resigned_hospital')
    desc=data.get('desc')
    image = request.FILES.get('image')
    print(image)
    new=DetectProfile.objects.create(
        name=name,
        birth=birth,
        resigned_hospital=resigned_hospital,
        image=image,
        desc=desc,
    )
    new.save()
    return redirect('http://localhost:3000/detect')


def detectDelete(request, id):
    item=get_object_or_404(DetectProfile, id=id)
    if item.image is not None:
        os.remove(item.image.path)
    item.delete()
    return redirect('http://localhost:3000/detect')

###

###
# tumor classification
def tumor_classifi(param):
    model=load_model(CLASSIFICATION_MODEL_PATH)
    image_path = MODEL_IMG_UPLOAD+param # Join paths correctly
    img = cv2.imread(image_path)  # No extra arguments

    if img is None:
        print("Error: Could not read image.")
    else:
        print("Image loaded successfully.")
    img=Image.fromarray(img)
    img=img.resize((IMG_SIZE,IMG_SIZE))
    img=np.expand_dims(img,axis=0)
    img=tf.constant(img, dtype=tf.float32)
    img=np.array(img)
    input=img/255.0
    res=model.predict(input)
    res=np.argmax(res)
    if (res==0):
        return('glioma')
    elif (res==1):
        return('meningioma')
    elif (res==2):
        return('no tumor')
    else:
        return('pituitary')
    
@api_view(['GET'])
def classifiALL(request):
    profiles=list(ClassifiProfile.objects.all())
    data=ClassifiSerializer(profiles, many=True)
    return Response(data.data, status=200)

@api_view(['GET'])
def classifiDetail(request, id):
    obj=ClassifiProfile.objects.get(id=id)
    if obj.result is None:
        obj.result=(f'There is {tumor_classifi(obj.image.url)}')
        obj.save()
    # return HttpResponse(obj)
    # data=get_object_or_404(DetectProfile, id=id)
    data=ClassifiSerializer(obj, many=False)
    return Response(data.data,status=200)
    # return render(request, 'detail.html',{'infs':data} )


@csrf_exempt
def classifiUpload(request):
    data=(request.POST).dict()
    print(data)
    name=data.get('name')
    birth=data.get('birth')
    resigned_hospital=data.get('resigned_hospital')
    desc=data.get('desc')
    phone=data.get('phone')
    address=data.get('address')
    is_happened=data.get('is_happened')
    sex=data.get('sex')
    image = request.FILES.get('image')
    new=ClassifiProfile.objects.create(
        name=name,
        birth=birth,
        resigned_hospital=resigned_hospital,
        image=image,
        desc=desc,
        is_happened=is_happened,
        sex=sex,
        phone=phone,
        address=address
    )
    new.save()
    return redirect('http://localhost:3000/class')
    # if request.method=='POST':
    #     form=PatientForm(request.POST,request.FILES)
    #     if form.is_valid():
    #         item=form.save(commit=False)
    #         item.save()
    #         return redirect('/detc/predict', id=item.id)
    # form=PatientForm()
    # return render(request, "upload.html", {'form':form})

def classifiDelete(request, id):
    item=get_object_or_404(ClassifiProfile, id=id)
    if item.image is not None:
        os.remove(item.image.path)
    item.delete()
    return redirect('http://localhost:3000/class')