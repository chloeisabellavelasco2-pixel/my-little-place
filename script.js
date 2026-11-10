*/
  EDITING GUIDE
  - Set PASSPHRASE to the word you want Khloe to enter. This is a sweet entry screen,
    not real security: a password stored in browser code can be viewed by visitors.
  - Add your legally obtained audio file to your project, then set MUSIC_FILE below.
  - LETTERS, PHOTOS, and CONFESSION_TEXT are the personal content to customize.
*/

const PASSPHRASE = "april 22"; // Change this to your own passphrase.
const MUSIC_FILE = "assets.mp3";
const MUSIC_START_SECONDS = 58; // Change to the chorus start time in your audio file.
const LYRIC_LEAD_SECONDS = 0.36  ; // Small look-ahead to offset visual rendering lag.

// Approximate line starts supplied and adjusted by the user; change the times to fine-tune sync.
const LYRICS = [
  { time: 21, text: "If I could tell you all the things you are to me" },
  { time: 31, text: "I'd try to fit them all inside this song" },
  { time: 42, text: "The words I sing won't give our love no justice" },
  { time: 52, text: "'Cause what we have's a blessing from above" },
  { time: 62, text: "Though the winds may change" },
  { time: 68, text: "And the lights may fade" },
  { time: 73, text: "Our love will see us through" },
  { time: 83, text: "Take this heart to be yours, only yours" },
  { time: 93, text: "And every part of you will be mine, only mine" },
  { time: 103, text: "Even the ghosts and all the fears" },
  { time: 109, text: "Even the most uncertain years" },
  { time: 113, text: "I'll hold you close, it starts tonight" },
  { time: 123, text: "The night when our lives intertwine" },
  { time: 130, text: "..." },
  { time: 146, text: "If I could tell you all the times I prayed to Him" },

  { time: 157, text: "You would find them several hours long (ooh)" },
  { time: 166, text: "But I heard the heart speaks louder than a million voices raised" },
  { time: 177, text: "Now, the answer to my loudest prayer is standing here today" },
  { time: 187, text: "Though the winds may change" },
  { time: 192, text: "And the lights may fade" },
  { time: 198, text: "Our love will see us through" },
  { time: 209, text: "So take this heart to be yours, only yours" },
  { time: 219, text: "And every part of you will be mine, only mine" },
  { time: 228, text: "Even the ghosts and all the fears" },
  { time: 234, text: "Even the most uncertain years" },
  { time: 239, text: "I'll hold you close, it starts tonight" },
  { time: 248, text: "The night when our lives intertwine" },
  { time: 303, text: "Take this heart to be yours, only yours" },
  { time: 312, text: "And every part of you will be mine, only mine" },
  { time: 322, text: "Even the ghosts and all the fears" },
  { time: 328, text: "Even the most uncertain years" },
  { time: 332, text: "I'll hold you close, it starts tonight" },
  { time: 342, text: "The night when our lives intertwine" },
  { time: 353, text: "The night when our lives intertwine" },
  { time: 364, text: "" }
];

// Keep letter text as placeholders until you're ready to write your own messages.
const LETTERS = [
  { title: "A little hello", hint: "A note to begin", text: "[Write your own opening letter here. This placeholder is yours to replace.]" },
  { title: "A favorite memory", hint: "A moment to keep", text: "[Write about a memory you would like to share here.]" },
  { title: "Just because", hint: "A few kind words", text: "[Add any words you would like Khloe to read here.]" }
];

