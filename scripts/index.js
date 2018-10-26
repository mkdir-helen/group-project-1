const dataContainer = document.querySelector('[data-container]');
const dataModal = document.querySelector('[data-modal]');
const thumbnail = document.querySelectorAll('.thumbnail');
const modalContents = document.querySelector('[data-modal-contents]');
const closeButton = document.querySelector('#close');
const images = [
    "images/aries.jpg",
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
    "images/pisces.jpg"
];

const astro_url = "http://my-little-cors-proxy.herokuapp.com/https://zodiacal.herokuapp.com/api";

function zodiacData() {
    fetch(astro_url)
    .then(r => r.json())
    .then(cacheData)
    // .then(doStuff)
    .then(retrieve)
}

function cacheData(data) {
    return data;
}


zodiacData();

function retrieve(data) {
    for (let i = 0; i < thumbnail.length; i++) {
        thumbnail[i].addEventListener('click', function () {
            if (data[i].name) {
                modalContents.innerHTML = '';
                let titles = ['Element', 'Mental Traits', 'Physical Traits', 'Famous People', 'Secret Wish', 'Vibe',
                'Hates', 'Compatibility']
                let elements = [data[i].element, data[i].mental_traits[0], data[i].physical_traits[0], data[i].famous_people[0], data[i].secret_wish, data[i].vibe,
                data[i].hates[0],
                data[i]['compatibility']];
                let newH = document.createElement('h2');
                newH.textContent = data[i].name;
                modalContents.appendChild(newH);
                for (let i = 0; i < titles.length; i++) {
                    let title = titles[i];
                    let element = elements[i];
                    let newP = document.createElement('p');
                    newP.innerHTML = '<span class="pretty_title"><strong>' + title + '</strong></span>' + '<br>' + element;
                    modalContents.appendChild(newP);
                }
                dataModal.classList.remove('modal-hidden');
                closeButton.addEventListener('click', function () {
                    dataModal.classList.add('modal-hidden');
                    this.className = '';
                });
                if(i===0 || i===4 || i===8){
                    //fire
                    newH.classList.add('fire');
                    closeButton.classList.add('fire');
                }else if (i===1 || i===5 || i===9){
                    //earth
                    newH.classList.add('earth');
                    closeButton.classList.add('earth');
                }else if(i===2 || i===6 || i===10){
                    //air
                    newH.classList.add('air');
                    closeButton.classList.add('air');
                }else if(i===3 || i===7 || i===11){
                    //water
                    newH.classList.add('water');
                    closeButton.classList.add('water');
                }
            }
        })
    }
}

window.addEventListener('keydown', (event) => {
    // key: "Escape"
    // keyCode: 27
    if (this.event.keyCode === 27) {
        if(dataModal.classList.contains('modal-hidden') === false){
            dataModal.classList.add('modal-hidden');
          };
    }
});





                // closeButton.textContent = 'Close';
                // closeButton.setAttribute('id', 'close');
                // dataModal.appendChild(closeButton);
                // dataModal.classList.remove('modal-hidden');
                // closeButton.addEventListener('click', function () {
                //     dataModal.classList.add('modal-hidden');
                // });
