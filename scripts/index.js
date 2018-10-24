const dataContainer = document.querySelector('[data-container]');
const dataModal = document.querySelector('[data-modal]');
const thumbnail = document.querySelectorAll('.thumbnail');
const images = ["images/aries.jpg",
    "images/taurus.jpg",
    "images/gemini.jpg",
    "images/cancer.jpg",
    "images/leo.jpg",
    "images/virgo.jpg",
    "images/libra.jpg",
    "images/scorpio.jpg",
    "images/sagittarius.jpg",
    "images/capricorn.jpg",
    "images/aquarius.jpg",
    "images/pisces.jpg"];


// console.log(thumbnail.length);
for (let i = 0; i < thumbnail.length; i++) {
    // console.log('hello');
    thumbnail[i].addEventListener('click', function () {
        // to do shit;
        // dataModal.remove(modal - hidden);
    });
};