// Add photos under images/ and set each src to its file path. Leave src empty for a placeholder.
const PHOTOS = [
  { src: "images/optimized/Screenshot 2026-11-09 054841.jpg", file: "Screenshot 2026-11-09 054841.png", caption: "" },
  { src: "images/optimized/Screenshot 2026-11-09 062449.jpg", file: "Screenshot 2026-11-09 062449.png", caption: "" },
  { src: "images/optimized/Screenshot 2026-11-09 062502.jpg", file: "Screenshot 2026-11-09 062502.png", caption: "" },
  { src: "images/optimized/Screenshot 2026-11-09 062513.jpg", file: "Screenshot 2026-11-09 062513.png", caption: "" },
  { src: "images/optimized/Screenshot 2026-11-09 062523.jpg", file: "Screenshot 2026-11-09 062523.png", caption: "" },
  { src: "images/optimized/Screenshot 2026-11-09 062536.jpg", file: "Screenshot 2026-11-09 062536.png", caption: "" },
  { src: "images/optimized/Screenshot 2026-11-09 062547.jpg", file: "Screenshot 2026-11-09 062547.png", caption: "" },
  { src: "images/optimized/Screenshot 2026-11-09 062558.jpg", file: "Screenshot 2026-11-09 062558.png", caption: "" },
  { src: "images/optimized/Screenshot 2026-11-09 062612.jpg", file: "Screenshot 2026-11-09 062612.png", caption: "" },
  { src: "images/optimized/Screenshot 2026-11-09 065412.jpg", file: "Screenshot 2026-11-09 065412.png", caption: "" },
  { src: "images/optimized/Screenshot 2026-11-09 063841.jpg", file: "Screenshot 2026-11-09 063841.png", caption: "" },
  { src: "images/optimized/Screenshot 2026-11-09 063300.jpg", file: "Screenshot 2026-11-09 063300.png", caption: "" },
  { src: "images/optimized/Screenshot 2026-11-09 063106.jpg", file: "Screenshot 2026-11-09 063106.png", caption: "" },
  { src: "images/optimized/Screenshot 2026-11-09 062943.jpg", file: "Screenshot 2026-11-09 062943.png", caption: "" },
  { src: "images/optimized/Screenshot 2026-11-09 062855.jpg", file: "Screenshot 2026-11-09 062855.png", caption: "" }
];

// The confession is intentionally an editable placeholder, not a pre-written love letter.
const CONFESSION_TEXT = "[Write your honest confession here. Share what you feel in your own words, and remember that she is free to feel or respond however she wishes.]";

const welcome = document.getElementById("welcome");
const unlockForm = document.getElementById("unlock-form");
const passphraseInput = document.getElementById("passphrase");
const formMessage = document.getElementById("form-message");
const site = document.getElementById("site");
const lilyRain = document.getElementById("lily-rain");
const galleryIntro = document.getElementById("home");
const memoriesSection = document.getElementById("memories");
const watchMemoriesButton = document.getElementById("watch-memories");
const memoryFilm = document.getElementById("memory-film");
const filmLyric = document.getElementById("film-lyric");
const filmImages = [
  document.getElementById("film-image-one"),
  document.getElementById("film-image-two")
];
const filmCounter = document.getElementById("film-counter");
const filmProgress = document.getElementById("film-progress");
const filmToggle = document.getElementById("film-toggle");
const letterDialog = document.getElementById("letter-dialog");
const photoDialog = document.getElementById("photo-dialog");
const photoDialogImage = document.getElementById("photo-dialog-image");
const photoDialogPlaceholder = document.getElementById("photo-dialog-placeholder");
const photoDialogFilename = document.getElementById("photo-dialog-filename");
const photoDialogCaption = document.getElementById("photo-dialog-caption");
const photoCounter = document.getElementById("photo-counter");
const toast = document.getElementById("toast");
const audio = document.getElementById("background-audio");
const musicToggle = document.getElementById("music-toggle");
const musicLabel = document.getElementById("music-label");
const lyricDisplay = document.getElementById("lyric-display");
const lyricLine = document.getElementById("lyric-line");
let toastTimer;
let wrongPasswordTimer;
let galleryOpened = false;
let currentPhotoIndex = 0;
let filmIndex = 0;
let filmTimer;
let filmPlaying = false;
let filmFrameReady = false;
let activeFilmImageIndex = -1;

