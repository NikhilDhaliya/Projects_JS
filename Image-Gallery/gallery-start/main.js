const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const fileNames = ["pic1.jpg","pic2.jpg","pic3.jpg","pic4.jpg","pic5.jpg","pic1.jpg"];

/* Declaring the alternative text for each image file */

const alternativeText = {
    "pic1.jpg" : "Eye",
    "pic2.jpg" : "cloud",
    "pic3.jpg" : "flowers",
    "pic4.jpg" : "ancient",
    "pic5.jpg" : "butterfly",
}

/* Looping through images */

for (let img of fileNames) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${img}`);
    newImage.setAttribute('alt', alternativeText[img]);
    thumbBar.appendChild(newImage);
    thumbBar.appendChild(document.createElement('br'));
}

/* Wiring up the Darken/Lighten button */

btn.addEventListener("click",darken)

function darken(){
    if(overlay.style.opacity === "0.1"){
        overlay.style.opacity = "0.7";
    }
    else{
        overlay.style.opacity = "0.1";
    }
    
}