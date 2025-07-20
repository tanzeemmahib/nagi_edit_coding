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
  consume: {
    src: "assets/consume.mp3",
    video: "assets/consume_bg.mp4",
    lyrics: [
      { time: 0, text: "本当は私気づいてたんです" },
      { time: 5, text: "あなたが私を見ていてくれたこと" },
      { time: 10, text: "Alright, alright, whoa" },
      { time: 13, text: "Why you pointing at me with that knife?" },
      { time: 18, text: "I've been cutting corners all my life, girl" },
      { time: 23, text: "The terror doesn't blossom overnight, no" },
      { time: 27, text: "She's running through the city in a rampage" },
      { time: 32, text: "Pressing on her fingers 'til the bones break" },
      { time: 36, text: "There's blood all in her nose from the propane" },
      { time: 41, text: "But a needle to the skin will make the pain fade" },
      { time: 46, text: "Yeah, ah-ah" },
      { time: 48, text: "This is what I do, ah-ah" },
      { time: 50, text: "Take another bite, ah-ah" },
      { time: 53, text: "Big enough to chew" },
      { time: 56, text: "She said, 'Careful, or you'll lose it'" },
      { time: 60, text: "But, girl, I'm only human" },
      { time: 64, text: "And I know there's a blade where your heart is" },
      { time: 69, text: "And you know how to use it" },
      { time: 72, text: "And you can take my flesh if you want, girl" },
      { time: 76, text: "But, baby, don't abuse it" },
      { time: 80, text: "These voices in my head screaming, 'Run, now'" },
      { time: 84, text: "I'm praying that they're human" },
      { time: 89, text: "Rollin', rollin', rolling back your eyes through your mind like" },
      { time: 93, text: "Oh, whoa, the pressure in the gland's tight" },
      { time: 97, text: "Yeah, whoa, yeah, it's either kill or be killed like" },
      { time: 101, text: "Oh, whoa, the blood is either poured or it's spilt like" },
      { time: 105, text: "Yeah, ah-ah" },
      { time: 107, text: "This is what I do, ah-ah" },
      { time: 109, text: "Take another bite, ah-ah" },
      { time: 112, text: "Big enough to chew" },
      { time: 115, text: "She said, 'Careful, or you'll lose it'" },
      { time: 118, text: "But, girl, I'm only human" },
      { time: 122, text: "And I know there's a blade where your heart is" },
      { time: 126, text: "And you know how to use it" },
      { time: 129, text: "And you can take my flesh if you want, girl" },
      { time: 133, text: "But, baby, don't abuse it" },
      { time: 137, text: "These voices in my head screaming, 'Run, now'" },
      { time: 141, text: "I'm praying that they're human" },
      { time: 145, text: "Alright, alright, whoa" },
      { time: 148, text: "Love you but you cannot spend the night" },
      { time: 152, text: "Nah, I've been alone almost all my life, girl" },
      { time: 157, text: "And shit like that don't change up overnight, sweet" },
      { time: 161, text: "I let you sleep in my tee (tee)" },
      { time: 164, text: "Tell me the things that you don't normally tweet" },
      { time: 168, text: "Acid and LSD and smokin' blunts on the beach" },
      { time: 172, text: "69 down 69, so we can both get a piece, yeah" },
      { time: 177, text: "I've been cutting corners like my whole life" },
      { time: 181, text: "Backstabbing bitches tryna kill me with the whole knife" },
      { time: 185, text: "Day I die'll be the only day a nigga ghostwrite" },
      { time: 189, text: "When I go, they'll treat me like a god if this shit goes right" },
      { time: 193, text: "She said, 'Careful, or you'll lose it'" },
      { time: 197, text: "But, girl, I'm only human" },
      { time: 201, text: "And I know there's a blade where your heart is" },
      { time: 205, text: "And you know how to use it" },
      { time: 208, text: "And you can take my flesh if you want, girl" },
      { time: 212, text: "But, baby, don't abuse it" },
      { time: 216, text: "These voices in my head screaming, 'Run, now'" },
      { time: 220, text: "I'm praying that they're human" },
      { time: 224, text: "Please understand that I'm trying my hardest" },
      { time: 228, text: "My head's a mess, but I'm trying regardless" },
      { time: 232, text: "Anxiety is one hell of a problem" },
      { time: 236, text: "She's latching onto me, I can't resolve it" },
      { time: 240, text: "It's not right, it's not fair, it's not fair, it's not fair" },
      { time: 245, text: "It's no fair, it's no fair" },
      { time: 248, text: "Oh, no, no, no (ooh-ooh)" },
      { time: 252, text: "Don't run, don't run" }
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
