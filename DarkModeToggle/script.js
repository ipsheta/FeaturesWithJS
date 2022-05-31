const toggle = document.getElementById('toggle');

toggle.addEventListener('change', (e) => {
    //add dark class if checkbox is checked
    document.body.classList.toggle('dark', e.target.checked);

});