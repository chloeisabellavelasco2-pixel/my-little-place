/* ============================================================
   A Little Place for You — script.js
   ------------------------------------------------------------
   EDITING GUIDE
   - PASSPHRASE is the word Khloe types to come in. It lives in the
     browser, so treat it as a sweet door, not real security.
   - MUSIC_FILE points at your own audio file (assets.mp3).
   - MUSIC_START_SECONDS is where the song begins (the chorus).
   - LYRICS keep the exact text and timings you supplied.
   - REASONS is the list of one hundred little notes.
   - CONFESSION_TEXT is the final letter. Edit it in your own words.
   Everything is guarded with null checks, so a missing optional
   element or file never stops the rest of the page from working.
   ============================================================ */

const PASSPHRASE = "april 22";
const MUSIC_FILE = "assets.mp3";
const MUSIC_START_SECONDS = 58; // Chorus start.
const LYRIC_LEAD_SECONDS = 0.36; // Small look-ahead for rendering lag.

// Exact lyrics and timings supplied by the author. Do not retime these.
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

// Your fifteen photographs, with their original filenames preserved.
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

/* One hundred little reasons. Each is unique; rewrite any of them
   in your own words and the site will pick the change up. */
const REASONS = [
  "You laugh with your whole face — eyes first, then everything else. It's the sound I look for in a room.",
  "You remember the small things people mention once and never again. That isn't a small thing at all.",
  "You make ordinary days feel like they had a point.",
  "You ask real questions and then actually wait for the answer.",
  "You are gentle with people who can't do anything for you.",
  "You cry at things that deserve crying at, and you never apologise for it.",
  "You have a way of making silence feel comfortable instead of empty.",
  "You never make me feel strange for caring about what I care about.",
  "Your handwriting looks like it belongs in a letter someone keeps for years.",
  "You get excited about small plans — a drive, a snack, a song on the radio.",
  "You notice when someone's voice changes before they've said anything's wrong.",
  "You are braver than you give yourself credit for.",
  "You say sorry properly, and you mean it.",
  "You keep going on the days that would make most people stop.",
  "Your faith is quiet and steady, and it makes me want to be steadier too.",
  "You look after people without turning it into a performance.",
  "You send the kind of messages that quietly fix a whole afternoon.",
  "You have strong opinions about songs, and you defend them passionately.",
  "You never let me win an argument just to keep the peace. You'd rather be honest.",
  "You still say good morning like it's a small gift.",
  "You love your family loudly and loyally.",
  "You make me want to be a person worth your time.",
  "You hum without noticing, and I've never once told you.",
  "You are patient with me on the days I haven't earned it.",
  "You give the best advice and the worst puns, in that order.",
  "You take pictures of skies, and food, and people you love.",
  "You're the first to notice when someone's been left out.",
  "You dance badly and completely without shame.",
  "You remember birthdays, and the reason someone was sad last month.",
  "You make me laugh in the middle of serious conversations, and somehow that helps.",
  "You read things properly — not just the first line.",
  "You have a soft spot for animals, and it says everything about you.",
  "You always know when a hug is the only correct answer.",
  "You've survived things you don't talk about, and you're still kind.",
  "You look at people like you're actually seeing them.",
  "You defend the people you love before you defend yourself.",
  "You find the one good thing in a bad day and hold onto it.",
  "Your voice goes soft when you're tired. I like it anyway.",
  "You take care of your health even when it's boring and inconvenient.",
  "You're honest about your feelings, including the inconvenient ones.",
  "You make me feel less alone in a way I can't quite explain.",
  "You have never once mocked something I'm afraid of.",
  "You say thank you to waiters and drivers and cleaners, and you mean it.",
  "You're curious about everything. It's exhausting and wonderful.",
  "You laugh at your own jokes before you finish them.",
  "You keep little things — tickets, notes, receipts — because they meant something.",
  "You know the difference between being right and being kind.",
  "You make a room warmer just by walking into it.",
  "You ask if I've eaten. You always ask.",
  "You're proud of me in a way that makes me want to keep trying.",
  "You handle bad news better than most people handle good news.",
  "You have the best taste in the worst movies.",
  "You have never made me feel like a burden.",
  "You forgive quickly when it's real.",
  "You love with your hands — cooking, fixing, holding.",
  "You get quiet when something matters, and that's how I know it matters.",
  "You keep your promises, even the small ones.",
  "You're not afraid to say 'I don't know.'",
  "You make me feel like my thoughts are worth hearing.",
  "You take your time with people. Nothing about you is rushed.",
  "You're the reason I know what patience actually looks like.",
  "You notice good lighting and good weather and good moments out loud.",
  "You have never made me explain my feelings twice.",
  "You're kindest to people who can't return it.",
  "You carry other people's worries without complaining about it.",
  "You look after yourself, and I'm proud of you for that.",
  "You tell stories with your hands.",
  "You're stubborn in exactly the places that matter.",
  "You give people the benefit of the doubt, even when it costs you.",
  "You're the calm in a lot of storms I didn't know how to name.",
  "You remember how I take my coffee.",
  "You've never made me feel small for being excited.",
  "You're the person I want to tell first — good news or bad.",
  "You still get shy sometimes, and it undoes me.",
  "You make the boring parts of life feel shared instead of endured.",
  "You never pretend to be someone you're not.",
  "You cheer for people quietly, without needing any credit.",
  "You laugh when you're nervous, and it's the most honest sound.",
  "You look after your friends like they're family.",
  "You're brave enough to be soft.",
  "You know how to sit with someone who's hurting.",
  "You say what you mean, so I never have to guess.",
  "You make me want to do better without ever asking me to.",
  "You're the only person whose silence I don't misread.",
  "You love the same songs differently than I do, and I love that.",
  "You never make a promise you can't keep.",
  "You're a little dramatic, and life would be duller without it.",
  "You apologise to people who aren't there to hear it. That's character.",
  "You're the reason I believe in slow, careful love.",
  "You take an interest in the things I'm bad at.",
  "You make time for the people who need you, even when you're tired.",
  "You have never looked at me like I'm too much.",
  "You keep your faith even on the days it's heavy.",
  "You're funny in the exact way that makes a bad day survivable.",
  "You know when to push and when to leave it alone.",
  "You make home a person instead of a place.",
  "You never laugh at me when I'm being serious, even when it's funny.",
  "You let me see the parts of you that aren't polished.",
  "You're the person I'd choose again, on every ordinary Tuesday.",
  "You are, quietly and entirely, my favourite thing."
];

