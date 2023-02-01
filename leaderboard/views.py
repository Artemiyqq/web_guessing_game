from django.shortcuts import render
from .models import User


def index(request):
    nicknames = []
    scores = []
    for mini_dic in User.objects.order_by('-score')[:5].values():
        nicknames.append(mini_dic['name'])
        scores.append(mini_dic['score'])
    while len(nicknames) < 5:
        nicknames.append('...')
        scores.append(0)
    return render(request, 'leaderboard/index.html',
                  {'nicknames': nicknames, 'scores': scores})
