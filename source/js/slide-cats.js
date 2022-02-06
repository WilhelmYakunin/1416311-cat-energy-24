const rangeInput = document.querySelector('.example__scrollbar--input');
const fatCatImg = document.querySelector('.example__fat-cat');
const catBefore = document.querySelector('.example__scrollbar-before');
const catAfter = document.querySelector('.example__scrollbar-after');
const inputTrack = document.getElementsByClassName('example__scrollbar--input')[0];

const slideCats = () => {

  const sliderPos = rangeInput.value;
  fatCatImg.style.width = `${sliderPos}%`;

  const getGradient = () => {
    if (sliderPos >= 50) {

      const green = (100 - sliderPos);

      return `linear-gradient(
        to left,
        #ffffff 0%,
        #ffffff ${100 - sliderPos}%,
        #68b738 ${green}%,
        #68b738 100%
        )`;
    } else if (sliderPos < 50) {

      const white = (100 - sliderPos);

      return `linear-gradient(
        to left,
        #ffffff 0%,
        #ffffff ${white}%,
        #68b738 ${100 - sliderPos}%,
        #68b738 100%
        )`;
    } return ``
  }

  inputTrack.style.setProperty("--color", getGradient());
}

rangeInput.oninput = slideCats;

catBefore.onclick = () => {
  rangeInput.value = 0;
  fatCatImg.style.width = '0%';
  inputTrack.style.setProperty("--color", `linear-gradient(
    to left,
    #ffffff 0%,
    #ffffff 100%,
    #68b738 0%,
    #68b738 0%
    )`);
}

catAfter.onclick = () => {
  rangeInput.value = 100;
  fatCatImg.style.width = '100%';
  inputTrack.style.setProperty("--color", `linear-gradient(
    to left,
    #ffffff 0%,
    #ffffff 0%,
    #68b738 0%,
    #68b738 100%
    )`);
}
