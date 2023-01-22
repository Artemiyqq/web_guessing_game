from django.db import models


class Leaderboard(models.Model):
    player_name = models.CharField(max_length=15)
    player_score = models.IntegerField()