/* The final letter. This is a starting point written for you —
   replace it with your own words, keeping the blank-line spacing. */
const CONFESSION_TEXT = `I've been trying to find a way to say this that doesn't make it too big or too small, and I've decided the honest version is better than the perfect one.

Here it is: I like you. Not the way you like a song for a week. The way you like something that changes how the rest of the world sounds.

I don't know exactly when it started. Maybe it was the way you listened, or the way you laughed at something I said before I'd even finished saying it. Somewhere along the way you stopped being someone I noticed and became someone I look for.

I'm not asking you to feel the same. That isn't how this works. I just didn't want to keep this quiet for another month and call it patience. You deserve to know what you are to someone, plainly, with no riddle attached.

What I can promise is this: nothing changes unless you want it to. Your friendship was never a consolation prize to me — it is genuinely one of the better parts of my life. If that is all you ever want, I would still count myself lucky.

I wrote this because you are worth the risk of being honest. Whatever you feel after reading it, I would rather have the truth with you than a comfortable silence.

So that's it. That's the whole thing. You can take your time. You can say nothing at all. I'll still be here, and I'll still be glad I know you.`;

/* ============================================================
   SETUP
   ============================================================ */
document.documentElement.classList.add("js");

const STORAGE_KEY = "little-place.reasons.v1";
const REDUCED = window.matchMedia("(prefers-reduced-motion: reduce)");

const $ = (id) => document.getElementById(id);

const welcome = $("welcome");
const unlockForm = $("unlock-form");
const passphraseInput = $("passphrase");
const formMessage = $("form-message");
const site = $("site");
const lilyRain = $("lily-rain");
const galleryIntro = $("home");
const memoriesSection = $("memories");
const galleryGrid = $("gallery-grid");
const watchMemoriesButton = $("watch-memories");
const openGalleryButton = $("open-gallery");
const heartsField = $("hearts-field");
const heartRain = $("heart-rain");
const reasonCounter = $("reason-counter");
const reasonProgressBar = $("reason-progress-bar");
const letterPaper = $("letter-paper");
const confessionCopy = $("confession-copy");
const readAgainButton = $("read-again");
const letterDialog = $("letter-dialog");
const dialogEyebrow = $("dialog-eyebrow");
const dialogTitle = $("dialog-title");
const dialogCopy = $("dialog-copy");
const dialogClose = $("dialog-close");
const photoDialog = $("photo-dialog");
const photoDialogCounter = $("photo-dialog-counter");
const photoDialogFilename = $("photo-dialog-filename");
const photoDialogClose = $("photo-dialog-close");
const photoDialogImage = $("photo-dialog-image");
const photoDialogPlaceholder = $("photo-dialog-placeholder");
const photoDialogMissing = $("photo-dialog-missing");
const photoDialogCaption = $("photo-dialog-caption");
const photoPrev = $("photo-prev");
const photoNext = $("photo-next");
const memoryFilm = $("memory-film");
const filmStage = $("film-stage");
const filmLyric = $("film-lyric");
const filmLyricTime = $("film-lyric-time");
const filmClose = $("film-close");
const filmToggle = $("film-toggle");
const filmCounter = $("film-counter");
const filmProgress = $("film-progress");
const toast = $("toast");
const audio = $("background-audio");
const musicToggle = $("music-toggle");
const musicLabel = $("music-label");
const lyricDisplay = $("lyric-display");
const lyricLine = $("lyric-line");
const lyricTime = $("lyric-time");
const cameraDim = $("camera-dim");
const cameraFlash = $("camera-flash");

