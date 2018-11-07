// ===============
// Query Selectors
// ===============
const dataContainer = document.querySelector('[data-container]');
const dataModal = document.querySelector('[data-modal]');
const thumbnail = document.querySelectorAll('.thumbnail');
const modalContents = document.querySelector('[data-modal-contents]');
const closeButton = document.querySelector('#close');
const modalHeaderClare = document.createElement('div');
const modalHeaderMelon = document.createElement('div');
const modalTitle = document.createElement('div');

// ===================
// Fetched API's & Url
// ===================

const fetchedNasaApi = fetch('https://api.nasa.gov/planetary/apod?api_key=NsOJtsgXZf2MCfrnp0agtJ0Kr1w3xPcZVLMWM3Hq&date=2018-10-10');
// const fetchedNasaApi = fetch('https://api.nasa.gov/planetary/apod?api_key=NsOJtsgXZf2MCfrnp0agtJ0Kr1w3xPcZVLMWM3Hq');
const fetchedAstroUrl = fetch('http://my-little-cors-proxy.herokuapp.com/https://zodiacal.herokuapp.com/api');
const fetchedAdviceApi = fetch('http://api.adviceslip.com/advice');

// ==========================================================
// Triggers Promise and Converts Both Fetched Api's Into JSON
// ==========================================================
Promise.all([fetchedNasaApi, fetchedAstroUrl])
    .then((resolvedPData) => {
        let jsonArray = resolvedPData.map(eachP => {
            return eachP.json();
        })
        return Promise.all(jsonArray);
    })

    // ===================================
    // Returns Modified Values In An Array
    // ===================================
    .then((jsonArray) => {
        return [jsonArray[1], jsonArray[0]];
    })

    // =================================================================================================
    // Triggers Function Calls To Get Background Image Appended and Major DOM Manipulation Functionality
    // =================================================================================================
    .then((bothPromises) => {
        appendImageToBody(bothPromises[1]);
        retrieve(bothPromises[0]);
    })
   

// ==============================================
// Function That Appends Background Image To Body
// ==============================================
function appendImageToBody(astroData) {
    //Check to see if source is image and not a video
    if(astroData.media_type==='image'){
        document.body.style.backgroundImage = `url(${astroData.url})`;
    //If the source is video, make image source a default image    
    }else{
        // document.body.style.backgroundImage = `url("https://apod.nasa.gov/apod/image/1810/HyperionGalaxies_ESO_1080.jpg")`;
        document.body.style.backgroundImage = `url("https://apod.nasa.gov/apod/image/1811/ngc6188TianLee1024.jpg")`;
    }
    console.log(astroData);
    // media_type
    
}

