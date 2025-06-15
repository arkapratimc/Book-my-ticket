import os
import django

# Step 1: Set the settings module environment variable
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'bookmyticket_server.settings')  # replace 'yourproject' with your project name

# Step 2: Setup Django
django.setup()

# Step 3: Import your models
from movies.models import Movie  # replace 'yourapp' and 'YourModel' accordingly

Movie.objects.create(
    name="Housefull 5",
    description="Movie. Comedy, Romance. India`s Biggest Franchise is back with the 5th instalment, and this time it is not just chaos and comedy.... But a KILLER Comedy with two different climaxes. Which one will you choose - Housefull 5A or Housefull 5B?",
    runtime=165,
    rating=5,
    poster="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/housefull-5-et00363347-1749445621.jpg",
    cover="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/housefull-5-et00363347-1749445621.jpg"
)
Movie.objects.create(
    name="The Eken Benaras e Bibhishika",
    description="Movie. Comedy, Adventure. Eken Babu arrives in Benaras with Bapi and Pramatha and soon finds himself entangled in a perplexing mystery. Strange coded messages lead him to a sinister conspiracy threatening the Masaan Holi festival. Racing against time, he must outsmart shadowy figures to save the sacred city from chaos.",
    runtime=118,
    rating=5,
    poster="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/the-eken-benaras-e-bibhishika-et00443498-1745597846.jpg",
    cover="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/the-eken-benaras-e-bibhishika-et00443498-1745597846.jpg"
)
Movie.objects.create(
    name="Raas",
    description="Movie. Family, Drama. Once a family of 34, the Chakrabortys were bound by laughter, tradition, and the grand celebration of Raas. But years ago, Rajat left home with his son, Somnath, after a painful fallout.  Now a successful corporate professional about to move abroad, Somnath discovers old letters that lead him back to Manikpur. Amidst a forgotten family, an old friend, and his beloved grandmother, he begins to rediscover himself. Raas is a poignant tale of identity, belonging, and the q",
    runtime=153,
    rating=5,
    poster="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/raas-et00446471-1747640332.jpg",
    cover="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/raas-et00446471-1747640332.jpg"
)
