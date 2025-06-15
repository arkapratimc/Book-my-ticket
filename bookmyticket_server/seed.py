import os
import django

# Step 1: Set the settings module environment variable
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'bookmyticket_server.settings')  # replace 'yourproject' with your project name

# Step 2: Setup Django
django.setup()

# Step 3: Import your models
from movies.models import Movie, TimeAndPlace  # replace 'yourapp' and 'YourModel' accordingly
from datetime import datetime


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
    name="Final Destination Bloodlines",
    description="Movie. Horror, Supernatural. The newest chapter in New Line Cinema's bloody successful franchise takes audiences back to the very beginning of Death's twisted sense of justice---\"Final Destination Bloodlines.\"",
    runtime=110,
    rating=5,
    poster="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/final-destination-bloodlines-et00432143-1746683831.jpg",
    cover="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/final-destination-bloodlines-et00432143-1746683831.jpg"
)

Movie.objects.create(
    name="Well Trained By Atul Khatri",
    description="Event. Comedy. Yes, meet Atul Khatri, , a middle-aged ex-CEO -tuned-comedian who quit his job in 2016 and now makes a living making people laugh harder than they ever.",
    runtime=124,
    rating=5,
    poster="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Atul_Khatri_in_Surat%2C_May_2022.jpg/500px-Atul_Khatri_in_Surat%2C_May_2022.jpg",
    cover="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Atul_Khatri_in_Surat%2C_May_2022.jpg/500px-Atul_Khatri_in_Surat%2C_May_2022.jpg"
)

Movie.objects.create(
    name="Telling Lies By Ashish Solanki",
    description="Event. Comedy. Aashish Solanki is back with a brand-new hour, and life’s a little different now. He’s a new dad—still figuring out how to be a parent while surviving on coffee and jokes.",
    runtime=124,
    rating=5,
    poster="https://preview.redd.it/ashish-solanki-v0-4k7q9n024std1.jpeg?width=554&format=pjpg&auto=webp&s=6a59cf37045d697e396ba8c75f8577e82855ddcb",
    cover="https://preview.redd.it/ashish-solanki-v0-4k7q9n024std1.jpeg?width=554&format=pjpg&auto=webp&s=6a59cf37045d697e396ba8c75f8577e82855ddcb"
)

Movie.objects.create(
    name="Kisiko batana mat by Anubhav Singh Bassi",
    description="Event. Comedy. After the great success of his previous show Bas kar bassi, Anubhav Singh Bassi is coming back to perform live on stage. This time, he will bring a whole new set of funny stories and jokes that will keep you entertained. Get ready to enjoy an exciting and hilarious performance that will make you laugh uncontrollably and leave you in high spirits.",
    runtime=124,
    rating=5,
    poster="https://m.media-amazon.com/images/S/pv-target-images/210a526803adc7d003d6a83eddffa06e13b1f037a25284175f5bf50dd4e6eba8.jpg",
    cover="https://m.media-amazon.com/images/S/pv-target-images/210a526803adc7d003d6a83eddffa06e13b1f037a25284175f5bf50dd4e6eba8.jpg"
)
Movie.objects.create(
    name="The Last Wish",
    description="Premiere. Drama, Romantic. The film tells the story of Deniz, who tries to fulfill her daughter's last wishes after her six-year-old daughter, Cemre, whom she raised alone, contracts a fatal disease.",
    runtime=124,
    rating=5,
    poster="https://m.media-amazon.com/images/M/MV5BZGNlZTQxZWYtMGZlMy00MjFlLWJlNWMtMGM3MjI5OTQ2NGMxXkEyXkFqcGc@._V1_QL75_UY207_CR2,0,140,207_.jpg",
    cover="https://m.media-amazon.com/images/M/MV5BZGNlZTQxZWYtMGZlMy00MjFlLWJlNWMtMGM3MjI5OTQ2NGMxXkEyXkFqcGc@._V1_QL75_UY207_CR2,0,140,207_.jpg"
)

Movie.objects.create(
    name="Hollywoodgate",
    description="Premiere. Documentary, War. Unprecedented and audacious, HOLLYWOODGATE is the riveting result of the year director Ibrahim Nash`at spent with the Taliban in the wake of the United States withdrawal from Afghanistan in 2021. Risking his life in the war-torn nation, Nash`at is on the ground with the Taliban when they enter an American base loaded with a portion of the roughly $7 billion worth of U.S. armaments left behind.",
    runtime=91,
    rating=5,
    poster="https://m.media-amazon.com/images/M/MV5BZTJiZDQ1NTgtNWYwMy00MTJjLTliMjEtZTE2OTdkZjExMDEwXkEyXkFqcGc@._V1_.jpg",
    cover="https://m.media-amazon.com/images/M/MV5BZTJiZDQ1NTgtNWYwMy00MTJjLTliMjEtZTE2OTdkZjExMDEwXkEyXkFqcGc@._V1_.jpg"
)
Movie.objects.create(
    name="Things will be different",
    description="Premiere. Horror, Scifi. When estranged siblings, Joseph and Sidney, rendezvous at a local diner after a close-call robbery, they hightail it to an abandoned farmhouse that transports them to a different time in order to escape the local cops. But when they try to return to their present after the coast is clear, an unknown metaphysical force cuts them off and maroons them on the land unless they do exactly what they're told. What comes from this not only bends the forces of spacetime but also b",
    runtime=102,
    rating=5,
    poster="https://m.media-amazon.com/images/M/MV5BNjVjZjBlMWItMWFkNS00ZGY4LTk2NzctN2JkNmJiNDQ0NzJhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    cover="https://m.media-amazon.com/images/M/MV5BNjVjZjBlMWItMWFkNS00ZGY4LTk2NzctN2JkNmJiNDQ0NzJhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
)


