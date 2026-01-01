from rest_framework import generics
from api.serializers import MatchRequestSerializer
from api.models import MatchRequest

class MatchRequestListCreateView(generics.ListCreateAPIView):
    queryset = MatchRequest.objects.all()
    serializer_class = MatchRequestSerializer


