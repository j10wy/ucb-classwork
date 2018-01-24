from django.db import models

# Create your models here.
class Task (models.Model):
	complete = models.BooleanField(default=False)
	due_date = models.DateField(auto_now=True)
	description = models.CharField(max_length=500, blank=False, null=False)

	def __str__(self):
		return self.description
