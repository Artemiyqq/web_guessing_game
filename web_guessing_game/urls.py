from django.contrib import admin
from django.urls import path
from main_page import views as main_page_views
from play import views as play_views
from leaderboard import views as leaderboard_views
from account import views as account_views


urlpatterns = [
    path('admin', admin.site.urls),
    path('', main_page_views.index, name=''),
    path('play', play_views.index, name='play'),
    path('leadeboard', leaderboard_views.index, name='leaderboard'),
    path('account', account_views.index, name='account'),
]
