var images = [
  "./images/landscape/1.jpg",
  "./images/landscape/2.jpg",
  "./images/landscape/3.jpg",
  "./images/landscape/4.jpg",
  "./images/landscape/5.jpg",
  "./images/landscape/6.jpg",
  "./images/landscape/7.jpg"
]

window.addEventListener('load', () => {
  console.log('hey');

  drawImages(images);
});

function drawImages(images) {
  for(i in images) {
    var img = document.createElement('img');
    img.src = images[i];
    img.addEventListener('load', (e) => { console.log(e.target.src); });
    document.body.appendChild(img);
  }
}
