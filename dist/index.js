 ready(()=>{
    mainFunction()
})

 const mainFunction = ()=>{
    document.getElementById('home-second-section-test').style.display ="flex"
    // 3 seconds timer
    setTimeout(()=>{
       let rightSection = document.getElementsByClassName('right-first-section-test')[0]
      rightSection.style.transition = "1s"
      // rightSection.style.background = "black"
      // let logoContainer = document.getElementsByClassName('masked-logo-container-animation')[0]
       // document.getElementById('home-second-section-test').style.display ="block"
      // logoContainer.style.transition = "0.4s"
      // logoContainer.style.height = "100vh"
  },3100 )
 }

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