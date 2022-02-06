(function () {
const TABLET_WIDTH = 767;
const DESKTOP_WIDTH = 1440;
const SMALL_PIN = {width: 62, height: 53};
const BIG_PIN = {width: 124, height: 106};

function debounce(f, ms) {
let timer = null;

return function (cb) {
const onComplete = function () {
  f.apply(this, cb);
  timer = null;
};
if (timer) {
  clearTimeout(timer);
}
timer = setTimeout(onComplete, ms);
};
}

window.initialize = function() {
const viewport = document.documentElement.clientWidth || window.innerWidth;
const mapCenter = viewport < DESKTOP_WIDTH ? {lat: 59.938882, lng: 30.32323} : {lat: 59.939065, lng: 30.319335};
const pinCenter = viewport < TABLET_WIDTH ? {lat: 59.93871, lng: 30.32323} : {lat: 59.93871, lng: 30.32299};
const pinSize = viewport < TABLET_WIDTH ? SMALL_PIN : BIG_PIN;


const map = new google.maps.Map(document.querySelector('.invetation-partners__map'), {
zoom: 17,
center: mapCenter
});

const image = {
url: "img/map-marker.svg",
scaledSize: pinSize
};

const beachMarker = new google.maps.Marker({
position: pinCenter,
map: map,
optimized: true,
icon: image
});
};

window.addEventListener("resize", debounce(initialize, 1000));
})();
