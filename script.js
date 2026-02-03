// Teasing sequence
const questions = [
  "Madhuri… don’t even think about NO 😏",
  "Still here? You like the drama 😜",
  "NO is scared of you now 😈",
  "You’re smiling. I can feel it 😌",
  "Alright… final question 😇",
  "Madhuri, will you be my Valentine? ❤️🔥"
];

const teases = [
  "YES is clearly winning.",
  "You’re enjoying this way too much.",
  "NO has trust issues.",
  "Stop pretending to be serious.",
  "This is your moment.",
  "Say YES already 😍"
];

const popups = [
  "Why are you hesitating? 😏",
  "NO tried. NO failed. 😌",
  "Blink twice if you’re smiling 😜",
  "YES is inevitable 😈",
  "You’re adorable when confused 💕"
];

let step = 0;
let waitTimer;

// Buttons
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const questionEl = document.getElementById("question");
const teaseEl = document.getElementById("tease");
const popup = document.getElementById("popup");
const music = document.getElementById("bgMusic");

noBtn.addEventListener("mouseover", () => {
  noBtn.style.left = Math.random() * 85 + "%";
  noBtn.style.top = Math.random() * 85 + "%";
  showPopup(popups[Math.floor(Math.random() * popups.length)]);
});

yesBtn.addEventListener("click", nextStep);

function heartBurst() {
  for (let i = 0; i < 10; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerText = "❤️";
    heart.style.left = (50 + Math.random() * 20 - 10) + "%";
    heart.style.top = "65%";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 2000);
  }
}

function showPopup(text) {
  popup.innerText = text;
  popup.style.display = "block";
  setTimeout(() => (popup.style.display = "none"), 2000);
}

function startWaitTimer() {
  waitTimer = setTimeout(() => {
    showPopup("Taking too long… I’m judging 😌");
  }, 5000);
}

function nextStep() {
  clearTimeout(waitTimer);
  heartBurst();
  step++;

  if (step < questions.length) {
    questionEl.innerText = questions[step];
    teaseEl.innerText = teases[step];
    startWaitTimer();
  } else {
    startRomanticSection();
  }
}

// Romantic section with trips + hugs + admiration
function startRomanticSection() {
  // Clear main content
  const mainContent = document.getElementById("mainContent");
  mainContent.innerHTML = `
    <div id="overlay"></div>
    <h1 id="romanticLine">Madhuri… ❤️</h1>
    <p style="opacity:0.9;">Tap anywhere to continue</p>
  `;

  const lines = [
    "I really miss you. More than I ever say.",
    "Some days, I wish I could see you more than once — just to feel okay again.",
    "Being around you makes everything lighter. I’m genuinely happier when you’re near.",
    "Your eyes… they’re beautiful. And honestly, they’re my favorite place to get lost.",
    "When I imagine peace, I imagine hugging you tightly — the kind that feels like home.",
    "I can’t wait for our trip together… Rishikesh, Kedarnath, and Vrindavan. Just thinking about it makes me smile.",
    "I want to be with you every moment, exploring, laughing, and making memories.",
    "I want to hug you so tightly that the whole world fades away and it just feels like home.",
    "Every little thing about you makes me feel so happy — your smile, your laughter, the way you think.",
    "Being with you feels effortless and magical, like I’ve known you forever.",
    "You have the most amazing character I’ve ever seen, and I’m so happy to meet a person like you.",
    "— Yours, always 🫂"
  ];

  // Play music with fade in
  music.play();
  music.volume = 0;
  let vol = 0;
  const fadeIn = setInterval(() => {
    vol += 0.02;
    music.volume = vol;
    if (vol >= 0.25) clearInterval(fadeIn);
  }, 200);

  let i = 0;
  document.addEventListener("click", function showLine() {
    if (i < lines.length) {
      const romanticLine = document.getElementById("romanticLine");
      if (romanticLine) romanticLine.innerText = lines[i];
      i++;
    } else {
      document.removeEventListener("click", showLine);
    }
  });

  // Slow floating hearts
  setInterval(() => {
    const heart = document.createElement("div");
    heart.innerText = "❤️";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "%";
    heart.style.bottom = "0";
    heart.style.fontSize = "18px";
    heart.style.opacity = "0.6";
    heart.style.animation = "floatUp 6s linear";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 6000);
  }, 1200);
}