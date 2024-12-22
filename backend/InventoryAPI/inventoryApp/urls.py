# urls.py
from django.urls import path
from .views import ProductCreateAPIView

urlpatterns = [
    path('products/', ProductCreateAPIView.as_view(), name='product-create'),
    # path('products/<int:pk>/', ProductCreateAPIView.as_view(), name='product-update'),
    # path('products/list/', ProductListAPIView.as_view(), name='product-list'),
    path('products/<int:pk>/', ProductCreateAPIView.as_view(), name='product-detail-update'),
     path('products/<int:pk>/delete/', ProductCreateAPIView.as_view(), name='product-delete'),
    
]