const FILM_INTERVAL = 4200;
let toastTimer = 0;
let wrongPasswordTimer = 0;
let currentPhotoIndex = 0;
let filmIndex = 0;
let filmPlaying = false;
let filmTimer = 0;
let slides = [];
let slidesBuilt = false;
let musicErrorShown = false;
let lyricFrame = 0;

function showToast(message) {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove("show"), 4200);
}

function prefersReducedMotion() {
  return REDUCED.matches;
}

function formatTime(seconds) {
  const safe = Math.max(0, Math.floor(Number(seconds) || 0));
  const minutes = Math.floor(safe / 60);
  const rest = safe % 60;
  return `${minutes}:${String(rest).padStart(2, "0")}`;
}

function openDialog(dialog) {
  if (!dialog) return;
  if (typeof dialog.showModal === "function") {
    if (!dialog.open) dialog.showModal();
  } else {
    dialog.setAttribute("open", "");
  }
}

function closeDialog(dialog) {
  if (!dialog) return;
  if (typeof dialog.close === "function") {
    if (dialog.open) dialog.close();
  } else {
    dialog.removeAttribute("open");
  }
}

/* ============================================================
   1. PASSWORD ENTRY
   ============================================================ */
function normalise(value) {
  return String(value || "").trim().toLowerCase().replace(/\s+/g, " ");
}

function rejectPassphrase() {
  if (!welcome) return;
  if (formMessage) formMessage.textContent = "that isn't quite it — try the date again";
  welcome.classList.remove("is-error");
  void welcome.offsetWidth;
  welcome.classList.add("is-error");
  window.clearTimeout(wrongPasswordTimer);
  wrongPasswordTimer = window.setTimeout(() => welcome.classList.remove("is-error"), 900);
  if (passphraseInput) {
    passphraseInput.select();
  }
}

function releaseLilies() {
  if (!lilyRain) return;
  const count = prefersReducedMotion() ? 0 : 26;
  for (let index = 0; index < count; index += 1) {
    const lily = document.createElement("span");
    lily.className = "falling-lily";
    lily.textContent = "❀";
    lily.style.left = `${Math.random() * 100}%`;
    lily.style.animationDelay = `${Math.random() * 1.4}s`;
    lily.style.setProperty("--fall-duration", `${5.5 + Math.random() * 2.6}s`);
    lily.style.setProperty("--drift", `${Math.round(Math.random() * 240 - 120)}px`);
    lilyRain.append(lily);
    lily.addEventListener("animationend", () => lily.remove(), { once: true });
  }
}

function revealSite() {
  if (welcome) welcome.hidden = true;
  if (site) site.hidden = false;
  window.scrollTo({ top: 0, behavior: "auto" });
  observeSections();
}

function unlockSite() {
  if (formMessage) formMessage.textContent = "";
  if (welcome) {
    welcome.classList.remove("is-error");
    welcome.classList.add("is-opening");
  }
  releaseLilies();
  // The visitor has just interacted, so starting the song here is allowed.
  if (audio && audio.paused) playMusic();
  const delay = prefersReducedMotion() ? 700 : 3000;
  window.setTimeout(revealSite, delay);
}

if (unlockForm) {
  unlockForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (normalise(passphraseInput ? passphraseInput.value : "") !== normalise(PASSPHRASE)) {
      rejectPassphrase();
      return;
    }
    unlockSite();
  });
}

/* ============================================================
   2. SECTION REVEALS
   ============================================================ */
const sectionObserver = "IntersectionObserver" in window
  ? new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      sectionObserver.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" })
  : null;

