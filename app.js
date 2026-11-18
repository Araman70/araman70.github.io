const planetsData = {
  sun: {
    name: "The Sun",
    type: "Yellow Dwarf Star",
    lightMinutes: "0 light-minutes (Source)",
    distanceKm: "0 km (Center of System)",
    massEarth: "333,000 × Earth",
    gravity: "27.9 × Earth's gravity",
    orbitPeriod: "230M yrs (Galactic orbit)",
    orbitalSpeed: "220 km/s",
    dayLength: "27 Earth days (Rotation)",
    temp: "Surface: 5,500°C (9,930°F)",
    color: "radial-gradient(circle at 30% 30%, #fef08a, #f59e0b, #b45309)",
    description: "The star at the heart of our solar system. Its gravity holds the solar system together, keeping everything from the biggest planets to the smallest debris in its orbit.",
    music: {
      title: "\"Here Comes The Sun\" - The Beatles",
      // Drop your audio clip file path here (e.g. local mp3 or public URL)
      audioUrl: "here-comes-the-sun.mp3" // placeholder audio link
    }
  },
  mercury: {
    name: "Mercury",
    type: "Terrestrial Planet",
    lightMinutes: "3.2 light-minutes",
    distanceKm: "57.9 million km from Sun",
    massEarth: "0.055 × Earth",
    gravity: "38% of Earth's gravity",
    orbitPeriod: "88 Earth days",
    orbitalSpeed: "47.4 km/s",
    dayLength: "58.6 Earth days",
    temp: "Avg: 167°C (333°F)",
    color: "radial-gradient(circle at 30% 30%, #d1d5db, #6b7280, #1f2937)",
    description: "The smallest and innermost planet in the Solar System. Experiences extreme temperature swings between day and night.",
    music: {
      title: "\"On Mercury\" - Red Hot Chili Peppers",
      audioUrl: "mercury.mp3"
    }
  },
  venus: {
    name: "Venus",
    type: "Terrestrial Planet",
    lightMinutes: "6.0 light-minutes",
    distanceKm: "108.2 million km from Sun",
    massEarth: "0.815 × Earth",
    gravity: "90% of Earth's gravity",
    orbitPeriod: "225 Earth days",
    orbitalSpeed: "35.0 km/s",
    dayLength: "243 Earth days",
    temp: "Avg: 464°C (867°F)",
    color: "radial-gradient(circle at 30% 30%, #fde68a, #d97706, #78350f)",
    description: "Wrapped in thick sulfuric acid clouds that create a runaway greenhouse effect, making it the hottest planet.",
    music: {
      title: "\"The Final Countdown\" - Europe",
      audioUrl: "venus.mp3"
    }
  },
  earth: {
    name: "Earth",
    type: "Terrestrial Planet",
    lightMinutes: "8.3 light-minutes",
    distanceKm: "149.6 million km (1 AU)",
    massEarth: "1.000 × Earth",
    gravity: "9.81 m/s² (1 g)",
    orbitPeriod: "365.25 days",
    orbitalSpeed: "29.8 km/s",
    dayLength: "23h 56m",
    temp: "Avg: 15°C (59°F)",
    color: "radial-gradient(circle at 30% 30%, #38bdf8, #1d4ed8, #064e3b)",
    description: "Our home world and the only astronomical object known to harbor life. Roughly 71% is covered by liquid water.",
    music: {
      title: "\"Earth\" - Lil Dicky",
      audioUrl: "earth.mp3"
    }
  },
  mars: {
    name: "Mars",
    type: "Terrestrial Planet",
    lightMinutes: "12.7 light-minutes",
    distanceKm: "227.9 million km from Sun",
    massEarth: "0.107 × Earth",
    gravity: "38% of Earth's gravity",
    orbitPeriod: "687 Earth days",
    orbitalSpeed: "24.1 km/s",
    dayLength: "24h 37m",
    temp: "Avg: -65°C (-85°F)",
    color: "radial-gradient(circle at 30% 30%, #f87171, #b91c1c, #450a0a)",
    description: "Known as the Red Planet due to iron oxide on its surface. Home to Olympus Mons, the largest volcano in the Solar System.",
    music: {
      title: "\"Don't stop me now\" - Queen",
      audioUrl: "mars.mp3"
    }
  },
  jupiter: {
    name: "Jupiter",
    type: "Gas Giant",
    lightMinutes: "43.3 light-minutes",
    distanceKm: "778.5 million km from Sun",
    massEarth: "317.8 × Earth",
    gravity: "2.53 × Earth's gravity",
    orbitPeriod: "11.86 Earth years",
    orbitalSpeed: "13.1 km/s",
    dayLength: "9h 55m",
    temp: "Avg: -110°C (-166°F)",
    color: "radial-gradient(circle at 30% 30%, #fed7aa, #c2410c, #7c2d12)",
    description: "The largest planet in our Solar System-more than twice as massive as all other planets combined.",
    music: {
      title: "\"Jupiter\" - Earth, Wind & Fire",
      audioUrl: "jupiter.mp3"
    }
  },
  saturn: {
    name: "Saturn",
    type: "Gas Giant",
    lightMinutes: "79.3 light-minutes",
    distanceKm: "1.43 billion km from Sun",
    massEarth: "95.2 × Earth",
    gravity: "1.07 × Earth's gravity",
    orbitPeriod: "29.45 Earth years",
    orbitalSpeed: "9.7 km/s",
    dayLength: "10h 33m",
    temp: "Avg: -140°C (-220°F)",
    color: "radial-gradient(circle at 30% 30%, #fef08a, #ca8a04, #713f12)",
    hasRing: true,
    description: "Adorned with a dazzling system of icy rings, Saturn is the least dense planet-it would float in water.",
    music: {
      title: "\"Astronomy Domine\" - Pink Floyd",
      audioUrl: "saturn.mp3"
    }
  },
  uranus: {
    name: "Uranus",
    type: "Ice Giant",
    lightMinutes: "159.6 light-minutes",
    distanceKm: "2.87 billion km from Sun",
    massEarth: "14.5 × Earth",
    gravity: "89% of Earth's gravity",
    orbitPeriod: "84 Earth years",
    orbitalSpeed: "6.8 km/s",
    dayLength: "17h 14m",
    temp: "Avg: -195°C (-320°F)",
    color: "radial-gradient(circle at 30% 30%, #a5f3fc, #06b6d4, #164e63)",
    description: "An ice giant rotating on its side at a 98-degree tilt, likely caused by a massive ancient collision.",
    music: {
      title: "\"Uranus, the Magician\" - Gustav Holst",
      audioUrl: "The Planets - VI. Uranus, the Magician - Gustav Holst.mp3"
    }
  },
  neptune: {
    name: "Neptune",
    type: "Ice Giant",
    lightMinutes: "249.8 light-minutes",
    distanceKm: "4.50 billion km from Sun",
    massEarth: "17.1 × Earth",
    gravity: "1.14 × Earth's gravity",
    orbitPeriod: "164.8 Earth years",
    orbitalSpeed: "5.4 km/s",
    dayLength: "16h 06m",
    temp: "Avg: -200°C (-330°F)",
    color: "radial-gradient(circle at 30% 30%, #60a5fa, #1d4ed8, #1e1b4b)",
    description: "The farthest major planet where supersonic winds whip methane clouds at over 2,000 km/h.",
    music: {
      title: "\"Superfast Jellyfish\" - Gorillaz",
      audioUrl: "neptune.mp3"
    }
  },
  pluto: {
    name: "Pluto",
    type: "Dwarf Planet",
    lightMinutes: "326.5 light-minutes",
    distanceKm: "5.90 billion km from Sun",
    massEarth: "0.002 × Earth",
    gravity: "6% of Earth's gravity",
    orbitPeriod: "248 Earth years",
    orbitalSpeed: "4.7 km/s",
    dayLength: "153.3 Earth hours",
    temp: "Avg: -229°C (-400°F)",
    color: "radial-gradient(circle at 30% 30%, #d6d3d1, #a8a29e, #57534e)",
    description: "A complex dwarf planet in the Kuiper belt featuring mountains of water ice and a heart-shaped glacier named Tombaugh Regio.",
    music: {
      title: "\"Everything Black\" - Unlike Pluto",
      audioUrl: "Unlike Pluto - Everything Black (feat. Mike Taylor) [Official Lyric Video].mp3"
    }
  }
};

