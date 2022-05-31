const sounds = ["1", "2", "3", "4", "5", "6", "7"];

sounds.forEach(sound => {
    const btn = document.createElement("button");
    btn.classList.add("btn");

    btn.innerText = "Play Track " + sound;

    btn.addEventListener('click', () => {
        stopSounds();
        document.getElementById(sound).play();
    });

    document.body.appendChild(btn);
});

//To stop audio and if clicked same song, play from the beginning
function stopSounds() {
    sounds.forEach((sound) => {
        const song = document.getElementById(sound);
        song.pause();
        //play from the beginning(if clicked)
        song.currentTime = 0;
    });

}