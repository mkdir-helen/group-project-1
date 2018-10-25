
const astro_url = "http://my-little-cors-proxy.herokuapp.com/https://zodiacal.herokuapp.com/api";

function zodiacData() {
    fetch(astro_url)
    .then(r => r.json())
    .then(cacheData)
    .then(doStuff)
}

function cacheData(data){
    //store data
    return data;
}

function doStuff(data){
    console.log(data[0]);
}

zodiacData();