let score = 0;
let cuddles = 0;

function goTo(screenName) {
  document.querySelectorAll(".screen").forEach(screen => {
    screen.classList.remove("active");
  });

  document.getElementById(screenName).classList.add("active");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

  if (screenName === "cuddles") {
    createCuddles();
  }

  if (screenName === "final") {
    finishGame();
  }
}

function chooseComfort(button, points) {
  document.querySelectorAll("#care .options button").forEach(btn => {
    btn.classList.remove("selected");
  });

  button.classList.add("selected");
  score += points;

  const messages = [
    "Coming right up, princess. ☕💗",
    "Chocolate acquired. This is a very serious mission. 🍫",
    "Blanket mode activated. No princess shall be cold. 🧸",
    "EVERYTHING?! Finally, someone understands. 😭💗"
  ];

  const buttons = [...document.querySelectorAll("#care .options button")];
  const index = buttons.indexOf(button);

  document.getElementById("comfort-message").textContent = messages[index];
  document.getElementById("care-next").classList.remove("hidden");
}

function createCuddles() {
  const grid = document.getElementById("heart-grid");

  grid.innerHTML = "";
  cuddles = 0;

  document.getElementById("progress-bar").style.width = "0%";
  document.getElementById("cuddle-count").textContent = "0 / 8 cuddles";
  document.getElementById("cuddle-message").textContent = "";
  document.getElementById("cuddle-next").classList.add("hidden");

  for (let i = 0; i < 8; i++) {
    const heart = document.createElement("button");

    heart.className = "heart";
    heart.textContent = "💗";

    heart.onclick = function() {
      heart.classList.add("popped");
      cuddles++;

      document.getElementById("progress-bar").style.width =
        `${cuddles * 12.5}%`;

      document.getElementById("cuddle-count").textContent =
        `${cuddles} / 8 cuddles`;

      if (cuddles === 8) {
        score += 8;

        document.getElementById("cuddle-message").textContent =
          "Cuddle delivery complete. 🤗💗 You are officially trapped in my arms now.";

        document.getElementById("cuddle-next").classList.remove("hidden");

        createHeartBurst(15);
      }
    };

    grid.appendChild(heart);
  }
}

function chooseNeed(button, points) {
  document.querySelectorAll("#needs .options button").forEach(btn => {
    btn.classList.remove("selected");
  });

  button.classList.add("selected");
  score += points;

  const messages = [
    "Then sleep, princess. I'll protect the blanket kingdom. 👑",
    "Come here. Gentle mode only. 💆‍♀️💗",
    "Distraction protocol activated. Making you smile is now my mission. 🎮",
    "Best choice. Come here, my love. 🤗❤️"
  ];

  const buttons = [...document.querySelectorAll("#needs .options button")];
  const index = buttons.indexOf(button);

  document.getElementById("need-message").textContent = messages[index];
  document.getElementById("final-next").classList.remove("hidden");
}

function finishGame() {
  const percentage = Math.min(100, Math.round((score / 14) * 100));

  document.getElementById("score").textContent =
    `Princess-care level: ${percentage}% 💗`;

  createHeartBurst(20);
}

function restartGame() {
  score = 0;
  cuddles = 0;

  document.querySelectorAll(".options button").forEach(button => {
    button.classList.remove("selected");
  });

  document.getElementById("comfort-message").textContent = "";

  document.getElementById("need-message").textContent =
    "Whatever you choose, I'm staying right here.";

  document.getElementById("care-next").classList.add("hidden");
  document.getElementById("final-next").classList.add("hidden");

  goTo("start");
}

function createFloatingHeart() {
  const heart = document.createElement("span");

  heart.className = "floating-heart";

  const hearts = ["♡", "♥", "💗", "💕", "💖"];

  heart.textContent =
    hearts[Math.floor(Math.random() * hearts.length)];

  heart.style.left = `${Math.random() * 100}%`;
  heart.style.fontSize = `${12 + Math.random() * 18}px`;
  heart.style.animationDuration = `${5 + Math.random() * 6}s`;

  document.getElementById("floating-hearts").appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 12000);
}

function createHeartBurst(amount) {
  for (let i = 0; i < amount; i++) {
    setTimeout(createFloatingHeart, i * 100);
  }
}

setInterval(() => {
  if (document.visibilityState === "visible") {
    createFloatingHeart();
  }
}, 900);

createHeartBurst(8);
