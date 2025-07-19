const audio = document.getElementById("audio");
const bgVideo = document.getElementById("bg-video");
const lyricsContainer = document.getElementById("lyrics");

let currentLyrics = [];
let intervalId = null;

const lyricsData = {
  chandelier: {
    src: "assets/chandelier.mp3",
    video: "assets/chandelier_bg.mp4",
    lyrics: [
      { time: 10, text: "Party girls don't get hurt" },
      { time: 14, text: "Can't feel anything, when will I learn" },
      { time: 18, text: "I push it down, push it down" },
      { time: 23, text: "I'm the one for a good time call" },
      { time: 27, text: "Phone's blowin' up, they're ringin' my doorbell" },
      { time: 32, text: "I feel the love, feel the love" },
      { time: 37, text: "1, 2, 3, 1, 2, 3, drink" },
      { time: 41, text: "Throw 'em back till I lose count" },
      { time: 46, text: "I'm gonna swing from the chandelier, from the chandelier" },
      { time: 54, text: "I'm gonna live like tomorrow doesn't exist" },
      { time: 59, text: "Like it doesn't exist" },
      { time: 64, text: "I'm gonna fly like a bird through the night" },
      { time: 69, text: "Feel my tears as they dry" },
      { time: 73, text: "I'm gonna swing from the chandelier" },
      { time: 78, text: "But I'm holding on for dear life" },
      { time: 83, text: "Won't look down, won't open my eyes" },
      { time: 88, text: "Keep my glass full until morning light" },
      { time: 93, text: "'Cause I'm just holding on for tonight" },
    ]
  },
  recognition: {
    src: "assets/recognition.mp3",
    video: "assets/recognition_bg.mp4",
    lyrics: [
      { time: 24.0, text: "Roaches on the wall" },
      { time: 29.7, text: "Whole blunts in the ashtray" },
      { time: 35.4, text: "You lied to me bitch" },
      { time: 41.2, text: "I'm gone lie when you ask me" },
      { time: 46.9, text: "You wanna be involved" },
      { time: 52.6, text: "I don't want this pain at all" },
      { time: 58.3, text: "I don't need to say shit to you my face gone say it all" },
      { time: 64.1, text: "Free Quan" },
      { time: 69.8, text: "And Macho" },
      { time: 75.5, text: "Hold my breathe" },
      { time: 81.2, text: "Smoke fronto" },
      { time: 86.9, text: "Fresh to death" },
      { time: 92.7, text: "Thank god for every breathe" },
      { time: 98.4, text: "Used tinos still i step" },
      { time: 104.1, text: "Remember duck tape when you get swept" },
      { time: 109.8, text: "Halfway right girl halfway left" },
      { time: 115.6, text: "I pray i do my best" },
      { time: 121.3, text: "I pray that's like my vest" }
    ]
  },
  nuts: {
    src: "assets/nuts.mp3",
    video: "assets/nuts_bg.mp4",
    lyrics: [
      { time: 8, text: "She said baby I am not afraid to die" },
      { time: 13, text: "Push me to the edge, all my friends are dead" },
      { time: 18, text: "Phantom that's alright, inside all white" },
      { time: 24, text: "Like something you ride a sled down" },
      { time: 30, text: "I just want that head" },
      { time: 35, text: "My Brittany got mad" },
      { time: 41, text: "I'm barely her man now" },
      { time: 46, text: "Everybody got the same swag now" },
      { time: 52, text: "Watch the way that I tear it down" },
      { time: 58, text: "Stackin' my bands all the way to the top" }
    ]
  }
};

function playSong(songKey) {
  const song = lyricsData[songKey];
  if (!song) return;

  // Set audio
  audio.src = song.src;
  audio.play();

  // Set background video
  bgVideo.pause();
  bgVideo.src = song.video;
  bgVideo.load();
  bgVideo.play().catch(e => console.log("Video autoplay blocked:", e));

  // Set lyrics
  currentLyrics = song.lyrics;
  renderLyrics();
  if (intervalId) clearInterval(intervalId);
  intervalId = setInterval(syncLyrics, 300);
}

function renderLyrics() {
  lyricsContainer.innerHTML = "";
  currentLyrics.forEach((line, index) => {
    const div = document.createElement("div");
    div.className = "lyrics-line";
    div.id = `line-${index}`;
    div.textContent = line.text;
    lyricsContainer.appendChild(div);
  });
}

function syncLyrics() {
  const currentTime = audio.currentTime;
  currentLyrics.forEach((line, index) => {
    const lineEl = document.getElementById(`line-${index}`);
    const nextTime = currentLyrics[index + 1]?.time || Infinity;
    if (currentTime >= line.time && currentTime < nextTime) {
      lineEl.classList.add("active");
      lineEl.scrollIntoView({ behavior: "smooth", block: "center" });
    } else {
      lineEl.classList.remove("active");
    }
  });
}
