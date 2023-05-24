let menu_icon = document.querySelector('.navbar .menu_icon');
let links = document.querySelector('.navbar .links');

menu_icon.addEventListener('click', function() {
    document.querySelector('.navbar').classList.toggle('show');
});