function observeSections() {
  document.querySelectorAll("main > section").forEach((section) => {
    if (section.hidden) return;
    if (sectionObserver) sectionObserver.observe(section);
    else section.classList.add("is-visible");
  });
}

/* ============================================================
   3. MUSIC
   ============================================================ */
function setMusicUi(playing) {
  if (musicToggle) {
    musicToggle.classList.toggle("is-playing", playing);
    musicToggle.setAttribute("aria-pressed", String(playing));
    musicToggle.setAttribute("aria-label", playing ? "Pause background music" : "Play background music");
  }
  if (musicLabel) musicLabel.textContent = playing ? "Pause music" : "A little music";
}

function seekToChorus() {
  if (!audio) return;
  const duration = Number.isFinite(audio.duration) && audio.duration > 0 ? audio.duration : 0;
  const target = duration
    ? Math.min(MUSIC_START_SECONDS, Math.max(0, duration - 1))
    : MUSIC_START_SECONDS;
  try {
    audio.currentTime = target;
  } catch (error) {
    /* Some browsers refuse a seek before metadata; it is retried on play. */
  }
}

function waitForMetadata() {
  return new Promise((resolve, reject) => {
    if (!audio) {
      reject(new Error("no audio element"));
      return;
    }
    if (audio.readyState >= 1) {
      resolve();
      return;
    }
    let settled = false;
    const timer = window.setTimeout(() => finish(new Error("audio timeout")), 5000);
    function cleanup() {
      window.clearTimeout(timer);
      audio.removeEventListener("loadedmetadata", onReady);
      audio.removeEventListener("error", onError);
    }
    function finish(error) {
      if (settled) return;
      settled = true;
      cleanup();
      if (error) reject(error);
      else resolve();
    }
    function onReady() { finish(); }
    function onError() { finish(new Error("audio error")); }
    audio.addEventListener("loadedmetadata", onReady);
    audio.addEventListener("error", onError);
    try {
      audio.load();
    } catch (error) {
      finish(new Error("audio load failed"));
    }
  });
}

async function playMusic() {
  if (!audio) return false;
  if (!MUSIC_FILE.trim()) {
    showToast("Add your audio file and set MUSIC_FILE in script.js.");
    return false;
  }
  try {
    if (audio.readyState < 1) await waitForMetadata();
    if (!audio.currentTime || audio.currentTime < 1) seekToChorus();
    await audio.play();
    return true;
  } catch (error) {
    showToast("The music couldn't start. Check that assets.mp3 sits beside index.html.");
    return false;
  }
}

if (audio) {
  if (MUSIC_FILE.trim()) {
    audio.src = MUSIC_FILE;
    audio.addEventListener("loadedmetadata", () => {
      if (!audio.currentTime) seekToChorus();
    });
  }
  audio.addEventListener("play", () => {
    setMusicUi(true);
    startLyricLoop();
  });
  audio.addEventListener("pause", () => {
    setMusicUi(false);
    stopLyricLoop();
    updateLyrics();
  });
  audio.addEventListener("ended", () => {
    setMusicUi(false);
    stopLyricLoop();
    updateLyrics();
  });
  audio.addEventListener("error", () => {
    if (musicErrorShown) return;
    musicErrorShown = true;
    setMusicUi(false);
    showToast("The music file couldn't be loaded. The photographs and letters still work.");
  });
  audio.addEventListener("timeupdate", updateLyrics);
  audio.addEventListener("seeked", updateLyrics);
}

if (musicToggle) {
  musicToggle.addEventListener("click", async () => {
    if (!audio) return;
    if (audio.paused) {
      await playMusic();
    } else {
      audio.pause();
    }
  });
}

/* ============================================================
   4. SYNCHRONISED LYRICS (with timestamps)
   ============================================================ */
function activeLyricIndex() {
  if (!audio || !Number.isFinite(audio.currentTime)) return -1;
  const lyricTimeNow = audio.currentTime + LYRIC_LEAD_SECONDS;
  let index = -1;
  for (let i = 0; i < LYRICS.length; i += 1) {
    if (lyricTimeNow < LYRICS[i].time) break;
    index = i;
  }
  return index;
}

