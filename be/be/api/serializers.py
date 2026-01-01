from rest_framework import serializers
from api.models import MatchRequest

class MatchRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = MatchRequest
        fields = ("requester_name", "requester_club", "status", "start_date")