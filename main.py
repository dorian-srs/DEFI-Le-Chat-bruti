from titouan_ai import ask_titouan

print("============================================")
print("   TITOUAN LE DÉVIANT — Chatbot Humour Mystique")
print("============================================")
print("Pose une question. Tape 'quit' pour quitter.\n")

while True:
    user_input = input("Toi → ")

    if user_input.lower() in ("quit", "exit", "stop"):
        print("\Titouan → Chaque au revoir m'offre un abonnement gratuit à la nostalgie.")
        break

    response = ask_titouan(user_input)
    print("\TITOUAN → " + response + "\n")