function updateLyrics() {
  const index = audio && !audio.paused && !audio.ended ? activeLyricIndex() : -1;
  const lyric = index >= 0 ? LYRICS[index] : null;
  const text = lyric ? String(lyric.text || "").trim() : "";
  const stamp = text ? formatTime(lyric.time) : "";

  if (lyricLine && lyricLine.textContent !== text) {
    lyricLine.textContent = text;
    lyricLine.classList.remove("is-changing");
    if (text) {
      void lyricLine.offsetWidth;
      lyricLine.classList.add("is-changing");
    }
  }
  if (lyricTime) lyricTime.textContent = stamp;
  if (lyricDisplay) {
    lyricDisplay.classList.toggle("is-visible", Boolean(text));
    lyricDisplay.setAttribute("aria-hidden", String(!text));
  }
  if (filmLyric && filmLyric.textContent !== text) filmLyric.textContent = text;
  if (filmLyric) filmLyric.classList.toggle("is-visible", Boolean(text));
  if (filmLyricTime) filmLyricTime.textContent = stamp;
}

function lyricLoop() {
  updateLyrics();
  if (audio && !audio.paused && !audio.ended) {
    lyricFrame = window.requestAnimationFrame(lyricLoop);
  } else {
    lyricFrame = 0;
  }
}

function startLyricLoop() {
  if (!lyricFrame) lyricFrame = window.requestAnimationFrame(lyricLoop);
}

function stopLyricLoop() {
  if (lyricFrame) window.cancelAnimationFrame(lyricFrame);
  lyricFrame = 0;
}

/* ============================================================
   5. CAMERA SHUTTER
   ============================================================ */
function playShutterSound() {
  if (prefersReducedMotion()) return;
  const AudioContextType = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextType) return;
  try {
    const context = new AudioContextType();
    const buffer = context.createBuffer(1, Math.floor(context.sampleRate * 0.13), context.sampleRate);
    const samples = buffer.getChannelData(0);
    for (let i = 0; i < samples.length; i += 1) {
      samples[i] = (Math.random() * 2 - 1) * (1 - i / samples.length);
    }
    const source = context.createBufferSource();
    const filter = context.createBiquadFilter();
    const gain = context.createGain();
    source.buffer = buffer;
    filter.type = "highpass";
    filter.frequency.value = 800;
    gain.gain.setValueAtTime(0.1, context.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0008, context.currentTime + 0.13);
    source.connect(filter);
    filter.connect(gain);
    gain.connect(context.destination);
    source.addEventListener("ended", () => {
      if (context.state !== "closed") context.close();
    }, { once: true });
    source.start();
  } catch (error) {
    /* Sound is a bonus; never let it break the reveal. */
  }
}

function cameraEffect(onReveal) {
  if (prefersReducedMotion() || !cameraDim || !cameraFlash) {
    onReveal();
    return;
  }
  cameraDim.classList.add("is-dimmed");
  playShutterSound();
  window.setTimeout(() => {
    cameraFlash.classList.remove("is-flashing");
    void cameraFlash.offsetWidth;
    cameraFlash.classList.add("is-flashing");
    onReveal();
    window.setTimeout(() => {
      cameraFlash.classList.remove("is-flashing");
      cameraDim.classList.remove("is-dimmed");
    }, 380);
  }, 230);
}

/* ============================================================
   6. SCRAPBOOK GALLERY
   ============================================================ */
function makePlaceholder(filename) {
  const wrap = document.createElement("span");
  wrap.className = "gallery-placeholder";
  const mark = document.createElement("span");
  mark.className = "photo-placeholder-mark";
  mark.setAttribute("aria-hidden", "true");
  mark.textContent = "♡";
  const name = document.createElement("span");
  name.className = "photo-placeholder-name";
  name.textContent = filename || "photo";
  wrap.append(mark, name);
  return wrap;
}

function buildGallery() {
  if (!galleryGrid) return;
  galleryGrid.textContent = "";
  PHOTOS.forEach((photo, index) => {
    const size = index === 0 ? "featured" : index < 5 ? "medium" : "small";
    const card = document.createElement("article");
    card.className = `gallery-card gallery-card-${size}`;
    card.style.setProperty("--photo-tilt", `${(((index % 5) - 2) * 0.7).toFixed(2)}deg`);

    const frame = document.createElement("div");
    frame.className = "gallery-image";

    if (photo.src.trim()) {
      const image = document.createElement("img");
      image.alt = photo.caption || `Photograph ${index + 1}`;
      image.loading = index < 4 ? "eager" : "lazy";
      image.decoding = "async";
      image.addEventListener("error", () => {
        image.remove();
        frame.append(makePlaceholder(photo.file));
      }, { once: true });
      image.src = photo.src;
      frame.append(image);
    } else {
      frame.append(makePlaceholder(photo.file));
    }

    const openButton = document.createElement("button");
    openButton.type = "button";
    openButton.className = "photo-open";
    openButton.setAttribute("aria-label", `Open photograph ${index + 1}${photo.caption ? `: ${photo.caption}` : ""}`);
    openButton.append(frame);
    openButton.addEventListener("click", () => openPhoto(index));

    card.append(openButton);

    if (photo.caption && photo.caption.trim()) {
      const caption = document.createElement("p");
      caption.className = "gallery-caption";
      caption.textContent = photo.caption;
      card.append(caption);
    }

    galleryGrid.append(card);
  });
}

