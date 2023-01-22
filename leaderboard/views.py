from django.shortcuts import render
from .models import Leaderboard


def index(request):
    nicknames = []
    scores = []
    for mini_dic in Leaderboard.objects.order_by('player_score')[:5].values():
        nicknames.append(mini_dic['player_name'])
        scores.append(mini_dic['player_score'])
    while len(nicknames) < 5:
        nicknames.append('...')
        scores.append(0)
    return render(request, 'leaderboard/index.html',
                  {'nicknames': nicknames, 'scores': scores})
