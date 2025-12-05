from flask import Flask, render_template, request, jsonify
from titouan_ai import ask_titouan

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/api/chat", methods=["POST"])
def chat():
    data = request.get_json()
    user_message = data.get("message", "").strip()

    if not user_message:
        return jsonify({"reply": "Même le silence a quelque chose à dire, mais là tu m'en demandes trop."}), 400

    try:
        reply = ask_titouan(user_message)
        return jsonify({"reply": reply})

    except Exception as e:
        print("=== ERREUR DANS L'API ===")
        print(e)
        raise  # Montre enfin l'erreur dans le terminal Flask


if __name__ == "__main__":
    app.run(debug=True)