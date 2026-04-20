// correct selectors
const play = document.getElementById("play");
const img = document.querySelector("img");
const music = document.getElementById("audio");

const artist = document.getElementById("artist");
const title = document.getElementById("title");

const prev = document.getElementById("prev");
const next = document.getElementById("next");

// songs data
const songs = [
{
    name: "thapa-1",
    title: "5-7",
    artist: "Karan Aujla"
},
{
    name: "thapa-2",
    title: "Excuses",
    artist: "AP Dhillon"
},
{
    name: "thapa-3",
    title: "tateeree",
    artist: "Badshah"
}
];

let isPlaying = false;

// play function
const playMusic = () => {
    isPlaying = true;
    music.play();
    play.classList.replace("fa-play", "fa-pause");
    img.classList.add("anime");
};

// pause function
const pauseMusic = () => {
    isPlaying = false;
    music.pause();
    play.classList.replace("fa-pause", "fa-play");
    img.classList.remove("anime");
};

// play click
play.addEventListener("click", () => {
    isPlaying ? pauseMusic() : playMusic();
});

// load song
const loadSong = (song) => {
    title.textContent = song.title;
    artist.textContent = song.artist;
    music.src = `music/${song.name}.mp3`;
    img.src = `images/${song.name}.jpg`;
};

// initial load
loadSong(songs[0]);
let songIndex = 0;

const nextSong = () => {
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
};

const prevSong = () => {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
};

next.addEventListener("click", nextSong);
prev.addEventListener("click", prevSong);