let score = 0;
let cuddles = 0;
let heartGameStarted = false;

function goTo(screenName) {
  document.querySelectorAll(".screen").forEach(screen => {
    screen.classList.remove("active");
  });

  const nextScreen = document.getElementById(screenName);

  if (!nextScreen) return;

  nextScreen.classList.add("active");

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

  const buttons = [
    ...document.querySelectorAll("#care .options button")
  ];

  const index = buttons.indexOf(button);

  const messages = [
    "Coming right up, princess. ☕💗",
    "Chocolate acquired. This is a very serious mission. 🍫",
    "Blanket mode activated. No princess shall be cold. 🧸",
    "EVERYTHING?! Finally, someone understands. 😭💗"
  ];

  document.getElementById("comfort-message").textContent =
    messages[index];

  document
    .getElementById("care-next")
    .classList.remove("hidden");

  createHeartBurst(index === 3 ? 10 : 4);
}

function createCuddles() {
  const grid = document.getElementById("heart-grid");

  grid.innerHTML = "";

  cuddles = 0;
  heartGameStarted = true;

  document.getElementById("progress-bar").style.width = "0%";

  document.getElementById("cuddle-count").textContent =
    "0 / 8 cuddles";

  document.getElementById("cuddle-message").textContent =
    "Catch them all, princess. 💗";

  document
    .getElementById("cuddle-next")
    .classList.add("hidden");

  for (let i = 0; i < 8; i++) {
    createCuddleHeart(grid, i);
  }
}

function createCuddleHeart(grid, index) {
  const heart = document.createElement("button");

  heart.className = "heart";

  heart.textContent = "💗";

  heart.setAttribute(
    "aria-label",
    `Cuddle heart ${index + 1}`
  );

  heart.onclick = function () {
    if (!heartGameStarted) return;

    if (heart.classList.contains("popped")) return;

    heart.classList.add("popped");

    cuddles++;

    const percentage = cuddles * 12.5;

    document.getElementById("progress-bar").style.width =
      `${percentage}%`;

    document.getElementById("cuddle-count").textContent =
      `${cuddles} / 8 cuddles`;

    createHeartBurst(2);

    if (cuddles === 8) {
      completeCuddleMission();
    }
  };

  grid.appendChild(heart);
}

function completeCuddleMission() {
  heartGameStarted = false;

  score += 8;

  document.getElementById("cuddle-message").textContent =
    "Cuddle delivery complete. 🤗💗 You are officially trapped in my arms now.";

  document
    .getElementById("cuddle-next")
    .classList.remove("hidden");

  createHeartBurst(25);

  celebrateScreen();
}

function chooseNeed(button, points) {
  document.querySelectorAll("#needs .options button").forEach(btn => {
    btn.classList.remove("selected");
  });

  button.classList.add("selected");

  score += points;

  const buttons = [
    ...document.querySelectorAll("#needs .options button")
  ];

  const index = buttons.indexOf(button);

  const messages = [
    "Then sleep, princess. I'll protect the blanket kingdom. 👑",
    "Come here. Gentle mode only. 💆‍♀️💗",
    "Distraction protocol activated. Making you smile is now my mission. 🎮",
    "Best choice. Come here, my love. 🤗❤️"
  ];

  document.getElementById("need-message").textContent =
    messages[index];

  document
    .getElementById("final-next")
    .classList.remove("hidden");

  createHeartBurst(5);
}

function finishGame() {
  const percentage = Math.min(
    100,
    Math.round((score / 14) * 100)
  );

  document.getElementById("score").textContent =
    `Princess-care level: ${percentage}% 💗`;

  setTimeout(() => {
    createHeartBurst(25);
  }, 300);
}

/* LOVE LETTER */

function openLoveLetter() {
  const letter = document.getElementById("love-letter");
  const button = document.querySelector("#final .main-button");

  if (!letter) {
    console.error("Love letter element was not found.");
    return;
  }

  letter.classList.remove("hidden");

  if (button) {
    button.classList.add("hidden");
  }

  createHeartBurst(30);

  setTimeout(() => {
    letter.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }, 150);
}

function restartGame() {
  score = 0;
  cuddles = 0;
  heartGameStarted = false;

  document.querySelectorAll(".options button").forEach(button => {
    button.classList.remove("selected");
  });

  document.getElementById("comfort-message").textContent = "";

  document.getElementById("need-message").textContent =
    "Whatever you choose, I'm staying right here.";

  document.getElementById("care-next").classList.add("hidden");

  document.getElementById("final-next").classList.add("hidden");

  const letter = document.getElementById("love-letter");
  const letterButton = document.querySelector("#final .main-button");

  if (letter) {
    letter.classList.add("hidden");
  }

  if (letterButton) {
    letterButton.classList.remove("hidden");
  }

  goTo("start");
}

function createFloatingHeart() {
  const heart = document.createElement("span");

  heart.className = "floating-heart";

  const hearts = [
    "♡",
    "♥",
    "💗",
    "💕",
    "💖",
    "💞"
  ];

  heart.textContent =
    hearts[Math.floor(Math.random() * hearts.length)];

  heart.style.left =
    `${Math.random() * 100}%`;

  heart.style.fontSize =
    `${12 + Math.random() * 18}px`;

  heart.style.animationDuration =
    `${5 + Math.random() * 6}s`;

  document
    .getElementById("floating-hearts")
    .appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 12000);
}

function createHeartBurst(amount) {
  for (let i = 0; i < amount; i++) {
    setTimeout(() => {
      createFloatingHeart();
    }, i * 70);
  }
}

function celebrateScreen() {
  const card =
    document.querySelector("#cuddles .card");

  if (!card) return;

  card.animate(
    [
      {
        transform: "scale(1)"
      },
      {
        transform: "scale(1.025)"
      },
      {
        transform: "scale(1)"
      }
    ],
    {
      duration: 500,
      easing: "ease-out"
    }
  );
}

setInterval(() => {
  if (document.visibilityState === "visible") {
    createFloatingHeart();
  }
}, 900);

createHeartBurst(8);