const homeView = document.getElementById("home-view");
const planetView = document.getElementById("planet-view");
const planetGrid = document.getElementById("planet-grid");
const navBar = document.getElementById("nav-bar");
const qrContainer = document.getElementById("qrcode");
const audioElement = document.getElementById("planet-audio");
const playAudioBtn = document.getElementById("play-audio-btn");

function initUI() {
  Object.entries(planetsData).forEach(([key, planet]) => {
    const navLink = document.createElement("a");
    navLink.href = `#${key}`;
    navLink.textContent = planet.name;
    navLink.dataset.planet = key;
    navBar.appendChild(navLink);

    const card = document.createElement("a");
    card.href = `#${key}`;
    card.className = "planet-card";
    card.innerHTML = `
      <div class="card-sphere" style="background: ${planet.color}"></div>
      <h2>${planet.name}</h2>
      <p style="color: var(--accent); font-size: 0.85rem; margin-top: 0.2rem;">${planet.music.title}</p>
    `;
    planetGrid.appendChild(card);
  });
}

function renderPlanet(planetKey) {
  const planet = planetsData[planetKey];
  if (!planet) {
    showHome();
    return;
  }

  homeView.classList.add("hidden");
  planetView.classList.remove("hidden");
  window.scrollTo(0, 0);

  document.querySelectorAll("nav a").forEach(a => {
    a.classList.toggle("active", a.dataset.planet === planetKey);
  });

  document.getElementById("detail-type").textContent = planet.type;
  document.getElementById("detail-name").textContent = planet.name;
  document.getElementById("detail-desc").textContent = planet.description;
  document.getElementById("detail-light-min").textContent = planet.lightMinutes;
  document.getElementById("detail-km").textContent = planet.distanceKm;
  document.getElementById("detail-mass").textContent = planet.massEarth;
  document.getElementById("detail-gravity").textContent = planet.gravity;
  document.getElementById("detail-orbit").textContent = planet.orbitPeriod;
  document.getElementById("detail-speed").textContent = planet.orbitalSpeed;
  document.getElementById("detail-day").textContent = planet.dayLength;
  document.getElementById("detail-temp").textContent = planet.temp;
  document.getElementById("detail-orbit-caption").textContent = `Orbital Velocity: ${planet.orbitalSpeed}`;

  const sphere = document.getElementById("detail-sphere");
  sphere.style.background = planet.color;
  sphere.classList.toggle("has-ring", Boolean(planet.hasRing));

  // Configure Audio Track
  document.getElementById("audio-track-title").textContent = planet.music.title;
  audioElement.src = planet.music.audioUrl;
  playAudioBtn.textContent = "▶ Play Theme";

  // QR Code
  const currentUrl = window.location.href;
  document.getElementById("qr-url").textContent = currentUrl;
  qrContainer.innerHTML = "";
  new QRCode(qrContainer, {
    text: currentUrl,
    width: 100,
    height: 100,
    colorDark: "#070913",
    colorLight: "#ffffff"
  });
}

// Audio Controls
playAudioBtn.addEventListener("click", () => {
  if (audioElement.paused) {
    if (!audioElement.src) {
      alert("Please link an audio file (.mp3) in app.js for this body!");
      return;
    }
    audioElement.play().catch(() => {
      alert("Audio playback restricted or file missing.");
    });
    playAudioBtn.textContent = "⏸ Pause";
  } else {
    audioElement.pause();
    playAudioBtn.textContent = "▶ Play Theme";
  }
});

audioElement.addEventListener("ended", () => {
  playAudioBtn.textContent = "▶ Play Theme";
});

function showHome() {
  audioElement.pause();
  planetView.classList.add("hidden");
  homeView.classList.remove("hidden");
  document.querySelectorAll("nav a").forEach(a => a.classList.remove("active"));
}

function handleRoute() {
  const hash = window.location.hash.replace("#", "").toLowerCase();
  if (hash && planetsData[hash]) {
    renderPlanet(hash);
  } else {
    showHome();
  }
}

window.addEventListener("hashchange", handleRoute);
initUI();
handleRoute();