
let searchTerm = "cats";

let favesArray = [""];

const chicagolink =`https://api.artic.edu/api/v1/artworks/search?q=${searchTerm}&fields=id,artist_display,date_end,title,image_id&limit=20`;

fetch(chicagolink)
.then(response => response.json())
.then(data => {



iiifAPI = data.data[4].image_id;





const IIIF = `https://www.artic.edu/iiif/2/${iiifAPI}/full/843,/0/default.jpg`;

$('.piccy').attr("src", IIIF);

$('.btn').on("click", function() {

    favesArray.push(IIIF);


    localStorage.setItem("faves", JSON.stringify(favesArray));


});


});




//console.log(faveData);

let criteria = "artgallery";


const gallerylink =`https://api.artic.edu/api/v1/artworks/search?q=${criteria}&fields=id,artist_display,date_end,title,image_id&limit=20`;

fetch(gallerylink)
.then(response => response.json())
.then(data => {



iiifAPI = data.data[5].image_id;


const IIIF = `https://www.artic.edu/iiif/2/${iiifAPI}/full/843,/0/default.jpg`;

//console.log(IIIF);



});

let selectedArtworkId = "	151363";


const Idlink = `https://api.artic.edu/api/v1/artworks/${selectedArtworkId}`;

fetch(Idlink)
.then(response => response.json())
.then(data => {

    console.log(data);


});


let faveData = [];

faveData = JSON.parse(localStorage.getItem("faves")) || [];

console.log(faveData);

faveData.forEach(element => {
    console.log(element);
});
