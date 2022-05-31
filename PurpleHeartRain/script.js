function createHeart() {
    const heart = document.createElement('div');

    heart.classList.add('heart');
    //to fall from allover screen
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';
    heart.innerText = '💜'; //press 'window key' and ';' together
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}
setInterval(createHeart, 300);