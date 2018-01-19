from django.conf.urls import url
from . import views

urlpatters = [
	url(r'^list/$',views.home, name='tasklist'),
	url(r'^add/$',views.add_task, name='add-task'),
	url(r'^complete/$',views.complete_task, name='complete-task'),
	url(r'^index/$',views.index, name='index'),
	url(r'^add/$',views.add, name='add'),
	url(r'^details/$',views.details, name='details'),
]