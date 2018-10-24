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

const astro_url = "http://my-little-cors-proxy.herokuapp.com/https://zodiacal.herokuapp.com/api";

function zodiacData() {
    fetch(astro_url)
        .then(r => r.json())
        .then(cacheData)
        .then(doStuff)
        .then(retrieve)
}

function cacheData(data) {
    //store data
    return data;
}

function doStuff(data) {
    console.log(data);
    return data;
}

zodiacData();


function retrieve(data) {
    for (let i = 0; i < thumbnail.length; i++) {
        thumbnail[i].addEventListener('click', function () {
            if (data[i].name) {
                dataModal.innerHTML = '';
                let elements = [data[i].mental_traits[0], data[i].secret_wish, data[i].vibe,
                data[i].physical_traits[0], data[i].element, data[i].famous_people[0], data[i].hates[0],
                data[i]['compatibility']];

                elements.forEach(function (stuff) {
                    let newP = document.createElement('p');
                    newP.textContent = stuff;
                    dataModal.appendChild(newP);

                })
                // console.log(data[i].mental_traits[0]);
                // let newP = document.createElement('p');
                // let newQ = document.createElement('p');
                // newP.textContent = (`Your mental traits are ${data[i].mental_traits[0]}.`);
                // newQ.textContent = (`Your secret wish is ${data[i].secret_wish[0]}.`);
                // // console.log(newP);
                // dataModal.appendChild(newQ);
                // dataModal.remove(modal - hidden);
            }
        })
    }
}
