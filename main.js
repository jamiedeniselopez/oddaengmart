let menu = document.querySelector('#donate-heart');
let navigation = document.querySelector('.navigation');

menu.onclick = () => {
    navigation.classList.toggle('active');
}

window.onscroll = () => {
    navigation.classList.remove('active');
}