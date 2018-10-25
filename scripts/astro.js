<<<<<<< HEAD
=======
{
    _id: "5973d0fd4d75a100114e1d79",
        name: "Aries",
            __v: 0,
                famous_people: Array(32),
                    how_to_spot: Array(3),
    …
}

>>>>>>> git-staging-1

const astro_url = "http://my-little-cors-proxy.herokuapp.com/https://zodiacal.herokuapp.com/api";

function zodiacData() {
    fetch(astro_url)
        .then(r => r.json())
        .then(cacheData)
        .then(doStuff)
}

function cacheData(data) {
    //store data
    return data;
}

function doStuff(data) {
    console.log(data);
}

zodiacData();