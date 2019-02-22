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


    

