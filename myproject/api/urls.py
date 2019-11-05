from django.urls import include, path
from rest_framework import routers
from myproject.api import views
from django.conf.urls import url,include


router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)
#  
# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    # path('', include(router.urls)),
    url(r'^', include(router.urls)),
    # path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework'))

]