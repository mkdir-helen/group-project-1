<h1>Your Lucky Website </h1>
<h3>First DigitalCrafts' Group Project </h3>
<h3> by Clare Barton, April Copes, Helen Harris, Helen Hasegawa  </h3>

For our group project we built an astrological website.<br> The functionality of the site is to have a daily changing astronomy image background, provide astrological data, and a randomly retrieved piece of advice.<br> Our main focus was to implement all the things we've learned so far in the class. These include but are not limited to:
 - git and gitHub
 - using event listeners in the modal
 - responsive CSS
 - front-end functionality
 - DOM manipulation
 - Promise/ Promise
 - teamwork
 - confidence in writing code from scratch
 
 <h2>The technical parts of the site include:</h2>
 <ol><li>3 API calls to Nasa, Zodiac info, and random advice generator.</li>
 <li>One of the API calls brings back an image which is the background image of the page.</li>
 <li>The results of the other 2 API calls are seen in a modal, which is opened by clicking on one of the thumbnail images. The modal is closed by tapping escape on the keyboard or clicking close.</li>
 <li>From the zodiac API we bring back 9 different parts of the data, some of which are in arrays and some of which are in objects.</li>
 <li>The thumbnail images react on hover.</li>
 <li>The site is responsive with 5 different breakpoints.</li>
 </ol>
 
  
<h2>Challenge Extended/ Challenge Accepted/ Challenge Resolved:</h2>
  <ol><li>The API call that creates the background image is to Nasa's Astrological Picture of the Day. However, sometimes the 'image' of the day is a video! ... We did some experimentation with making the video run as the background. We got pretty far with it, but ultimately didn't have enough time to make sure it was bug-free, so instead our solution was to have the image be a default image instead of a video if the API call came back as a video.</li>
  <li>Working through the Promise and Promise All and then having to make the data coming out of that each do its own thing. ... We ended up having to pull one of the API calls back out of the Promise All, because we needed it to fetch multiple times.</li>
 <li>Working on making the internal modal colors change depending on what element they are. ... Had to use .this for the colors. </li>
 <li>Using git and gitHub ... googling, experimentation, and 'phoning an expert' aka slacking Beth/Aylin/Chris.
  </ol>
 

<h2> Built With: </h2>
<strong>HTML</strong><br>
<strong>CSS</strong><br>
<strong>JavaScript</strong><br>
<strong>Blood, Sweat, Tears, and Ice Cream</strong> <br>
<strong>Coffee</strong> <br>
