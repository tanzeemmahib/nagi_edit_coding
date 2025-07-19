const audio = document.getElementById("audio");
const lyricsDiv = document.getElementById("lyrics");
const bgVideo = document.getElementById("bg-video");

const songs = {
  "Chandelier": {
    file: "assets/chandelier.mp3",
    lyrics: [
      { time: 0, text: "Party girls don't get hurt" },
      { time: 3, text: "Can't feel anything, when will I learn?" },
      { time: 6, text: "I push it down, push it down" },
      { time: 10, text: "I'm the one \"for a good time call\"" },
      { time: 13, text: "Phone's blowin' up, ringin' my doorbell" },
      { time: 16, text: "I feel the love, feel the love" },
      { time: 20, text: "1, 2, 3, 1, 2, 3, drink" },
      { time: 23, text: "Throw 'em back till I lose count" }
    ],
    video: "assets/chandelier_bg.mp4"
  },
  "The Laws of Recognition": {
    file: "assets/laws_of_recognition.mp3",
    lyrics: [
      { time: 0, text: "Roaches on the wall" },
      { time: 4, text: "Whole blunts in the ashtray" },
      { time: 8, text: "You lied to me bitch" },
      { time: 11, text: "I'm gone lie when you ask me" },
      { time: 15, text: "You wanna be involved" },
      { time: 18, text: "I don't want this pain at all" },
      { time: 22, text: "I don't need to say shit to you my face gone say it all" },
      { time: 27, text: "Free Quan" },
      { time: 29, text: "And Macho" },
      { time: 31, text: "Hold my breathe" },
      { time: 34, text: "Smoke fronto" },
      { time: 36, text: "Fresh to death" },
      { time: 38, text: "Thank god for every breathe" },
      { time: 41, text: "Used tinos still I step" },
      { time: 44, text: "Remember duck tape when you get swept" },
      { time: 48, text: "Halfway right girl halfway left" },
      { time: 52, text: "I pray I do my best" },
      { time: 55, text: "I pray that's like my vest" }
    ],
    video: "assets/laws_bg.mp4"
  },
  "Nuts": {
    file: "assets/nuts.mp3",
    lyrics: [
      { time: 0, text: "Girl, you're f*ckin' nuts" },
      { time: 3, text: "I'm just tryna f*ck, not fall in love" },
      { time: 7, text: "But you make it hard as hell" },
      { time: 10, text: "When you're wearin' my clothes and you're high as hell" },
      { time: 14, text: "I can't tell if this is love or a spell" },
      { time: 17, text: "You make me wish I wasn't myself" }
    ],
    video: "assets/nuts_bg.mp4"
  }
};

let lyricInterval;

function playSong(songName) {
  const song = songs[songName];
  clearInterval(lyricInterval);

  audio.src = song.file;
  audio.play();

  bgVideo.src = song.video;
  bgVideo.load();
  bgVideo.play();

  // Clear existing and set synced lyrics
  if (Array.isArray(song.lyrics)) {
    lyricsDiv.textContent = "";
    lyricInterval = setInterval(() => {
      const current = Math.floor(audio.currentTime);
      const line = song.lyrics.find(l => l.time === current);
      if (line) lyricsDiv.textContent = line.text;
    }, 500);
  } else {
    lyricsDiv.textContent = song.lyrics;
  }
}
