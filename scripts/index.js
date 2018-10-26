// ===============
// Query Selectors
// ===============
const dataContainer = document.querySelector('[data-container]');
const dataModal = document.querySelector('[data-modal]');
const thumbnail = document.querySelectorAll('.thumbnail');
const modalContents = document.querySelector('[data-modal-contents]');
const closeButton = document.querySelector('#close');


// ==========
// API Urls's
// ==========
const astroUrl = 'http://my-little-cors-proxy.herokuapp.com/https://zodiacal.herokuapp.com/api';
const nasaApi = 'https://api.nasa.gov/planetary/apod?api_key=NsOJtsgXZf2MCfrnp0agtJ0Kr1w3xPcZVLMWM3Hq';

// =============
// Fetched API's
// =============
let fetchedNasaApi = fetch('https://api.nasa.gov/planetary/apod?api_key=NsOJtsgXZf2MCfrnp0agtJ0Kr1w3xPcZVLMWM3Hq')
let fetchedAstroUrl = fetch('http://my-little-cors-proxy.herokuapp.com/https://zodiacal.herokuapp.com/api');

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
    return [jsonArray[1], jsonArray[0].url];   
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
function appendImageToBody(image) {
    document.body.style.backgroundImage = `url(${image})`;
        
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

                // Each time through the loop we reset the inner.html
                modalContents.innerHTML = '';
 
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

                // Creates a new h2 element to hold the value of the name of the astrological sign
                let newH = document.createElement('h2');

                // Sets the h2 element to contain our the name of our astrological sign
                newH.textContent = data[i].name;

                // Appends the name of our astrological sign to our container
                modalContents.appendChild(newH);

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

                // Creates a new button
                let closeButton = document.createElement('button');

                // Sets the text content for the button to 'Close'
                closeButton.textContent = 'Close';

                // Sets ad id attribute of the button to close
                closeButton.setAttribute('id', 'close');

                // Appends the new button to our modal contents
                modalContents.appendChild(closeButton);

                // Triggers class to reveal modal
                dataModal.classList.remove('modal-hidden');

                // Adds an event listener to check for when the user clicks the close button
                closeButton.addEventListener('click', function () {

                // Adds class to make modal hidden again
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

