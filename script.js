const audio = document.getElementById("myAudio");
const listenButton = document.querySelector(".listen");

listenButton.addEventListener("click", function () {
    if (audio.paused) {
        audio.play();
        listenButton.innerHTML = "<i class='bx bx-pause'></i> listen now";
    } else {
        audio.pause();
        listenButton.innerHTML = "<i class='bx bx-play'></i>listen now";
    }
});

function shareAudio() {
    const audioSrc = audio.src;
    navigator.share({
        title: "Level Days - Monstercat",
        text: "Listen to this song I found on my favorite music site",
        url: audioSrc
    })
        .then(() => console.log("Share successful"))
        .catch(error => console.log("Share failed:", error));
}
