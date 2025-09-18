// app.js
let ITEMS = [];
const messages = document.getElementById("messages");
const retrievedList = document.getElementById("retrievedList");
const questionInput = document.getElementById("question");
const sendBtn = document.getElementById("send");

function appendMessage(text, cls="bot") {
  const el = document.createElement("div");
  el.className = "message " + cls;
  el.innerText = text;
  messages.appendChild(el);
  messages.scrollTop = messages.scrollHeight;
}

// Load local data.json
async function loadData() {
  const res = await fetch("data.json");
  ITEMS = await res.json();
  // create fuse instance
  window.fuse = new Fuse(ITEMS, {
    keys: ["name", "short", "details"],
    includeScore: true,
    threshold: 0.4,
    minMatchCharLength: 2
  });
}
loadData();

// Very small intent guessers
function intentType(question) {
  const q = question.toLowerCase();
  if (q.includes("where") || q.includes("located") || q.includes("location")) return "location";
  if (q.includes("visit") || q.includes("open") || q.includes("timing") || q.includes("hours")) return "visit";
  if (q.includes("near") || q.includes("nearby")) return "nearby";
  return "general";
}

// Build answer from retrieved hits
function buildAnswer(question, hits) {
  if (!hits || hits.length === 0) {
    return "I couldn't find a direct match in the local data. Try different keywords or ask to list monasteries near a place.";
  }

  const top = hits[0].item;
  const intent = intentType(question);

  if (intent === "location") {
    return `${top.name} is located at latitude ${top.lat}, longitude ${top.lng}. ${top.short} ${top.details} in Sikkim`;
  }

  if (intent === "visit") {
    return `${top.name}: ${top.short} Visit info: ${top.details}`;
  }

  if (intent === "nearby") {
    // list top 3 names
    const names = hits.slice(0, 3).map(h => h.item.name).join(", ");
    return `Monasteries matching your query: ${names}. Click an item in Retrieved to center it on the map (when integrated).`;
  }

  // general
  const snippet = top.details.length > 220 ? top.details.slice(0,220) + "…" : top.details;
  return `${top.name}: ${top.short} ${snippet}`;
}

// Run search with Fuse
function searchQuery(q) {
  if (!window.fuse) return { answer: "Data still loading. Please try again shortly.", hits: [] };
  const results = window.fuse.search(q);
  return results;
}

// Update retrieved list UI
function showRetrieved(hits) {
  retrievedList.innerHTML = "";
  if (!hits || hits.length === 0) {
    retrievedList.innerHTML = "<li>No matches found</li>";
    return;
  }
  hits.slice(0, 10).forEach(h => {
    const it = h.item;
    const li = document.createElement("li");
    li.innerHTML = `<strong>${it.name}</strong><small>${it.short || ""}</small>`;
    li.onclick = () => {
      // Placeholder: integrate with Leaflet map by calling your map function
      // e.g., window.map.setView([it.lat, it.lng], 14); window.markerById[it.id].openPopup();
      alert(`Map integration placeholder: center map on ${it.name} (${it.lat}, ${it.lng})`);
    };
    retrievedList.appendChild(li);
  });
}

// Main ask flow
async function ask(q) {
  if (!q) return;
  appendMessage(q, "user");
  appendMessage("Searching local data...", "bot");
  const hits = searchQuery(q);
  // remove the "Searching" message
  const botMsgs = [...document.querySelectorAll(".message.bot")];
  const last = botMsgs.pop();
  if (last && last.innerText === "Searching local data...") last.remove();

  const ans = buildAnswer(q, hits);
  appendMessage(ans, "bot");
  showRetrieved(hits);
}

// UI events
sendBtn.onclick = () => {
  const q = questionInput.value.trim();
  if (!q) return;
  ask(q);
  questionInput.value = "";
};

questionInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") sendBtn.click();
});