// Build editable letter envelopes.
const letterGrid = document.getElementById("letter-grid");
LETTERS.forEach((letter, index) => {
  const card = document.createElement("article");
  card.className = "letter-card";
  const envelope = document.createElement("div");
  envelope.className = "envelope-icon";
  envelope.setAttribute("aria-hidden", "true");
  envelope.textContent = "♡";
  const title = document.createElement("h3");
  title.textContent = letter.title;
  const hint = document.createElement("p");
  hint.textContent = letter.hint;
  const openButton = document.createElement("button");
  openButton.type = "button";
  openButton.className = "letter-open";
  openButton.setAttribute("aria-label", `Open letter ${index + 1}: ${letter.title}`);
  openButton.addEventListener("click", () => openLetter(letter));
  card.append(envelope, title, hint, openButton);
  letterGrid.append(card);
});

function openLetter(letter) {
  document.getElementById("dialog-title").textContent = letter.title;
  document.getElementById("dialog-copy").textContent = letter.text;
  if (typeof letterDialog.showModal === "function") {
    letterDialog.showModal();
  } else {
    // Older browser fallback: show a simple alert rather than leaving the button inert.
    window.alert(`${letter.title}\n\n${letter.text}`);
  }
}

document.getElementById("dialog-close").addEventListener("click", () => letterDialog.close());
letterDialog.addEventListener("click", (event) => {
  if (event.target === letterDialog) letterDialog.close();
});

// Render photos safely; empty paths create friendly, non-broken placeholders.
const galleryGrid = document.getElementById("gallery-grid");
PHOTOS.forEach((photo, index) => {
  const card = document.createElement("article");
  const photoSize = index === 0 ? "featured" : index < 5 ? "medium" : "small";
  card.className = `gallery-card gallery-card-${photoSize}`;
  card.style.setProperty("--photo-tilt", `${((index % 5) - 2) * 0.65}deg`);
  const frame = document.createElement("div");
  frame.className = "gallery-image";
  if (photo.src.trim()) {
    const image = document.createElement("img");
    image.src = photo.src;
    image.alt = photo.caption || `Photo ${index + 1}`;
    image.loading = "lazy";
    frame.append(image);
    image.addEventListener("error", () => {
      image.remove();
      addPhotoPlaceholder(frame, photo.file);
    }, { once: true });
  } else {
    addPhotoPlaceholder(frame, photo.file);
  }
  const openButton = document.createElement("button");
  openButton.type = "button";
  openButton.className = "photo-open";
  openButton.setAttribute("aria-label", `Open photo ${index + 1}${photo.caption ? `: ${photo.caption}` : ""}`);
  openButton.append(frame);
  openButton.addEventListener("click", () => openPhoto(index));
  const caption = document.createElement("p");
  caption.className = "gallery-caption";
  caption.textContent = photo.caption;
  caption.hidden = !photo.caption.trim();
  card.append(openButton, caption);
  galleryGrid.append(card);
});

function addPhotoPlaceholder(frame, filename = "photo.jpg") {
  const placeholder = document.createElement("span");
  placeholder.className = "gallery-placeholder";
  placeholder.setAttribute("aria-hidden", "true");
  const mark = document.createElement("span");
  mark.className = "photo-placeholder-mark";
  mark.textContent = "♡";
  const name = document.createElement("span");
  name.className = "photo-placeholder-name";
  name.textContent = filename;
  placeholder.append(mark, name);
  frame.append(placeholder);
}

function renderPhotoDialog() {
  const photo = PHOTOS[currentPhotoIndex];
  const hasImage = Boolean(photo.src.trim());
  photoCounter.textContent = `${currentPhotoIndex + 1} / ${PHOTOS.length}`;
  photoDialogImage.hidden = !hasImage;
  photoDialogPlaceholder.hidden = hasImage;
  photoDialogImage.onerror = () => {
    photoDialogImage.hidden = true;
    photoDialogPlaceholder.hidden = false;
    photoDialogFilename.textContent = photo.file;
  };
  if (hasImage) {
    photoDialogImage.src = photo.src;
    photoDialogImage.alt = photo.caption || `Photo ${currentPhotoIndex + 1}`;
  } else {
    photoDialogImage.removeAttribute("src");
    photoDialogFilename.textContent = photo.file;
  }
  photoDialogCaption.textContent = photo.caption;
  photoDialogCaption.hidden = !photo.caption.trim();
}

