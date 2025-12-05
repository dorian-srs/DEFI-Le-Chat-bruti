const form = document.getElementById("chat-form");
const input = document.getElementById("user-input");
const chatWindow = document.getElementById("chat-window");

let isWaiting = false;

function addMessage(text, sender = "bot") {
    const wrapper = document.createElement("div");
    wrapper.classList.add("message", sender);

    const meta = document.createElement("div");
    meta.classList.add("meta");
    meta.textContent = sender === "user" ? "Toi" : "Titouan";

    const bubble = document.createElement("div");
    bubble.classList.add("bubble");
    bubble.textContent = text;

    wrapper.appendChild(meta);
    wrapper.appendChild(bubble);
    chatWindow.appendChild(wrapper);

    chatWindow.scrollTop = chatWindow.scrollHeight;
}

function setTyping(on) {
    let typingEl = document.querySelector(".typing");
    if (on) {
        if (!typingEl) {
            typingEl = document.createElement("div");
            typingEl.classList.add("typing");
            typingEl.textContent = "Titouan réfléchit inutilement...";
            chatWindow.appendChild(typingEl);
        }
    } else if (typingEl) {
        typingEl.remove();
    }
    chatWindow.scrollTop = chatWindow.scrollHeight;
}

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (isWaiting) return;

    const text = input.value.trim();
    if (!text) return;

    addMessage(text, "user");
    input.value = "";
    input.focus();

    isWaiting = true;
    setTyping(true);

    try {
        const res = await fetch("/api/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ message: text })
        });

        const data = await res.json();
        setTyping(false);
        isWaiting = false;

        addMessage(data.reply || "Titouan a essayé de répondre, mais a trébuché sur une métaphore.");
    } catch (err) {
        setTyping(false);
        isWaiting = false;
        addMessage("Une erreur cosmique est survenue. Même Titouan ne sait pas quoi en faire.", "bot");
    }
});
