from django.db import models
from account.models import Account


class Post(models.Model):
    # id created by default
    title = models.TextField()
    user_id = models.ForeignKey(Account, on_delete=models.CASCADE)

    def __str__(self) -> str:
        return self.title


class Comment(models.Model):
    post_id = models.ForeignKey(Post, on_delete=models.CASCADE)
    parent_id = models.IntegerField()
    text = models.TextField()
    user_id = models.ForeignKey(Account, on_delete=models.CASCADE)

    def __str__(self) -> str:
        return self.text