function openPhoto(index) {
  currentPhotoIndex = index;
  renderPhotoDialog();
  if (typeof photoDialog.showModal === "function") photoDialog.showModal();
}

function movePhoto(direction) {
  currentPhotoIndex = (currentPhotoIndex + direction + PHOTOS.length) % PHOTOS.length;
  renderPhotoDialog();
}

document.getElementById("photo-dialog-close").addEventListener("click", () => photoDialog.close());
document.getElementById("photo-prev").addEventListener("click", () => movePhoto(-1));
document.getElementById("photo-next").addEventListener("click", () => movePhoto(1));
photoDialog.addEventListener("click", (event) => {
  if (event.target === photoDialog) photoDialog.close();
});
photoDialog.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") movePhoto(-1);
  if (event.key === "ArrowRight") movePhoto(1);
});

function playShutterSound() {
  const AudioContextType = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextType) return;
  const context = new AudioContextType();
  const buffer = context.createBuffer(1, Math.floor(context.sampleRate * .14), context.sampleRate);
  const samples = buffer.getChannelData(0);
  for (let index = 0; index < samples.length; index += 1) {
    samples[index] = (Math.random() * 2 - 1) * (1 - index / samples.length);
  }
  const source = context.createBufferSource();
  const filter = context.createBiquadFilter();
  const gain = context.createGain();
  source.buffer = buffer;
  filter.type = "highpass";
  filter.frequency.value = 700;
  gain.gain.setValueAtTime(.12, context.currentTime);
  gain.gain.exponentialRampToValueAtTime(.001, context.currentTime + .14);
  source.connect(filter);
  filter.connect(gain);
  gain.connect(context.destination);
  source.addEventListener("ended", () => context.close(), { once: true });
  source.start();
}

function scheduleFilmAdvance() {
  window.clearTimeout(filmTimer);
  filmTimer = window.setTimeout(() => {
    if (filmIndex === PHOTOS.length - 1) {
      filmPlaying = false;
      filmCounter.textContent = "The slideshow has ended.";
      filmToggle.textContent = "▶";
      filmToggle.setAttribute("aria-label", "Play slideshow again");
      window.setTimeout(() => {
        if (!memoryFilm.open) return;
        memoryFilm.close();
        revealGallery();
      }, 2400);
      return;
    }
    filmIndex += 1;
    renderFilmFrame();
  }, 3400);
}

function renderFilmFrame() {
  const photo = PHOTOS[filmIndex];
  const nextFilmImageIndex = activeFilmImageIndex === 0 ? 1 : 0;
  const nextImage = filmImages[nextFilmImageIndex];
  filmFrameReady = false;
  filmCounter.textContent = `Memory ${filmIndex + 1} of ${PHOTOS.length}`;
  filmProgress.max = PHOTOS.length;
  filmProgress.value = filmIndex + 1;
  nextImage.alt = photo.caption || `Memory ${filmIndex + 1}`;

  const frameReady = () => {
    if (filmFrameReady) return;
    filmFrameReady = true;
    nextImage.classList.add("is-active");
    if (activeFilmImageIndex !== -1) {
      filmImages[activeFilmImageIndex].classList.remove("is-active");
    }
    activeFilmImageIndex = nextFilmImageIndex;
    if (filmPlaying) scheduleFilmAdvance();
  };

  nextImage.onload = frameReady;
  nextImage.onerror = () => {
    filmCounter.textContent = `Memory ${filmIndex + 1} could not be loaded`;
  };
  if (photo.src.trim()) {
    nextImage.src = photo.src;
    if (nextImage.complete && nextImage.naturalWidth > 0) frameReady();
  } else {
    nextImage.removeAttribute("src");
    frameReady();
  }
}

