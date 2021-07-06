from django.db.models import Avg
from rest_framework import serializers
from issue.models import Issue
from user.serializer import MainUserSerializer


class IssueSerializer(serializers.ModelSerializer):
    like_count = serializers.SerializerMethodField(read_only=True)
    user = MainUserSerializer(read_only=True)

    def get_issue_count(obj):
        return obj.issues.count()

    class Meta:
        model = Issue
        fields = ['id', 'title', 'content', 'user', 'like_count', 'longitude', 'latitude', 'city', 'zip', 'image',
                  'created', 'modified', 'categories']
        read_only_fields = ['id', 'created', 'modified', 'user', 'liked_by']


class CreateIssueSerializer(serializers.ModelSerializer):
    class Meta:
        model = Issue
        fields = ['id', 'title', 'longitude', 'latitude', 'city', 'zip', 'image', 'created', 'modified', 'categories']
        read_only_fields = ['id', 'created', 'modified']