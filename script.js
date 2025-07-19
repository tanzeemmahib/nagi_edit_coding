const audio = document.getElementById("audio");
const lyricsContainer = document.getElementById("lyrics");
const bgVideo = document.getElementById("bg-video");

const lyricsData = {
  chandelier: {
    src: "assets/chandelier.mp3",
    video: "assets/chandelier_bg.mp4",
    lyrics: [
      { time: 0, text: "Party girls don't get hurt" },
      { time: 2, text: "Can't feel anything, when will I learn" },
      { time: 6, text: "I push it down, push it down" },
      { time: 10, text: "I'm the one 'for a good time call'" },
      { time: 14, text: "Phone's blowin' up, they're ringin' my doorbell" },
      { time: 18, text: "I feel the love, feel the love" },
      { time: 22, text: "1, 2, 3, 1, 2, 3, drink" },
      { time: 26, text: "1, 2, 3, 1, 2, 3, drink" },
      { time: 30, text: "1, 2, 3, 1, 2, 3, drink" },
      { time: 34, text: "Throw 'em back, 'til I lose count" },
      { time: 39, text: "I'm gonna swing from the chandelier" },
      { time: 43, text: "From the chandelier" },
      { time: 47, text: "I'm gonna live like tomorrow doesn't exist" },
      { time: 51, text: "Like it doesn't exist" },
      { time: 56, text: "I'm gonna fly like a bird through the night" },
      { time: 60, text: "Feel my tears as they dry" },
      { time: 64, text: "I'm gonna swing from the chandelier" },
      { time: 69, text: "From the chandelier" },
      { time: 75, text: "But I'm holding on for dear life" },
      { time: 79, text: "Won't look down, won't open my eyes" },
      { time: 83, text: "Keep my glass full until morning light" },
      { time: 87, text: "'Cause I'm just holding on for tonight" },
      { time: 91, text: "Help me, I'm holding on for dear life" },
      { time: 95, text: "Won't look down, won't open my eyes" },
      { time: 99, text: "Keep my glass full until morning light" },
      { time: 103, text: "'Cause I'm just holding on for tonight" },
      { time: 108, text: "On for tonight, on for tonight" },
      { time: 116, text: "Sun is up, I'm a mess" },
      { time: 120, text: "Gotta get out now, gotta run from this" },
      { time: 124, text: "Here comes the shame, here comes the shame" },
      { time: 128, text: "1, 2, 3, 1, 2, 3, drink" },
      { time: 132, text: "1, 2, 3, 1, 2, 3, drink" },
      { time: 136, text: "1, 2, 3, 1, 2, 3, drink" },
      { time: 140, text: "Throw 'em back, 'til I lose count" },
      { time: 145, text: "I'm gonna swing from the chandelier" },
      { time: 150, text: "From the chandelier" },
      { time: 154, text: "I'm gonna live like tomorrow doesn't exist" },
      { time: 158, text: "Like it doesn't exist" },
      { time: 162, text: "I'm gonna fly like a bird through the night" },
      { time: 166, text: "Feel my tears as they dry" },
      { time: 170, text: "I'm gonna swing from the chandelier" },
      { time: 175, text: "From the chandelier" },
      { time: 180, text: "But I'm holding on for dear life" },
      { time: 184, text: "Won't look down, won't open my eyes" },
      { time: 188, text: "Keep my glass full until morning light" },
      { time: 192, text: "'Cause I'm just holding on for tonight" },
      { time: 196, text: "On for tonight, on for tonight" }
    ]
  },
  recognition: {
    src: "assets/recognition.mp3",
    video: "assets/recognition_bg.mp4",
    lyrics: [
      { time: 0, text: "Roaches on the wall" },
      { time: 4, text: "Whole blunts in the ashtray" },
      { time: 8, text: "You lied to me bitch" },
      { time: 12, text: "I'm gon' lie when you ask me" },
      { time: 16, text: "You wanna be involved" },
      { time: 20, text: "I don't want this pain at all" },
      { time: 24, text: "I don't need to say shit to you" },
      { time: 28, text: "My face gon' say it all" },
      { time: 32, text: "Free Quan and Macho" },
      { time: 36, text: "Hold my breath, smoke fronto" },
      { time: 40, text: "Fresh to death" },
      { time: 44, text: "Thank God for every breath" },
      { time: 48, text: "Used Tinos still I step" },
      { time: 52, text: "Remember duct tape when you get swept" },
      { time: 56, text: "Halfway right girl halfway left" },
      { time: 60, text: "I pray I do my best" },
      { time: 64, text: "I pray that's like my vest" }
    ]
  },
  nuts: {
    src: "assets/nuts.mp3",
    video: "assets/nuts_bg.mp4",
    lyrics: [
      { time: 0, text: "Girl, I don't know what to say" },
      { time: 4, text: "I just wanna be with you" },
      { time: 8, text: "Every night and every day" },
      { time: 12, text: "Girl, you got me goin' nuts" },
      { time: 16, text: "I'm just tryna feel your touch" },
      { time: 20, text: "Why you always in a rush?" },
      { time: 24, text: "Girl, you got me goin' nuts" },
      { time: 28, text: "Girl, you got me goin' nuts" }
    ]
  }
};

let currentLyrics = [];

function playSong(songKey) {
  const song = lyricsData[songKey];
  if (!song) return;
  audio.src = song.src;
  currentLyrics = song.lyrics;
  renderLyrics();
  audio.play();

  // 🎥 Update background video
  if (song.video) {
    bgVideo.innerHTML = `<source src="${song.video}" type="video/mp4">`;
    bgVideo.load();
    bgVideo.play();
  }
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

audio.addEventListener("timeupdate", () => {
  currentLyrics.forEach((line, index) => {
    const currentTime = audio.currentTime;
    const nextLine = currentLyrics[index + 1];
    const div = document.getElementById(`line-${index}`);
    if (
      currentTime >= line.time &&
      (!nextLine || currentTime < nextLine.time)
    ) {
      document.querySelectorAll(".lyrics-line").forEach((el) => el.classList.remove("active"));
      div.classList.add("active");
      div.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  });
});
