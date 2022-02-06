const toggleButton = document.querySelector('.site-navigation__toggler');
const siteNavigation = document.querySelector('.site-navigation__list');
toggleButton.children[0].classList.remove('site-navigation__toggler--nojs');
siteNavigation.classList.remove('site-navigation__list--no-js');
siteNavigation.classList.add('site-navigation__list--closed');

const menuButtonListener = () => {
  toggleButton.children[0].classList.toggle('site-navigation__toggler-opened');
  toggleButton.children[0].classList.toggle('site-navigation__toggler-closed');
  siteNavigation.classList.toggle('site-navigation__list--closed')
}

toggleButton.onclick = menuButtonListener;
