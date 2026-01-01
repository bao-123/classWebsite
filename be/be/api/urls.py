from django.urls import path, include
from .views import MatchRequestListCreateView

urlpatterns = [
    path("match-requests/", MatchRequestListCreateView.as_view(), name="match-request-list-create"),
]