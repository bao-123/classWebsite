from django.db import models

# Create your models here.
class MatchRequest(models.Model):
    class Status(models.TextChoices):
        PENDING = 'pending', 'Đang chờ xử lý'
        ACCEPTED = 'accepted', 'Đã lên kèo'
        REJECTED = 'rejected', 'Bị từ chối'

    requester_name = models.TextField()
    requester_club = models.CharField(max_length=150)
    status = models.CharField(max_length=20, choices=Status.choices, default='pending')
    start_date = models.TextField(blank=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"Request from {self.requester_name} ({self.status}): {self.start_date}"