const BarbaTransitions = ()=>{

var FadeTransition = Barba.BaseTransition.extend({
    start: function () {
        Promise
            .all([this.newContainerLoading, this.slideOut()])
            .then(this.slideIn.bind(this));

    },

    slideOut:  function () {
        const oldWrap = this.oldContainer;
        const s =  oldWrap.style
        // oldWrap.style.visibility="visible"
        // oldWrap.style.opacity="0"
        s.transition="0.7s"
        // oldWrap.style.opacity = "0"
        s.transform = "translateX(120vw)"

        return new Promise(function (resolve, reject) {
            window.setTimeout(function () {
                resolve();
            }, 700);
        });
    },
    slideIn:  function () {
        var newWrap = this.newContainer;
        const s = newWrap.style
        const that = this
        const hide = new Promise((resolve, reject) => {
          s.transition="0s"
          s.transform = "translateX(-120vw)"
          window.scrollTo(0,0)
          s.visibility="visible"
          s.opacity="0"
          resolve()
        });
        hide.then(()=>{

          newWrap.style.transition="1s"
          s.transform = "translateX(0)"
          newWrap.style.opacity = "1"
         
        })
        this.done()

        // const finished =  new Promise(function (resolve, reject) {
        //     window.setTimeout(function () {
        //        // newWrap.classList.toggle('fade-in');
        //         newWrap.style.opacity="1"
        //     }, 1000);
        // });
        // finished.then(()=>{this.done()}).catch(()=>{console.log('there was a pb')})
      
    }
});

Barba.Pjax.getTransition = function () {
    return FadeTransition;
};
}
console.log('hey it looks like it worked! Happy Hacking!')

   
const mailToLink =()=>{
  let toMail = document.getElementsByClassName('mail-it-to')
  for(let i = 0; i < toMail.length; i++){
    console.log('found')
    toMail[i].onclick = (e)=>{
      console.log(e)
      const t = e.target
      // e.target.select();
       var range = document.createRange();
  range.selectNode(t);
  window.getSelection().addRange(range);

  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Copying text command was ' + msg);
  } catch (err) {
    console.log('Oops, unable to copy');
  }


      /* Copy the text inside the text field */
      // document.execCommand("copy");

      // alert("Copied the text: " + copyText.value);
      }
  }
}

ready(function(){
  window.addEventListener('load', AOS.refresh)
    //Mimics the bootstrap JS to open navBar

  var barbaStartEvent = document.createEvent('Event');
    
barbaStartEvent.initEvent('barbaStart', true, true);
    document.addEventListener('barbaStart',()=>{
      // console.log('you have been heard')
    })
    const barbaPromise = new Promise((res, rej)=>{
           Barba.Pjax.start()
           res()
     } )
    barbaPromise.then(()=>{
      document.dispatchEvent(barbaStartEvent)
    })

    BarbaTransitions()
    AOS.init({duration: 1200})
    // Refreshing the AOS at every transition
    Barba.Dispatcher.on("transitionCompleted", ()=> {
      AOS.init({duration: 1200})
    }); 
    Barba.Dispatcher.on("initStateChange",()=>{

    })
   

    mailToLink()
    // Code for the menu
    const menu = new Menu


  if (window.performance && window.performance.navigation.type == window.performance.navigation.TYPE_BACK_FORWARD) {
    // alert('Got here using the browser "Back" or "Forward" button.');
    console.log('lfdsk')
  }

  else{
    // The loading mask animation 
    console.log('Got here directly')
    window.setTimeout(()=>{
        document.getElementsByTagName("BODY")[0].style.background= '#FF0072'
        
        document.getElementById('loading-mask-container2').parentNode.removeChild(document.getElementById('loading-mask-container2'))
    },3200)
    window.setTimeout(()=>{
      document.getElementById('barba-wrapper').style.display = 'block'
     document.getElementById('barba-wrapper').style.display = 'block'
     document.getElementsByTagName('footer')[0].style.display = 'block'
      let maskedLogo = document.getElementById('masked-logo')
      maskedLogo.style.transition="1s"
      maskedLogo.style.opacity = "0"
      console.log(maskedLogo)
    },3100) 
  }


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