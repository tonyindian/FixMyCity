from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()


def user_directory_path(instance, filename):
    return f'{instance.name}/{filename}'


class Issue(models.Model):
    name = models.TextField(max_length=20)
    content = models.TextField(max_length=300)
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(to=User, related_name='user_issues', on_delete=models.CASCADE)
    liked_by = models.ManyToManyField(to=User, related_name='liked_issues')
    image = models.ImageField(upload_to=user_directory_path)

    def __str__(self):
        return self.name
