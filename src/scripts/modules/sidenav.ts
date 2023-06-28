import { Component } from '@verndale/core';

class Sidenav extends Component {
  setupDefaults() {
    this.dom = {
      mobileNavBtn: this.el.querySelector('.sidenav__mobile-menu-trigger') as HTMLElement
    };
  }

  addListeners() {
    (this.dom.mobileNavBtn as HTMLElement).addEventListener('click', this.handleClick.bind(this));
  }

  handleClick() {
    this.el.classList.toggle('is-mobile-nav-active');
  }
}

export default Sidenav;
