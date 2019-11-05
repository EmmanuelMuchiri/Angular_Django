from django.urls import path

from  api.views import  HelloView

urlpatterns = [
    path('home/', HelloView.as_view(), name='hello'),
]