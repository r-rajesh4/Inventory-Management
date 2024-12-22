from django.contrib import admin

# Register your models here.
from .models import Product, Inventory, Customer, Order, OrderItem

admin.site.register(Product)
admin.site.register(Inventory)
admin.site.register(Customer)
admin.site.register(Order)
admin.site.register(OrderItem)