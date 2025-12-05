🎭 Titouan le Déviant
Le chatbot qui répond à tout… sauf à ce qu’on lui demande.
🧠 Présentation du défi

Pour la Nuit de l’Info, l’objectif n’était pas de construire un chatbot efficace.
Ni intelligent.
Ni pertinent d’ailleurs.

Le thème officiel :

« On ne cherche pas juste à s’instruire, on veut rire face à une IA persuadée d’être un philosophe du dimanche.
Votre chatbot ne répond pas aux questions : il les sublime, les détourne, parfois les oublie complètement…
Un compagnon de conversation délicieusement inutile, mais passionnément vivant. »

Nous avons donc créé Titouan le Déviant.

🧩 Qui est Titouan ?

Titouan est un chat-rlatan du numérique, un esprit flottant qui :

ne répond jamais directement à une question,

interprète tout de travers avec une confiance déconcertante,

digresse comme un philosophe fatigué,

oublie parfois ce qu’on lui demandait,

mais reste sincère, maladroit et profondément attachant.

Il s’exprime avec l’enthousiasme confus d’un invité du Dîner de cons, persuadé de donner la réponse de sa vie… alors qu’il parle complètement à côté.

Un vrai compagnon de conversation inutile, drôle et vivant.

✨ Fonctionnalités principales

💬 Chatbot web interactif

🎭 Persona complet : humour, naïveté, raisonnements bancals

🧠 Compréhension des expressions familières et argotiques

🎚️ Oublis et contresens occasionnels pour plus de naturel

🎬 Vidéo animée en fond (effet "cosmique déviant")

🤖 Génération des réponses via IA (OpenAI)

⚙️ Code léger, portable, facile à installer

📚 Technologies utilisées

Python / Flask pour le backend

JavaScript / HTML / CSS pour l’interface

OpenAI API pour générer les réponses absurdes et déviantes

WebM vidéo pour le fond animé

GitHub pour la mise à disposition du code

L’IA n’est pas indispensable dans le défi, mais nous l’avons utilisée pour donner à Titouan une personnalité riche et vivante.

🏗️ Structure du projet
titouan-bot/
├── app.py               # Serveur Flask
├── titouan_ai.py        # Persona + moteur de conversation
├── requirements.txt      # Dépendances
├── templates/
│   └── index.html        # Interface web
├── static/
│   ├── style.css         # Styles
│   ├── script.js         # Logique du chat
│   └── video/
│       └── cat-in-space.webm  # Fond animé
└── .env (non présent, clé API en local uniquement)

🚀 Installation locale
1. Cloner le repo
git clone https://github.com/dorian-srs/DEFI-Le-Chat-bruti.git
cd DEFI-Le-Chat-bruti

2. Installer les dépendances
pip install -r requirements.txt

3. Créer un fichier .env
OPENAI_API_KEY=ta_cle_ici

4. Lancer le serveur
python app.py

Made by Dorian Serieys
Team Le Genou de Tony


Puis ouvrir :

➡️ http://127.0.0.1:5000/
