import { Component } from '@verndale/core';

class Navigation extends Component {
  setupDefaults() {
    this.dom = {
      navItems: this.el.querySelectorAll('.navigation__item'),
      navMenus: this.el.querySelectorAll('.navigation__menu')
    };
  }

  addListeners() {
    (this.dom.navItems as NodeList).forEach(navItem => {
      navItem.addEventListener('click', this.handleClick.bind(this));
    });
  }

  handleClick(e: Event) {
    const currentMenu = (e.currentTarget as HTMLElement)?.querySelector('.navigation__menu');
    const isVisible = currentMenu?.getAttribute('show');
    if (isVisible !== null && isVisible !== undefined) {
      currentMenu?.removeAttribute('show');
    } else {
      currentMenu?.setAttribute('show', '');
      Array.from(this.dom.navMenus as NodeListOf<HTMLElement>)?.forEach(menu => {
        if (menu !== currentMenu) {
          menu.removeAttribute('show');
        }
      });
    }
  }
}

export default Navigation;
