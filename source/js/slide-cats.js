const rangeInput = document.getElementById('sliderInput');
const fatCatImg = document.getElementById('fatCat');
const catBefore = document.getElementById('catBefore');
const catAfter = document.getElementById('catAfter');

const slideCats = () => {
  const sliderPos = rangeInput.value;
  fatCatImg.style.width = `${sliderPos}%`;
}

rangeInput.onchange = slideCats;

catBefore.onclick = () => {
  rangeInput.value = 0;
  fatCatImg.style.width = '0%';
}

catAfter.onclick = () => {
  rangeInput.value = 100;
  fatCatImg.style.width = '100%';
}
