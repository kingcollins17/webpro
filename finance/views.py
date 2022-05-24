from rest_framework import views, permissions, status, generics
from .serializers import FundSerializer, AmtSerializer
from rest_framework.response import Response


# Create your views here.


class FundView(generics.RetrieveAPIView):
    """api for returning user fund balance"""
    serializer_class = FundSerializer
    permission_classes = [
        permissions.IsAuthenticated,
    ]

    def get_object(self):
        return self.request.user.fund


class FundDepositView(views.APIView):
    permission_classes = [
        permissions.IsAuthenticated,
    ]

    def post(self, request):
        serializer = AmtSerializer(data=request.data)
        if serializer.is_valid():
            fund = self.request.user.fund
            fund.deposit(serializer.validated_data)
            fund.save()
            return Response(
                {
                    'message': f'deposit of ${serializer.validated_data} was successful',
                    'total funds': FundSerializer(fund).data
                },
                status=status.HTTP_202_ACCEPTED
            )
        return Response('Oops!, your deposit amount is not valid', status=status.HTTP_400_BAD_REQUEST)


class WithdrawFundsView(views.APIView):
    permission_classes = [
        permissions.IsAuthenticated,
    ]

    def post(self, request):
        serializer = AmtSerializer(data=request.data)
        if serializer.is_valid():
            fund = self.request.user.fund
            fund.withdraw(serializer.validated_data)
            fund.save()
            return Response(
                {
                    'message': f'withdrawal of ${serializer.validated_data} was successful',
                    'total funds': FundSerializer(fund).data
                },
                status=status.HTTP_202_ACCEPTED
            )
        return Response('Oops!, your withdrawal amount is not valid', status=status.HTTP_400_BAD_REQUEST)