function stopFilm() {
  filmPlaying = false;
  window.clearTimeout(filmTimer);
  filmToggle.textContent = filmIndex === PHOTOS.length - 1 ? "▶" : "Ⅱ";
  filmToggle.setAttribute("aria-label", filmIndex === PHOTOS.length - 1 ? "Play slideshow again" : "Resume slideshow");
}

function revealGallery() {
  if (galleryOpened) return;
  galleryOpened = true;
  memoriesSection.hidden = false;
  galleryGrid.querySelectorAll("img").forEach((image) => {
    image.loading = "eager";
  });
  galleryIntro.hidden = true;
  window.scrollTo({ top: 0, behavior: "instant" });
}

watchMemoriesButton.addEventListener("click", () => {
  filmIndex = 0;
  filmPlaying = true;
  filmLyric.textContent = lyricLine.textContent;
  filmToggle.textContent = "Ⅱ";
  filmToggle.setAttribute("aria-label", "Pause slideshow");
  renderFilmFrame();
  if (typeof memoryFilm.showModal === "function") memoryFilm.showModal();
  else memoryFilm.setAttribute("open", "");
});

document.querySelector('a[href="#memories"]').addEventListener("click", (event) => {
  event.preventDefault();
  revealGallery();
});

filmToggle.addEventListener("click", () => {
  if (filmPlaying) {
    stopFilm();
    return;
  }
  if (filmIndex === PHOTOS.length - 1) {
    filmIndex = 0;
    renderFilmFrame();
  }
  filmPlaying = true;
  filmToggle.textContent = "Ⅱ";
  filmToggle.setAttribute("aria-label", "Pause slideshow");
  if (filmFrameReady) scheduleFilmAdvance();
});

document.getElementById("film-close").addEventListener("click", () => {
  memoryFilm.close();
  revealGallery();
});
memoryFilm.addEventListener("close", stopFilm);
memoryFilm.addEventListener("click", (event) => {
  if (event.target === memoryFilm) memoryFilm.close();
});

document.getElementById("confession-copy").textContent = CONFESSION_TEXT;

// Unlock with a little envelope-opening transition. Client-side passphrases are not secure.
unlockForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (passphraseInput.value.trim().toLocaleLowerCase() !== PASSPHRASE.toLocaleLowerCase()) {
    formMessage.textContent = "try your birthday";
    welcome.classList.remove("is-error");
    void welcome.offsetWidth;
    welcome.classList.add("is-error");
    window.clearTimeout(wrongPasswordTimer);
    wrongPasswordTimer = window.setTimeout(() => welcome.classList.remove("is-error"), 700);
    passphraseInput.select();
    return;
  }
  formMessage.textContent = "";
  if (MUSIC_FILE.trim()) {
    musicToggle.click();
  }
  welcome.classList.remove("is-error");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!reduceMotion) {
    releaseLilies();
  }
  welcome.classList.add("is-opening");
  window.setTimeout(() => {
    welcome.hidden = true;
    site.hidden = false;
    window.scrollTo({ top: 0, behavior: "instant" });
  }, reduceMotion ? 950 : 6000);
});

function releaseLilies() {
  for (let index = 0; index < 24; index += 1) {
    const lily = document.createElement("span");
    lily.className = "falling-lily";
    lily.textContent = "⚜";
    lily.style.left = `${Math.random() * 100}%`;
    lily.style.animationDelay = `${Math.random() * 1.2}s`;
    lily.style.setProperty("--fall-duration", `${6 + Math.random() * 2}s`);
    lily.style.setProperty("--drift", `${Math.round(Math.random() * 220 - 110)}px`);
    lilyRain.append(lily);
    lily.addEventListener("animationend", () => lily.remove(), { once: true });
  }
}

