var images = [
  "./images/landscape/1.jpg",
  "./images/landscape/2.jpg",
  "./images/landscape/3.jpg",
  "./images/landscape/4.jpg",
  "./images/landscape/5.jpg",
  "./images/landscape/6.jpg",
  "./images/landscape/7.jpg"
];

var imagesMeasured = 0;

var aspectRatios = {
  landscape: Array(),
  portrait: Array()
}

window.addEventListener('load', () => {

  drawImages(images);
});

function drawImages(images) {

  for(let i in images) {
    var img = document.createElement('img');
    img.src = images[i];
    img.addEventListener('load', (e) => {
      var precision = 3;
      var bounds = e.target.getBoundingClientRect();
      if(bounds.width >= bounds.height) {
        var ratio = Number.parseFloat(bounds.width / bounds.height).toPrecision(precision) + " : 1";
        aspectRatios.landscape.push(ratio);
      } else {
        var ratio = "1 : " + Number.parseFloat(bounds.height / bounds.width).toPrecision(precision);
        aspectRatios.portrait.push(ratio);
      }

      imagesMeasured++;
      continueIfAllImagesAreMeasured();
    });

    var imageHolder = document.querySelector('.image-holder');
    imageHolder.appendChild(img);
  }
}

function continueIfAllImagesAreMeasured() {
  if(imagesMeasured === images.length) {
    var suggested = suggestAspectRatio();
    console.log(suggested);
  }
}

function suggestAspectRatio() {
  var ratioToFavor;
  if(aspectRatios.landscape.length >= aspectRatios.portrait.length) {
    console.log("More images are landscape...");
    ratioToFavor = aspectRatios.landscape;
  } else {
    console.log("More images are portrait...");
    ratioToFavor = aspectRatios.portrait;
  }
  return arrayMode(ratioToFavor);
}

function arrayMode(arr) {
  var freqs = {};
  for(let i in arr) {
    freqs[arr[i]] ? freqs[arr[i]]++ : freqs[arr[i]] = 1;
  }

  var modes = [];
  var max = 0;
  for(let f in freqs) {
    if(freqs.hasOwnProperty(f) && freqs[f] > max) { max = freqs[f]; }
  }

  for(let f in freqs) {
    if(freqs.hasOwnProperty(f) && freqs[f] === max) { modes.push(f); }
  }

  return modes;
}
