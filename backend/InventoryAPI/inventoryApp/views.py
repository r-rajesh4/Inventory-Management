from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView
from .models import Product
from .serializers import ProductSerializer
from rest_framework.exceptions import NotFound
# Create your views here.




class ProductCreateAPIView(APIView):
    def post(self, request, *args, **kwargs):
        serializer = ProductSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    def get(self, request, *args, **kwargs):
        products = Product.objects.all()
        serializer = ProductSerializer(products, many=True)  # Serialize the product queryset
        return Response(serializer.data)
    
    
    
    def put(self, request, *args, **kwargs):
        try:
            # Get the product instance based on the ID from URL
            product = Product.objects.get(id=kwargs['pk'])
        except Product.DoesNotExist:
            return Response({"detail": "Product not found."}, status=status.HTTP_404_NOT_FOUND)

        serializer = ProductSerializer(product, data=request.data)
        # Validate and save the updated product
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request, *args, **kwargs):
        product_id = kwargs.get('pk')
        try:
            product = Product.objects.get(pk=product_id)
        except Product.DoesNotExist:
            raise NotFound("Product not found.")
        
        product.delete()  # Delete the product
        return Response({"message": "Product deleted successfully"}, status=status.HTTP_204_NO_CONTENT)
# class ProductListAPIView(ListAPIView):
#     queryset = Product.objects.all()
#     serializer_class = ProductSerializer
