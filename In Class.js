const images = document.querySelectorAll("img");
setInterval(function(){
console.log("I run every 2 seconds indefinitely");
}, 2000)

let i = 0;
images[i].style.display = 'block';
const images = document.querySelectorAll("img"); 

let i = 0;

setInterval(function(){
images[i].style.display = 'block';
i++;
}, 2000);

const images = document.querySelectorAll("img"); 

let i = 0;

setInterval(function(){

images.forEach( (img, i) => {
img.style.display = 'none';
})

images[i].style.display = 'block';
i++;

}, 2000);

const images = document.querySelectorAll("img"); 

let i = 0;

setInterval(function(){ 

images.forEach( (img, i) => {
img.style.display = 'none';
})

if( i == images.length) {
i = 0; 
}

images[i].style.display = 'block';

i++;

}, 2000);

const images = document.querySelectorAll("img"); 

let i = 0;

setInterval(function(){ 
// get rid of everything in here
i++;

}, 2000);

setInterval(function(){ 

if(i == 0) {
images[i].style.display = 'block';
}

i++;

}, 2000);

setInterval(function(){ 

if(i == 0) {
images[i].style.display = 'block';
} else {
images[i - 1].style.display = 'none';
images[i].style.display = 'block';
}

i++;

}, 2000);

setInterval(function(){ 

if(i == 0) {
images[i].style.display = 'block';
} else if(i == images.length ) {
images[i - 1].style.display = 'none';
images[0].style.display = 'block';
i = 0;
} else {
images[i - 1].style.display = 'none';
images[i].style.display = 'block';
}

i++;

}, 2000);
