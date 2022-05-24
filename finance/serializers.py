from rest_framework import serializers
from .models import Fund


class FundSerializer(serializers.ModelSerializer):
    class Meta:
        model = Fund
        fields = ('balance', 'status')


class AmtSerializer(serializers.Serializer):
    amount = serializers.FloatField()

    def validate(self, data):
        return data['amount']
