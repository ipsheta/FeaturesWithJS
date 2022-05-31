let text = 'Hi! I am a auto writing text❤️❤️';

let index = 0;

function writeText() {
    document.body.innerText = text.slice(0, index);
    index++;

    if (index > text.length) {
        index = 0;
    }
}

setInterval(() => {
    writeText();
}, 150);