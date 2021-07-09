from rest_framework.generics import ListAPIView

from category.models import Category
from category.serializers import CategorySerializer


class ListCategoriesView(ListAPIView):

    queryset = Category.objects.all()
    serializer_class = CategorySerializer
