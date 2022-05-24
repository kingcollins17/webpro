from django.contrib import admin
from .models import Fund


class FundAdmin(admin.ModelAdmin):
    list_display = ('balance', 'user', 'status')
    list_filter = ('balance', 'status')


# Register your models here.
admin.site.register(Fund, FundAdmin)
