const images = document.getElementById('images');

//selects number of img tag in images id
const totImg = document.querySelectorAll('#images img');

let idx = 0;

function playCarousel() {
    idx++;

    if (idx > totImg.length - 1) {
        idx = 0;
    }
    //transalting img first 0px and then -500,-100,-1500  and so on
    images.style.transform = `translateX(${-idx * 500}px)`;

    //setTimeout(playCarousel, 2000);
}

setInterval(() => {
    playCarousel();
}, 2000);
