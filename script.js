const audio = document.querySelector(".audio");
const listenButton = document.querySelector(".listen");
const audioTracks = document.querySelectorAll('.audio-track')
const playButtons = document.querySelectorAll('.btn-play')

playButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        const audioTrack = audioTracks[index];
        if (audioTrack.paused) {
            audioTrack.play()
            button.innerHTML = '<i class="fa-solid fa-pause"></i>'
        } else {
            audioTrack.pause()
            button.innerHTML = '<i class="fa-solid fa-play"></i>'
        }
    })
})


listenButton.addEventListener("click", function () {
    if (audio.paused) {
        audio.play();
        listenButton.innerHTML = "<i class='bx bx-pause'></i> listen now";
    } else {
        audio.pause();
        listenButton.innerHTML = "<i class='bx bx-play'></i>listen now";
    }
});

function shareAudio(songTitle, songUrl) {
    navigator.share({
        title: songTitle,
        text: "Listen to this song I found on my favorite music site",
        url: songUrl
    })
        .then(() => console.log("Share successful"))
        .catch(error => console.log("Share failed:", error));
}


function openNav() {
    document.querySelector(".sidebar").style.width = "32vw";
}

function closeNav() {
    document.querySelector(".sidebar").style.width = "0";
    document.querySelector(".main-content").style.marginRight = "0";
}

const menuBtn = document.getElementById('music');
const submenu = document.getElementById('music-show');
const menuBtnTwo = document.getElementById('about');
const submenuTwo = document.getElementById('about-show');
const menuBtnThree = document.getElementById('events');
const submenuThree = document.getElementById('events-show');
const menuBtnFour = document.getElementById('prog');
const submenuFour = document.getElementById('prog-show');

menuBtn.addEventListener('click', () => {
    submenu.classList.toggle('show');
});

menuBtnTwo.addEventListener('click', () => {
    submenuTwo.classList.toggle('show');
});
menuBtnThree.addEventListener('click', () => {
    submenuThree.classList.toggle('show');
});
menuBtnFour.addEventListener('click', () => {
    submenuFour.classList.toggle('show');
});