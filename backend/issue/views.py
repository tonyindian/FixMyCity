from rest_framework import status
from rest_framework.response import Response
from rest_framework.generics import ListAPIView, CreateAPIView, RetrieveUpdateDestroyAPIView, UpdateAPIView
from django.contrib.auth import get_user_model
from rest_framework.permissions import IsAuthenticated, IsAdminUser, IsAuthenticatedOrReadOnly

from project.permissions import IsOwnerOrReadOnly
from issue.models import Issue
from issue.serializers import IssueSerializer, CreateIssueSerializer

User = get_user_model()


class CreateIssuesView(CreateAPIView):

    queryset = Issue.objects.all()
    serializer_class = CreateIssueSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        try:
            serializer.save(user=self.request.user)
        except KeyError:
            serializer.save(user=self.request.user)


class ListIssuesView(ListAPIView):

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


# class ListIssuesByCategoryView(ListAPIView):
#     """
#         get:
#         Get the all the issues by category
#      """
#     serializer_class = IssueSerializer
#
#     def get_queryset(self):
#         category_id = self.kwargs["pk"]
#         return Issue.objects.filter(categories__id=category_id).order_by("-created")

class ToggleIssuesLikesView(UpdateAPIView):
    queryset = Issue.objects.all()
    serializer_class = IssueSerializer
    permission_classes = [IsAuthenticated]

    def patch(self, request, *args, **kwargs):
        issue = self.get_object()
        user = self.request.user

        if user == issue.user:
            return Response({'error': 'Cannot like own post'},
                            status=status.HTTP_400_BAD_REQUEST)

        if user in issue.liked_by.all():
            issue.liked_by.remove(user)
            return Response({'success': f' unliked issue {issue.id}'}, status=status.HTTP_200_OK)
        else:
            issue.liked_by.add(user)
            return Response({'success': f'liked issue {issue.id}'}, status=status.HTTP_200_OK)


class ListIssuesLikedByMyUserView(ListAPIView):

    serializer_class = IssueSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        liked = self.request.user.liked_issues.all()
        return Issue.objects.filter(id__in=liked).order_by("-created")
