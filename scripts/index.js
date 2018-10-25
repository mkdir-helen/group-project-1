const dataContainer = document.querySelector('[data-container]');
const dataModal = document.querySelector('[data-modal]');
const thumbnail = document.querySelectorAll('.thumbnail');
const modalContents = document.querySelector('[data-modal-contents]');
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

// function doStuff(data) {
//     console.log(data);
//     return data;
// }

zodiacData();

function retrieve(data) {
    for (let i = 0; i < thumbnail.length; i++) {
        thumbnail[i].addEventListener('click', function () {
            if (data[i].name) {
                modalContents.innerHTML = '';
                let titles = ['Element','Mental Traits', 'Physical Traits', 'Famous People', 'Secret Wish', 'Vibe',  
             'Hates', 'Compatibility']
                let elements = [data[i].element, data[i].mental_traits[0], data[i].physical_traits[0], data[i].famous_people[0], data[i].secret_wish, data[i].vibe,
                   data[i].hates[0],
                data[i]['compatibility']];
                
                let newH = document.createElement('h2');
                newH.textContent = data[i].name;
                modalContents.appendChild(newH);
                for(let i=0; i<titles.length; i++){
                    let title = titles[i];
                    let element = elements[i];
                    let newP = document.createElement('p');
                    newP.innerHTML = '<span class="pretty_title"><strong>'+ title +'</strong></span>' + '<br>' + element;
                    modalContents.appendChild(newP);
                }

                // titles.forEach(function(title){
                //     let newH = document.createElement('h1');
                //     newH.innerHTML = title;
                //     modalContents.appendChild(newH);  
                // })
                // elements.forEach(function (stuff) {
                //     let newP = document.createElement('p');
                //     newP.innerHTML = stuff;
                //     modalContents.appendChild(newP);
                    
                // })
                
                // console.log(data[i].mental_traits[0]);
                // let newP = document.createElement('p');
                // let newQ = document.createElement('p');
                // newP.textContent = (`Your mental traits are ${data[i].mental_traits[0]}.`);
                // newQ.textContent = (`Your secret wish is ${data[i].secret_wish[0]}.`);
                // // console.log(newP);
                // dataModal.appendChild(newQ);
                dataModal.classList.remove('modal-hidden');
            }
        })
    }
}

dataModal.addEventListener('click', function () {
    dataModal.classList.add('modal-hidden');
});