function revealGallery(scrollToIt) {
  if (!memoriesSection) return;
  if (!memoriesSection.hidden) {
    if (scrollToIt) memoriesSection.scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth", block: "start" });
    return;
  }
  cameraEffect(() => {
    memoriesSection.hidden = false;
    observeSections();
    if (scrollToIt) {
      window.setTimeout(() => {
        memoriesSection.scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth", block: "start" });
      }, 80);
    }
  });
}

if (openGalleryButton) {
  openGalleryButton.addEventListener("click", () => revealGallery(true));
}

document.querySelectorAll('a[href="#memories"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    revealGallery(true);
  });
});

/* ---------- photo viewer ---------- */
function renderPhotoDialog() {
  if (!photoDialog || !PHOTOS.length) return;
  const photo = PHOTOS[currentPhotoIndex];
  if (photoDialogCounter) photoDialogCounter.textContent = `${currentPhotoIndex + 1} / ${PHOTOS.length}`;
  if (photoDialogFilename) photoDialogFilename.textContent = photo.file || "";
  if (photoDialogCaption) {
    photoDialogCaption.textContent = photo.caption || "";
    photoDialogCaption.hidden = !(photo.caption && photo.caption.trim());
  }

  const hasSource = Boolean(photo.src && photo.src.trim());
  if (!photoDialogImage || !photoDialogPlaceholder) return;

  if (!hasSource) {
    photoDialogImage.hidden = true;
    photoDialogImage.removeAttribute("src");
    photoDialogPlaceholder.hidden = false;
    if (photoDialogMissing) photoDialogMissing.textContent = photo.file || "";
    return;
  }

  photoDialogImage.onerror = () => {
    photoDialogImage.hidden = true;
    photoDialogPlaceholder.hidden = false;
    if (photoDialogMissing) photoDialogMissing.textContent = photo.file || "";
  };
  photoDialogImage.onload = () => {
    photoDialogImage.hidden = false;
    photoDialogPlaceholder.hidden = true;
  };
  photoDialogImage.hidden = false;
  photoDialogPlaceholder.hidden = true;
  photoDialogImage.alt = photo.caption || `Photograph ${currentPhotoIndex + 1}`;
  photoDialogImage.src = photo.src;
}

function openPhoto(index) {
  if (!PHOTOS.length) return;
  currentPhotoIndex = Math.max(0, Math.min(PHOTOS.length - 1, index));
  renderPhotoDialog();
  openDialog(photoDialog);
}

function movePhoto(step) {
  if (!PHOTOS.length) return;
  currentPhotoIndex = (currentPhotoIndex + step + PHOTOS.length) % PHOTOS.length;
  renderPhotoDialog();
}

if (photoPrev) photoPrev.addEventListener("click", () => movePhoto(-1));
if (photoNext) photoNext.addEventListener("click", () => movePhoto(1));
if (photoDialogClose) photoDialogClose.addEventListener("click", () => closeDialog(photoDialog));
if (photoDialog) {
  photoDialog.addEventListener("click", (event) => {
    if (event.target === photoDialog) closeDialog(photoDialog);
  });
  photoDialog.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      movePhoto(-1);
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      movePhoto(1);
    }
  });
}

/* ============================================================
   7. CINEMATIC SLIDESHOW
   ============================================================ */
function buildSlides() {
  if (!filmStage || slidesBuilt) return;
  PHOTOS.forEach((photo, index) => {
    const slide = document.createElement("figure");
    slide.className = "film-slide";
    slide.setAttribute("aria-hidden", "true");

    if (photo.src && photo.src.trim()) {
      const image = document.createElement("img");
      image.alt = photo.caption || `Memory ${index + 1}`;
      image.decoding = "async";
      image.addEventListener("error", () => {
        image.remove();
        slide.append(makePlaceholder(photo.file));
      }, { once: true });
      image.src = photo.src;
      slide.append(image);
    } else {
      slide.append(makePlaceholder(photo.file));
    }

    filmStage.append(slide);
    slides.push(slide);
  });
  slidesBuilt = true;
}