Movie.objects.create(
    name="The Other Way Around",
    description="Premiere. Comedy, Drama. After 15 years together, Ale and Alex have come up with the crazy idea of throwing a party to celebrate their recent breakup. While their close ones are quite skeptical, they seem to be sure of their decision. Or are they really?",
    runtime=112,
    rating=5,
    poster="https://m.media-amazon.com/images/M/MV5BNTVkNDU5NzUtMTUzZS00MTgzLWJjZTgtNjM1YmI2ODFlMDYzXkEyXkFqcGc@._V1_.jpg",
    cover="https://m.media-amazon.com/images/M/MV5BNTVkNDU5NzUtMTUzZS00MTgzLWJjZTgtNjM1YmI2ODFlMDYzXkEyXkFqcGc@._V1_.jpg"
)

Movie.objects.create(
    name="Green Night",
    description="Premiere. Comedy, Drama. In an effort to escape her troubled past, Jin Xia, a Chinese woman, marries a Korean man named Lee Seung-hun in exchange for legal status in South Korea.",
    runtime=92,
    rating=5,
    poster="https://m.media-amazon.com/images/S/pv-target-images/2123cb8921146d172c60964352233ada427661ecab783eaf410208f0e94fd80c.jpg",
    cover="https://m.media-amazon.com/images/S/pv-target-images/2123cb8921146d172c60964352233ada427661ecab783eaf410208f0e94fd80c.jpg"
)

Movie.objects.create(
    name="Marco the invented truth",
    description="""Premiere. Comedy, Drama. Based on true events, Marco explores the story of a concentration camp deportee who never existed.
Enric Marco, an immensely charismatic man who, for years, was able to maintain, before public opinion and his own family, a deeply complex lie""",
    runtime=101,
    rating=5,
    poster="https://upload.wikimedia.org/wikipedia/en/thumb/0/0f/Marco%2C_the_Invented_Truth_poster.jpg/250px-Marco%2C_the_Invented_Truth_poster.jpg",
    cover="https://upload.wikimedia.org/wikipedia/en/thumb/0/0f/Marco%2C_the_Invented_Truth_poster.jpg/250px-Marco%2C_the_Invented_Truth_poster.jpg"
)


queryset = Movie.objects.all()
for record in queryset:
    if record.description.startswith("Movie.") or record.description.startswith("Premiere"):
        dt1 = datetime(2025, 6, 16, 17, 30, 0)
        dt2 = datetime(2025, 6, 16, 18, 30, 0)
        dt3 = datetime(2025, 6, 17, 17, 30, 0)
        dt4 = datetime(2025, 6, 17, 18, 30, 0)
        TimeAndPlace.objects.create(
            occurence=dt1,
            movie=record,
            hallName="PVR",
            address="Diamond Plaza"
        )
        TimeAndPlace.objects.create(
            occurence=dt2,
            movie=record,
            hallName="PVR",
            address="Diamond Plaza"
        )
        TimeAndPlace.objects.create(
            occurence=dt3,
            movie=record,
            hallName="PVR",
            address="Diamond Plaza"
        )
        TimeAndPlace.objects.create(
            occurence=dt4,
            movie=record,
            hallName="PVR",
            address="Diamond Plaza"
        )
        TimeAndPlace.objects.create(
            occurence=dt1,
            movie=record,
            hallName="CC2",
            address="New Town"
        )
        TimeAndPlace.objects.create(
            occurence=dt2,
            movie=record,
            hallName="CC2",
            address="New Town"
        )
        TimeAndPlace.objects.create(
            occurence=dt3,
            movie=record,
            hallName="CC2",
            address="New Town"
        )
        TimeAndPlace.objects.create(
            occurence=dt4,
            movie=record,
            hallName="CC2",
            address="New Town"
        )

    else: 
        dt3 = datetime(2025, 6, 17, 17, 30, 0)
        TimeAndPlace.objects.create(
            occurence=dt3,
            movie=record,
            hallName="Kolkata Satire Club",
            address="New Town"
        )