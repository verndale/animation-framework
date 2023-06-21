import { Component } from '@verndale/core';

class SideNav extends Component {
  setupDefaults() {
    this.dom = {
      navItems: this.el.querySelectorAll('.navigation__item'),
      navMenu: this.el.querySelector('.navigation__menu') as HTMLElement,
      navClose: this.el.querySelector('.sidenav__menu-close') as HTMLElement
    };
  }

  addListeners() {
    (this.dom.navItems as NodeList).forEach(navItem => {
      navItem.addEventListener('click', this.handleClick.bind(this));
    });
    (this.dom.navClose as HTMLElement).addEventListener('click', this.handleClose.bind(this));
  }

  handleClose() {
    const menu = this.dom.navMenu as HTMLElement;
    menu.removeAttribute('show');
  }

  handleClick() {
    const menu = this.dom.navMenu as HTMLElement;
    menu.setAttribute('show', '');
  }
}

export default SideNav;
