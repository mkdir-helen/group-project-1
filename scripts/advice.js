// {
//     "slip":
//     {
//         "advice": "True happiness always resides in the quest.",
//             "slip_id": "9"
//     }
// }


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
zodiacData();

function cacheData(data) {
    return data;
}


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
                // let modalHeader = document.createElement('div');
                modalHeader.setAttribute('class', 'modalHeader');
                modalContents.appendChild(modalHeader);
                let newH = document.createElement('h2');
                newH.textContent = data[i].name;
                modalHeader.appendChild(newH);
                // adviceModal();
                for (let i = 0; i < titles.length; i++) {
                    let title = titles[i];
                    let element = elements[i];
                    let newP = document.createElement('p');
                    newP.innerHTML = '<span class="pretty_title"><strong>' + title + '</strong></span>' + '<br>' + element;
                    modalContents.appendChild(newP);
                }
                let closeButton = document.createElement('button');
                closeButton.textContent = 'Close';
                closeButton.setAttribute('id', 'close');
                modalContents.appendChild(closeButton);
                dataModal.classList.remove('modal-hidden');
                closeButton.addEventListener('click', function () {
                    dataModal.classList.add('modal-hidden');
                });
            }
        })
    } function adviceSlip() {
        fetch(adviceApi)
            .then(response => response.json())
            .then(data => data.slip.advice)
            .then(adviceModal)
    }
    adviceSlip();

    let modalHeader = document.createElement('div');

    function adviceModal(input) {
        const advice = document.createElement('p');
        advice.innerHTML = '<span class="pretty_title"><strong>' + 'Your Lucky Advice' + '</strong></span>' + '<br>' + input;
        advice.setAttribute('class', 'advice');
        modalHeader.appendChild(advice);
        console.log(advice);
    }
    adviceModal();

}

// function adviceSlip() {
//     fetch('http://api.adviceslip.com/advice')
//         .then(response => response.json())
//         .then(data => data.slip.advice)
//         .then(adviceModal)
// }
// adviceSlip();

// const advice = document.createElement('p');
// let modalHeader = document.createElement('div');

// function adviceModal(input) {
//     advice.innerHTML = '<span class="pretty_title"><strong>' + 'Your Lucky Advice' + '</strong></span>' + '<br>' + input;
//     advice.setAttribute('class', 'advice');
//     modalHeader.appendChild(advice);
//     console.log(advice);
// }
// adviceModal();

window.addEventListener('keydown', function (event) {
    if (event.keyCode === 27) {
        dataModal.classList.add('modal-hidden');
    }
})



