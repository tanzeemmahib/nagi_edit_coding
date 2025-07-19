const audio = document.getElementById("audio");
const lyricsContainer = document.getElementById("lyrics");

const lyricsData = {
  chandelier: {
    src: "assets/chandelier.mp3",
    lyrics: [
      { time: 0, text: "Party girls don't get hurt" },
      { time: 4, text: "Can't feel anything, when will I learn" },
      { time: 8, text: "I push it down, push it down" },
      { time: 12, text: "I'm the one 'for a good time call'" },
      { time: 16, text: "Phone's blowin' up, they're ringin' my doorbell" },
      { time: 20, text: "I feel the love, feel the love" },
      { time: 24, text: "1, 2, 3, 1, 2, 3, drink" },
      { time: 28, text: "1, 2, 3, 1, 2, 3, drink" },
      { time: 32, text: "1, 2, 3, 1, 2, 3, drink" },
      { time: 36, text: "Throw 'em back, 'til I lose count" },
      { time: 41, text: "I'm gonna swing from the chandelier" },
      { time: 46, text: "From the chandelier" },
      { time: 50, text: "I'm gonna live like tomorrow doesn't exist" },
      { time: 55, text: "Like it doesn't exist" },
      { time: 60, text: "I'm gonna fly like a bird through the night" },
      { time: 64, text: "Feel my tears as they dry" },
      { time: 69, text: "I'm gonna swing from the chandelier" },
      { time: 74, text: "From the chandelier" },
      { time: 80, text: "But I'm holding on for dear life" },
      { time: 84, text: "Won't look down, won't open my eyes" },
      { time: 89, text: "Keep my glass full until morning light" },
      { time: 93, text: "'Cause I'm just holding on for tonight" },
      { time: 98, text: "Help me, I'm holding on for dear life" },
      { time: 102, text: "Won't look down, won't open my eyes" },
      { time: 107, text: "Keep my glass full until morning light" },
      { time: 111, text: "'Cause I'm just holding on for tonight" },
      { time: 116, text: "On for tonight, on for tonight" },
      { time: 125, text: "Sun is up, I'm a mess" },
      { time: 129, text: "Gotta get out now, gotta run from this" },
      { time: 134, text: "Here comes the shame, here comes the shame" },
      { time: 139, text: "1, 2, 3, 1, 2, 3, drink" },
      { time: 143, text: "1, 2, 3, 1, 2, 3, drink" },
      { time: 147, text: "1, 2, 3, 1, 2, 3, drink" },
      { time: 151, text: "Throw 'em back, 'til I lose count" },
      { time: 156, text: "I'm gonna swing from the chandelier" },
      { time: 161, text: "From the chandelier" },
      { time: 165, text: "I'm gonna live like tomorrow doesn't exist" },
      { time: 170, text: "Like it doesn't exist" },
      { time: 175, text: "I'm gonna fly like a bird through the night" },
      { time: 179, text: "Feel my tears as they dry" },
      { time: 184, text: "I'm gonna swing from the chandelier" },
      { time: 189, text: "From the chandelier" },
      { time: 194, text: "But I'm holding on for dear life" },
      { time: 198, text: "Won't look down, won't open my eyes" },
      { time: 203, text: "Keep my glass full until morning light" },
      { time: 208, text: "'Cause I'm just holding on for tonight" },
      { time: 213, text: "On for tonight, on for tonight" }
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
