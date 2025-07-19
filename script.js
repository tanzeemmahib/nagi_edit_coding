const audio = document.getElementById("audio");
const lyricsContainer = document.getElementById("lyrics");

const lyricsData = {
  chandelier: {
    src: "assets/chandelier.mp3",
    lyrics: [
      { time: 0, text: "Party girls don't get hurt" },
      { time: 4, text: "Can't feel anything, when will I learn" },
      { time: 9, text: "I push it down, push it down" },
      { time: 13, text: "I'm the one 'for a good time call'" },
      { time: 17, text: "Phone's blowin' up, they're ringin' my doorbell" },
      { time: 21, text: "I feel the love, feel the love" },
      { time: 25, text: "1, 2, 3, 1, 2, 3, drink" },
      { time: 29, text: "1, 2, 3, 1, 2, 3, drink" },
      { time: 33, text: "1, 2, 3, 1, 2, 3, drink" },
      { time: 37, text: "Throw 'em back, 'til I lose count" },
      { time: 42, text: "I'm gonna swing from the chandelier" },
      { time: 47, text: "From the chandelier" },
      { time: 52, text: "I'm gonna live like tomorrow doesn't exist" },
      { time: 57, text: "Like it doesn't exist" },
      { time: 62, text: "I'm gonna fly like a bird through the night" },
      { time: 67, text: "Feel my tears as they dry" },
      { time: 72, text: "I'm gonna swing from the chandelier" },
      { time: 77, text: "From the chandelier" },
      { time: 82, text: "But I'm holding on for dear life" },
      { time: 86, text: "Won't look down, won't open my eyes" },
      { time: 90, text: "Keep my glass full until morning light" },
      { time: 95, text: "'Cause I'm just holding on for tonight" },
      { time: 100, text: "Help me, I'm holding on for dear life" },
      { time: 105, text: "Won't look down, won't open my eyes" },
      { time: 110, text: "Keep my glass full until morning light" },
      { time: 115, text: "'Cause I'm just holding on for tonight" },
      { time: 120, text: "On for tonight" },
    ],
  },
  // other songs...
};

let currentLyrics = [];

function playSong(songKey) {
  const song = lyricsData[songKey];
  if (!song) return;
  audio.src = song.src;
  currentLyrics = song.lyrics;
  renderLyrics();
  audio.play();
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
      document
        .querySelectorAll(".lyrics-line")
        .forEach((el) => el.classList.remove("active"));
      div.classList.add("active");
      div.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  });
});
