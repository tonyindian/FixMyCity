from rest_framework import serializers

from issue.models import Issue
from user.serializers import UserSerializer


class IssueSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)

    def get_issue_count(obj):
        return obj.issue.count()

    class Meta:
        model = Issue
        fields = ['id', 'title', 'content', 'category', 'user', 'adress', 'longitude', 'latitude', 'city', 'zip', 'image',
                  'created', 'modified']
        read_only_fields = ['id', 'created', 'modified', 'user', 'upvoted_by']


class CreateIssueSerializer(serializers.ModelSerializer):
    class Meta:
        model = Issue
        fields = ['id', 'title', 'longitude', 'latitude', 'category', 'adress', 'city', 'zip', 'image', 'created', 'modified','content']
        read_only_fields = ['id', 'created', 'modified']