function showSlide(index) {
  slides.forEach((slide, i) => {
    const active = i === index;
    slide.classList.toggle("is-active", active);
    slide.setAttribute("aria-hidden", String(!active));
  });
  if (filmCounter) filmCounter.textContent = `Memory ${index + 1} of ${PHOTOS.length}`;
  if (filmProgress) {
    filmProgress.max = PHOTOS.length;
    filmProgress.value = index + 1;
  }
}

function setFilmToggle() {
  if (!filmToggle) return;
  filmToggle.innerHTML = filmPlaying ? "&#10074;&#10074;" : "&#9654;";
  filmToggle.setAttribute("aria-label", filmPlaying ? "Pause slideshow" : "Resume slideshow");
}

function scheduleFilmAdvance() {
  window.clearTimeout(filmTimer);
  if (!filmPlaying) return;
  filmTimer = window.setTimeout(() => {
    if (filmIndex >= PHOTOS.length - 1) {
      filmPlaying = false;
      if (filmCounter) filmCounter.textContent = `Memory ${PHOTOS.length} of ${PHOTOS.length} — the end`;
      setFilmToggle();
      return;
    }
    filmIndex += 1;
    showSlide(filmIndex);
    scheduleFilmAdvance();
  }, FILM_INTERVAL);
}

function openFilm() {
  if (!memoryFilm) return;
  buildSlides();
  filmIndex = 0;
  filmPlaying = true;
  showSlide(0);
  setFilmToggle();
  cameraEffect(() => {
    openDialog(memoryFilm);
    scheduleFilmAdvance();
  });
  if (audio && audio.paused) playMusic();
}

function stopFilm() {
  filmPlaying = false;
  window.clearTimeout(filmTimer);
  setFilmToggle();
}

if (watchMemoriesButton) watchMemoriesButton.addEventListener("click", openFilm);
if (filmToggle) {
  filmToggle.addEventListener("click", () => {
    if (filmPlaying) {
      stopFilm();
      return;
    }
    if (filmIndex >= PHOTOS.length - 1) {
      filmIndex = 0;
      showSlide(0);
    }
    filmPlaying = true;
    setFilmToggle();
    scheduleFilmAdvance();
  });
}
if (filmClose) {
  filmClose.addEventListener("click", () => {
    stopFilm();
    closeDialog(memoryFilm);
  });
}
if (memoryFilm) {
  memoryFilm.addEventListener("close", stopFilm);
  memoryFilm.addEventListener("cancel", stopFilm);
  memoryFilm.addEventListener("click", (event) => {
    if (event.target === memoryFilm) closeDialog(memoryFilm);
  });
}

/* ============================================================
   8. A HUNDRED LITTLE REASONS (falling hearts)
   ============================================================ */
const discovered = new Set(readProgress());

function readProgress() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    if (!Array.isArray(parsed)) return [];
    return parsed
      .map((value) => Number(value))
      .filter((value) => Number.isInteger(value) && value >= 0 && value < REASONS.length);
  } catch (error) {
    return [];
  }
}

function saveProgress() {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify([...discovered]));
  } catch (error) {
    /* Private mode can block storage; the page still works for this visit. */
  }
}

function updateReasonCounter() {
  const count = discovered.size;
  if (reasonCounter) {
    reasonCounter.textContent = count === 0
      ? `0 out of ${REASONS.length} little reasons discovered.`
      : `${count} out of ${REASONS.length} little reasons discovered.`;
  }
  if (reasonProgressBar) {
    reasonProgressBar.style.width = `${(count / REASONS.length) * 100}%`;
  }
}

function heartMarkup(index) {
  return `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
      <text x="12" y="14.4">${index + 1}</text>
    </svg>`;
}

function buildHearts() {
  if (!heartsField) return;
  const fragment = document.createDocumentFragment();
  REASONS.forEach((reason, index) => {
    const heart = document.createElement("button");
    heart.type = "button";
    heart.className = "heart-note";
    heart.dataset.index = String(index);
    heart.setAttribute("aria-label", `Open little reason ${index + 1}`);
    heart.innerHTML = heartMarkup(index);

    const tilt = ((index % 7) - 3) * 2.6;
    const scale = 0.84 + ((index * 7) % 6) * 0.045;
    heart.style.setProperty("--tilt", `${tilt.toFixed(1)}deg`);
    heart.style.setProperty("--scale", scale.toFixed(2));
    heart.style.setProperty("--sway", `${6 + (index % 5)}s`);
    heart.style.setProperty("--sway-delay", `${((index % 11) * -0.6).toFixed(1)}s`);
    heart.style.setProperty("--dur", `${30 + (index % 8) * 5}s`);
    heart.style.setProperty("--delay", `${(-(index / REASONS.length) * (30 + (index % 8) * 5)).toFixed(2)}s`);

    if (discovered.has(index)) heart.classList.add("is-discovered");

    heart.addEventListener("click", () => openReason(index));
    fragment.append(heart);
  });
  heartsField.append(fragment);
  layoutHearts();
  updateReasonCounter();
}

