const toggleButton = document.getElementById('toggleButton');

const menuButtonListener = () => {
  const siteNavigation = document.getElementById('siteMenu');

  toggleButton.children[0].classList.toggle('page-header__site-navigation-button--opened');
  toggleButton.children[0].classList.toggle('page-header__site-navigation-button--closed');
  siteNavigation.classList.toggle('site-navigation__list--closed')
}

toggleButton.onclick = menuButtonListener;
