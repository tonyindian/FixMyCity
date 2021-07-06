from rest_framework import serializers
from django.contrib.auth import get_user_model

User = get_user_model()


class MainUserSerializer(serializers.ModelSerializer):
    comment_count = serializers.SerializerMethodField(read_only=True)
    issue_count = serializers.SerializerMethodField(read_only=True)

    def get_comment_count(self, obj):
        return obj.comments.count()

    def get_review_count(self, obj):
        return obj.user_issues.count()

    class Meta:
        model = User
        fields = ['id', 'username', 'first_name', 'last_name', 'email', 'profile_picture', 'comment_count',
                  'issue_count', 'comments', 'liked_issues', 'user_issues', 'date_joined', 'last_login']
        read_only_fields = ['id', 'email', 'comment_count', 'issue_count', 'comments',
                            'user_issues', 'liked_issues', 'date_joined', 'last_login']