function layoutHearts() {
  if (!heartsField) return;
  const width = heartsField.clientWidth || 900;
  const height = heartsField.clientHeight || 620;
  const size = width < 480 ? 40 : width < 760 ? 46 : 54;
  const fall = height + size + 60;
  heartsField.querySelectorAll(".heart-note").forEach((heart, index) => {
    const spread = (index * 61.8034) % 100;
    const left = 3 + spread * 0.94;
    heart.style.setProperty("--left", `${left.toFixed(2)}%`);
    heart.style.setProperty("--width", `${size}px`);
    heart.style.setProperty("--fall", `${fall.toFixed(0)}px`);
  });
}

function openReason(index) {
  const reason = REASONS[index];
  if (!reason) return;
  if (dialogEyebrow) dialogEyebrow.textContent = `Little reason ${index + 1} of ${REASONS.length}`;
  if (dialogTitle) dialogTitle.textContent = "A little reason";
  if (dialogCopy) dialogCopy.textContent = reason;

  if (!discovered.has(index)) {
    discovered.add(index);
    saveProgress();
    updateReasonCounter();
    const heart = heartsField ? heartsField.querySelector(`.heart-note[data-index="${index}"]`) : null;
    if (heart) {
      heart.classList.add("is-discovered", "is-popping");
      window.setTimeout(() => heart.classList.remove("is-popping"), 620);
    }
  }
  openDialog(letterDialog);
}

if (dialogClose) dialogClose.addEventListener("click", () => closeDialog(letterDialog));
if (letterDialog) {
  letterDialog.addEventListener("click", (event) => {
    if (event.target === letterDialog) closeDialog(letterDialog);
  });
}

buildHearts();
updateReasonCounter();

/* ---------- falling decorative hearts behind the notes ---------- */
function buildHeartRain() {
  if (!heartRain || prefersReducedMotion()) return;
  for (let index = 0; index < 22; index += 1) {
    const heart = document.createElement("span");
    heart.className = "falling-heart";
    heart.textContent = "♡";
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.setProperty("--size", `${11 + Math.random() * 15}px`);
    heart.style.setProperty("--dur", `${11 + Math.random() * 11}s`);
    heart.style.setProperty("--delay", `${Math.random() * 12}s`);
    heart.style.setProperty("--drift", `${Math.round(Math.random() * 90 - 45)}px`);
    heartRain.append(heart);
  }
}

buildHeartRain();

/* ============================================================
   9. THE LETTER
   ============================================================ */
function buildLetter() {
  if (!confessionCopy) return;
  confessionCopy.textContent = "";
  const paragraphs = CONFESSION_TEXT.split(/\n{2,}/).map((part) => part.trim()).filter(Boolean);
  paragraphs.forEach((text, index) => {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    paragraph.style.setProperty("--i", String(index));
    confessionCopy.append(paragraph);
  });
}

buildLetter();

if (letterPaper && "IntersectionObserver" in window) {
  const letterObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        letterPaper.classList.add("is-read");
        letterObserver.unobserve(letterPaper);
      }
    });
  }, { threshold: 0.25 });
  letterObserver.observe(letterPaper);
} else if (letterPaper) {
  letterPaper.classList.add("is-read");
}

if (readAgainButton) {
  readAgainButton.addEventListener("click", () => {
    if (!letterPaper) return;
    letterPaper.classList.remove("is-read");
    void letterPaper.offsetWidth;
    letterPaper.classList.add("is-read");
    letterPaper.scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth", block: "center" });
    showToast("Here it is again, from the beginning.");
  });
}

/* ============================================================
   10. KEYBOARD, RESIZE AND STARTUP
   ============================================================ */
document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  [letterDialog, photoDialog, memoryFilm].forEach((dialog) => {
    if (dialog && dialog.open) closeDialog(dialog);
  });
});

let resizeTimer = 0;
window.addEventListener("resize", () => {
  window.clearTimeout(resizeTimer);
  resizeTimer = window.setTimeout(layoutHearts, 180);
});

// The film and gallery are built up-front so a first click is instant.
buildGallery();
buildSlides();

if (welcome && !welcome.hidden) {
  window.setTimeout(() => {
    if (passphraseInput) passphraseInput.focus({ preventScroll: true });
  }, 400);
}

observeSections();
updateLyrics();