// Background music is optional. No remote song is bundled; use your own authorized file.
if (MUSIC_FILE.trim()) {
  audio.src = MUSIC_FILE;
  audio.addEventListener("loadedmetadata", () => {
    if (Number.isFinite(audio.duration)) {
      audio.currentTime = Math.min(Math.max(0, MUSIC_START_SECONDS), Math.max(0, audio.duration - 1));
    }
  });
  audio.addEventListener("error", () => showToast("Music couldn't be loaded. Check your audio file path in script.js."));
}

musicToggle.addEventListener("click", async () => {
  if (!MUSIC_FILE.trim()) {
    showToast("Add your legally obtained audio file path to MUSIC_FILE in script.js.");
    return;
  }
  if (audio.paused) {
    try {
      if (audio.readyState < 1) {
        await new Promise((resolve, reject) => {
          audio.addEventListener("loadedmetadata", resolve, { once: true });
          audio.addEventListener("error", reject, { once: true });
          audio.load();
        });
      }
      // Set the chorus position on each play after the first playback starts.
      if (audio.currentTime === 0) {
        audio.currentTime = Math.min(MUSIC_START_SECONDS, Math.max(0, audio.duration - 1));
      }
      await audio.play();
      musicToggle.classList.add("is-playing");
      musicToggle.setAttribute("aria-pressed", "true");
      musicToggle.setAttribute("aria-label", "Pause background music");
      musicLabel.textContent = "Pause music";
    } catch (error) {
      showToast("The music couldn't start. Check the audio file and try again.");
    }
  } else {
    audio.pause();
    musicToggle.classList.remove("is-playing");
    musicToggle.setAttribute("aria-pressed", "false");
    musicToggle.setAttribute("aria-label", "Play background music");
    musicLabel.textContent = "A little music";
  }
});

audio.addEventListener("ended", () => {
  musicToggle.classList.remove("is-playing");
  musicToggle.setAttribute("aria-pressed", "false");
  musicToggle.setAttribute("aria-label", "Play background music");
  musicLabel.textContent = "A little music";
});

let lyricFrame = 0;

function updateKaraokeLyrics() {
  const lyricTime = audio.currentTime + LYRIC_LEAD_SECONDS;
  let activeLyricIndex = -1;
  for (let index = 0; index < LYRICS.length; index += 1) {
    if (lyricTime < LYRICS[index].time) break;
    activeLyricIndex = index;
  }

  const activeLyric = activeLyricIndex < 0 ? "" : LYRICS[activeLyricIndex].text;
  if (filmLyric.textContent !== activeLyric) {
    filmLyric.textContent = activeLyric;
    filmLyric.classList.toggle("is-visible", Boolean(activeLyric));
  }
  if (lyricLine.getAttribute("aria-label") !== activeLyric) {
    lyricLine.classList.remove("is-changing");
    lyricLine.textContent = activeLyric;
    lyricLine.setAttribute("aria-label", activeLyric);
    if (activeLyric) {
      void lyricLine.offsetWidth;
      lyricLine.classList.add("is-changing");
    }
  }

  lyricDisplay.classList.toggle("is-visible", Boolean(activeLyric));
  lyricDisplay.setAttribute("aria-hidden", String(!activeLyric));
}

function animateLyrics() {
  updateKaraokeLyrics();
  if (!audio.paused && !audio.ended) {
    lyricFrame = window.requestAnimationFrame(animateLyrics);
  } else {
    lyricFrame = 0;
  }
}

audio.addEventListener("play", () => {
  if (!lyricFrame) lyricFrame = window.requestAnimationFrame(animateLyrics);
});
audio.addEventListener("pause", () => {
  if (lyricFrame) window.cancelAnimationFrame(lyricFrame);
  lyricFrame = 0;
  updateKaraokeLyrics();
});
audio.addEventListener("timeupdate", updateKaraokeLyrics);
audio.addEventListener("seeked", updateKaraokeLyrics);

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove("show"), 3800);
}
