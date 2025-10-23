let images = [
  "img1.jpg",
  "img2.jpg",
  "img3.jpg"
];

let index = 0;
document.getElementById("slider").src = images[index];

function next(){
  index++;
  if(index == images.length) index = 0;
  document.getElementById("slider").src = images[index];
}

function prev(){
  index--;
  if(index < 0) index = images.length - 1;
  document.getElementById("slider").src = images[index];
}
