from rest_framework.generics import ListAPIView, CreateAPIView, RetrieveUpdateDestroyAPIView
from django.contrib.auth import get_user_model
from rest_framework.permissions import IsAuthenticated, IsAdminUser, IsAuthenticatedOrReadOnly

from project.permissions import IsOwnerOrReadOnly
from issue.models import Issue
from issue.serializers import IssueSerializer, CreateIssueSerializer

User = get_user_model()


class CreateIssueView(CreateAPIView):

    queryset = Issue.objects.all()
    serializer_class = CreateIssueSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        try:
            serializer.save(owner=self.request.user)
        except KeyError:
            serializer.save(owner=self.request.user)


class ListIssueView(ListAPIView):

    queryset = Issue.objects.all()
    serializer_class = IssueSerializer
    search_fields = ['title']


class RetrieveUpdateDestroyIssueView(RetrieveUpdateDestroyAPIView):
    queryset = Issue.objects.all()
    serializer_class = IssueSerializer
    permission_classes = [IsOwnerOrReadOnly]


class ListIssuesByUserView(ListAPIView):
    """
        get:
        Get the all the issues created by a specific user in chronological order
     """
    serializer_class = IssueSerializer

    def get_queryset(self):
        user_id = self.kwargs["pk"]
        return Issue.objects.filter(user=user_id).order_by("-created")


class ListIssuesByCategoryView(ListAPIView):
    """
        get:
        Get the all the issues by category
     """
    serializer_class = IssueSerializer

    def get_queryset(self):
        category_id = self.kwargs["pk"]
        return Issue.objects.filter(categories__id=category_id).order_by("-created")

