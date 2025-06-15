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

Movie.objects.create(
    name="Sonar Kellay Jawker Dhan",
    description="Movie. Mystery, Thriller. The adventure that began in Sonar Kella continues. Haunted by visions of a hidden treasure, Mukul Dhars fate is on the line. As danger closes in, Bimal, Rubi, and Kumar set off on a thrilling journey through the secrets of Jaisalmer Fort. Chasing riddles, uncovering legends, and seeking a mythical stone, they venture into a world that could change their lives forever.",
    runtime=134,
    rating=5,
    poster="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/sonar-kellay-jawker-dhan-et00443758-1745833639.jpg",
    cover="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/sonar-kellay-jawker-dhan-et00443758-1745833639.jpg"
)
Movie.objects.create(
    name="Mission Impossible The Final Reckoning",
    description="Movie. Action, Thriller. Our lives are a sum of our choices. Every choice, every mission has led to this. Tom Cruise is Ethan Hunt in Mission: Impossible - The Final Reckoning. Get ready to light the fuse, one last time!",
    runtime=169,
    rating=5,
    poster="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/mission-impossible-the-final-reckoning-et00419530-1731406540.jpg",
    cover="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/mission-impossible-the-final-reckoning-et00419530-1731406540.jpg"
)

Movie.objects.create(
    name="How to train your dragon",
    description="Movie. Adventure, Family. On the rugged isle of Berk, a Viking boy named Hiccup defies centuries of tradition by befriending a dragon named Toothless. However, when an ancient threat emerges that endangers both species, Hiccup`s friendship with Toothless becomes the key to forging a new future. Together, they must navigate the delicate path toward peace, soaring beyond the boundaries of their worlds and redefining what it means to be a hero and a leader.",
    runtime=169,
    rating=5,
    poster="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/how-to-train-your-dragon-et00420723-1739523360.jpg",
    cover="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/how-to-train-your-dragon-et00420723-1739523360.jpg"
)

Movie.objects.create(
    name="How to train your dragon",
    description="Movie. Adventure, Family. On the rugged isle of Berk, a Viking boy named Hiccup defies centuries of tradition by befriending a dragon named Toothless. However, when an ancient threat emerges that endangers both species, Hiccup`s friendship with Toothless becomes the key to forging a new future. Together, they must navigate the delicate path toward peace, soaring beyond the boundaries of their worlds and redefining what it means to be a hero and a leader.",
    runtime=169,
    rating=5,
    poster="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/how-to-train-your-dragon-et00420723-1739523360.jpg",
    cover="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/how-to-train-your-dragon-et00420723-1739523360.jpg"
)

Movie.objects.create(
    name="From the world of John Wick Ballerina",
    description="Movie. Action, Thriller. An assassin trained in the traditions of the Ruska Roma organization sets out to seek revenge after her father's death.",
    runtime=127,
    rating=5,
    poster="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/from-the-world-of-john-wick-ballerina-et00438964-1742536336.jpg",
    cover="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/from-the-world-of-john-wick-ballerina-et00438964-1742536336.jpg"
)

Movie.objects.create(
    name="Grihapravesh",
    description="Movie. Drama, Family. In a fading North Calcutta Rajbari, Titli clings to routine after her husband Shaon vanishes. As Durga Puja nears, Megh arrives, an unexpected guest who brings warmth and a painful revel of thought. Amid rituals and memories, unspoken grief surfaces, stirring buried emotions, silent longing, and the ache of unfinished stories.",
    runtime=156,
    rating=5,
    poster="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/grihapravesh-et00447957-1748595619.jpg",
    cover="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/grihapravesh-et00447957-1748595619.jpg"
)

Movie.objects.create(
    name="Pokkhirajer Dim",
    description="Movie. Mystery, Comedy. A struggling student finds a mysterious stone at a temple and turns to his quirky physics teacher for help, unleashing supernatural forces that change their lives at Akashgunj High School.",
    runtime=113,
    rating=5,
    poster="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/pokkhirajer-dim-et00369630-1748270543.jpg",
    cover="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/pokkhirajer-dim-et00369630-1748270543.jpg"
)

Movie.objects.create(
    name="Pokkhirajer Dim",
    description="""Movie. Horror, Supernatural. The newest chapter in New Line Cinema's bloody successful franchise takes audiences back to the very beginning of Death's twisted sense of justice---"Final Destination Bloodlines."""",
    runtime=110,
    rating=5,
    poster="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/final-destination-bloodlines-et00432143-1746683831.jpg",
    cover="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/final-destination-bloodlines-et00432143-1746683831.jpg"
)