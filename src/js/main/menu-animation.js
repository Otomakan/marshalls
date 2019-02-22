class Menu  {
  constructor(args) {
    this.burger = document.querySelector('.burger');
    this.menu = document.querySelector('.menu');
    this.menuList = document.querySelector('.menu__list');
    this.brand = document.querySelector('.menu__brand');
    this.menuItems = document.querySelectorAll('.menu__item');
    this.logo = document.querySelector('.menu-logo')
    this.active = false;
    this.toggleMenu = this.toggleMenu.bind(this)
    this.bindActions = this.bindActions.bind(this)
    this.init = this.init.bind(this)
  }

   toggleMenu() {
      if (!this.active) {
        this.menu.classList.add('menu--active');
        this.menuList.classList.add('menu__list--active');
        this.brand.classList.add('menu__brand--active');
        this.burger.classList.add('burger--close');
        this.logo.classList.add('menu-logo--active')
        for (var i = 0, ii = this.menuItems.length; i < ii; i++) {
          this.menuItems[i].classList.add('menu__item--active');
        }
        
        this.active = true;
      } else {
        this.menu.classList.remove('menu--active');
        this.menuList.classList.remove('menu__list--active');
        this.brand.classList.remove('menu__brand--active');
        this.burger.classList.remove('burger--close'); 
        this.logo.classList.remove('menu-logo--active')
        for (var i = 0, ii = this.menuItems.length; i < ii; i++) {
          this.menuItems[i].classList.remove('menu__item--active');
        }
        
        this.active = false;
      }
    };
    bindActions(){
      this.burger.addEventListener('click', this.toggleMenu, false);
      this.brand.addEventListener('click',this.toggleMenu, false);
       for (var i = 0, ii = this.menuItems.length; i < ii; i++) {
          this.menuItems[i].addEventListener('click',this.toggleMenu, false);
        }
    };
    
    init () {
      this.bindActions();
    };

}