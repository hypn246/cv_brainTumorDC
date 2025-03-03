from django import template
register = template.Library()

# for predict model
import os
os.environ['TF_CPP_MIN_LOG_LEVEL']='2'
# os.environ['KMP_DUPLICATE_LIB_OK'] = 'True'
import tensorflow as tf
from keras.models import load_model
import cv2
import numpy as np
from PIL import Image
IMG_SIZE=256

@register.simple_tag(name="loadModel")
def tumor_detect(param):
    model=load_model('C:/Users/admin/Desktop/PRO/Project/deep_learning/model/tumor_Alexx256_b32_sigmoid_BC_12epochs.keras')
    img = cv2.imread('C:/Users/admin/Desktop/PRO/Project/white_brain/neur'+param)
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
