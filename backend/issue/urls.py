from django.urls import path
from issue.views import CreateIssuesView, RetrieveUpdateDestroyIssueView, ListIssuesByUserView, ListIssuesView, \
    ToggleIssuesLikesView, ListIssuesLikedByMyUserView

urlpatterns = [
    path('issues/new/', CreateIssuesView.as_view()),
    path('issues/', ListIssuesView.as_view()),
    path('issues/<int:pk>/', RetrieveUpdateDestroyIssueView.as_view()),
    path('issues/user/<int:pk>/', ListIssuesByUserView.as_view()),
    path('issues/like/<int:pk>/', ToggleIssuesLikesView.as_view()),
    path('issues/likes/', ListIssuesLikedByMyUserView.as_view()),

    # path('issues/category/<int:pk>/', ListIssuesByCategoryView.as_view()),
]