// =================================================
// Function For Major Dom Manipulation Functionality
// =================================================
function retrieve(data) {

    //  Loops through all divs containing astrological images
    for (let i = 0; i < thumbnail.length; i++) {

        // Adds an event listener on the indiviual div/image so when the user clicks we can execute the following code
        thumbnail[i].addEventListener('click', function () {

            // Checks to see the current existance of the Astrilogical name
            if (data[i].name) {

                // Fetches advice API each time user clicks on a given astrology sign
                function getAdvice() {
                    fetch('http://api.adviceslip.com/advice')
                    .then(response => response.json())
                    .then(data => data.slip.advice)
                    .then(changeAdvice)
                }
                getAdvice();

                // Creates function to change daily advice each time user clicks astrology sign
                function changeAdvice(dailyAdvice) {

                    // Resets inner.HTML every time user clicks on new astrology sign
                    modalHeaderClare.innerHTML = '';

                    // Creates a new empty paragraph
                    const advice = document.createElement('p');

                    // Sets the innerHTML to the daily adivce
                    advice.innerHTML = '<span class="pretty_title"><strong>' + 'Your Lucky Advice' + '</strong></span>' + '<br>' + dailyAdvice;

                    // Gives the advice paragraph a class of advice
                    advice.setAttribute('class', 'advice');

                    // Appends the modfied result to main div
                    modalHeaderClare.appendChild(advice);
                }

                // Each time through the loop we reset the inner.html
                modalContents.innerHTML = '';
                
                // Reset the div that contains the title for the modal
                modalHeaderMelon.innerHTML = '';

                // Creates an array with the elements traits
                let titles = ['Element',
                    'Mental Traits',
                    'Physical Traits',
                    'Famous People',
                    'Secret Wish',
                    'Vibe',
                    'Hates',
                    'Compatibility'];

                // Creates an array with the targeted data structures astrological traits
                let elements = [data[i].element,
                data[i].mental_traits[0],
                data[i].physical_traits[0],
                data[i].famous_people[0],
                data[i].secret_wish,
                data[i].vibe,
                data[i].hates[0],
                // Compatibility was an object not an array
                data[i]['compatibility']];

                //Made a div that would contain the two seprate divs(title, advice)
                modalTitle.setAttribute('class', 'modal-titles');
                
                // Creates a new h2 element to hold the value of the name of the astrological sign
                let newH = document.createElement('h2');
                
                // Sets the h2 element to contain our the name of our astrological sign
                newH.textContent = data[i].name;
                
                // Appends the name of our astrological sign to the header
                modalHeaderMelon.appendChild(newH);
                modalHeaderMelon.setAttribute('class', 'modalTitle');
                modalTitle.appendChild(modalHeaderMelon);

                // Creates a header to hold the header and advice slip
                modalHeaderClare.setAttribute('class', 'modalHeader');
                modalTitle.appendChild(modalHeaderClare);
                modalContents.appendChild(modalTitle);

                // Loops through our titles/astrological traits
                for (let i = 0; i < titles.length; i++) {

                    // Sets each element in titles array to the title variable to be used later
                    let title = titles[i];

                    // Sets each element in elements array to the element variable to be used later
                    let element = elements[i];

                    // Creates a new paragraph for ...
                    let newP = document.createElement('p');

                    // Creates a class on the fly inside a span that sets the inner.html to the astrological trait and element to the current sign in the loop
                    newP.innerHTML = '<span class="pretty_title"><strong>' + title + '</strong></span>' + '<br>' + element;

                    // Appends modified newP to modalContents
                    modalContents.appendChild(newP);
                }

                // Triggers class to reveal modal
                dataModal.classList.remove('modal-hidden');

                // Adds an event listener to check for when the user clicks the close button
                closeButton.addEventListener('click', function () {

                    // Adds class to make modal hidden again
                    dataModal.classList.add('modal-hidden');

                    // Resets class name for close button
                    this.className = '';
                });

                // Checks if current image clicked is at index 0, 4, or 8 to set to fire sign
                if (i===0 || i===4 || i===8) {

                    // Adds class name of fire based on current astrological sign
                    newH.classList.add('fire');

                    // Adds same styles and class name for button
                    closeButton.classList.add('fire');

                // Checks if current image clicked is at index 1, 5, or 9 to set to earth sign
                } else if (i===1 || i===5 || i===9) {
                    
                    // Adds class name of earth based on current astrological sign 
                    newH.classList.add('earth');

                    // Adds same styles and class name for button
                    closeButton.classList.add('earth');

                // Checks if current image clicked is at index 2, 6, or 10 to set to air sign
                } else if (i===2 || i===6 || i===10) {
                    
                    // Adds class name of air based on current astrological sign
                    newH.classList.add('air');

                    // Adds same styles and class name for button
                    closeButton.classList.add('air');

                // Checks if current image clicked is at index 3, 7, or 11 to set to water sign
                } else if (i===3 || i===7 || i===11) {
                    
                    // Adds class name of water based on current astrological sign
                    newH.classList.add('water');

                    // Adds same styles and class name for button
                    closeButton.classList.add('water');
                }
            }
        })
    }
}

// =================================================
// Function For Escape Key To Re-Hide Modal Element
// =================================================
// Adds an event listener to to see what key stroke the use presses
window.addEventListener('keydown', (event) => {
    // key: "Escape"
    // keyCode: 27

    // Checks if the user has hit the escape key
    if (this.event.keyCode === 27) {

        // We want to avoid duplicates of classes being created
        // If the classList is currently empty(false) or not hidden
        if (dataModal.classList.contains('modal-hidden') === false){

            // Then after the user presses escape we want to add the class name to dataModal
            dataModal.classList.add('modal-hidden');

        };
    }
});

