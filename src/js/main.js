console.log('hey it looks like it worked! Happy Hacking!')
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
    };
    
    init () {
      this.bindActions();
    };

}
   
const mailToLink =()=>{
  let toMail = document.getElementsByClassName('mail-it-to')
  toMail.forEach( (el) => {
    el.onclick = (e)=>{
      copyText.select();

      /* Copy the text inside the text field */
      document.execCommand("copy");
      
  alert("Copied the text: " + copyText.value);
    }
  });
}

ready(function(){
  window.addEventListener('load', AOS.refresh)
    //Mimics the bootstrap JS to open navBar
    // Barba.Pjax.start();
    AOS.init({duration: 1200})
    document.getElementById('home-second-section-test').style.display ="flex"
    // 3 seconds timer
    setTimeout(()=>{
      // let logoContainer = document.getElementsByClassName('masked-logo-container-animation')[0]
       // document.getElementById('home-second-section-test').style.display ="block"
      // logoContainer.style.transition = "0.4s"
      // logoContainer.style.height = "100vh"
   
      setTimeout(()=>{
      document.getElementsByTagName("BODY")[0].style.animation= 'colored-fill 25s infinite;'
             document.getElementById('loading-mask-container2').parentNode.removeChild(document.getElementById('loading-mask-container2'))
     },300)

      }
      ,3000)


    setTimeout(()=>{
      // let rightSection = document.getElementsByClassName('right-first-section-test')[0]
      // rightSection.style.transition = "1s"
      // rightSection.style.background = "black"
      let maskedLogo = document.getElementById('masked-logo')
      maskedLogo.style.transition="1s"
      maskedLogo.style.opacity = "0"
      
    },2000)


    // Code for the menu
    const menu = new Menu
    menu.init();
  
})

//Thanks to http://youmightnotneedjquery.com/#ready
function ready(fn) {
  if (document.readyState != 'loading') {
    fn();
  } else if (document.addEventListener) {
    document.addEventListener('DOMContentLoaded', fn);
  } else {
    document.attachEvent('onreadystatechange', function() {
      if (document.readyState != 'loading')
        fn();
    });
  }
}


    

