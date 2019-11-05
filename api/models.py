from django.db import models

# I have already created a project for testing purpose
# I'm copy paste the code from there and show you how I did it.
# Let's start from here.
# We are going to create User registration first and then Login with JWT
from django.contrib.auth.models import AbstractUser
from django.utils.translation import ugettext_lazy as _ # If you need optional



# If you want to customize the Default user model you can Inherit the Abstract user model
class User(AbstractUser):
    username = models.CharField(max_length=10, unique=True)
    email = models.EmailField(_('email address'), unique=True)
    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['email', 'first_name', 'last_name']

    def __str__(self):
        return "{}".format(self.email)



    

