
ready(()=>{
	mainFunction()
	Barba.Dispatcher.on("newPageReady",()=>{
		console.log('calling again')
		mainFunction()
    })
   
})

  // document.addEventListener('barbaStart',()=>{
  //     console.log('please hear me!')
  //     console.log('you have been heard')
    	
  //   })
const mainFunction = ()=>{
	loadImage()
	window.addEventListener("scroll",(scroll_pos)=>{
		const stickylogo=  document.getElementsByClassName('about-random-piece')[0]
		const lastY = window.scrollY;
		stickylogo.style.top = lastY+'px'
	})
}

const loadImage = ()=> {
    var img = new Image(),
     x = document.getElementById("about-profile-picture");

    img.onload = function() {
        x.src = img.src;
    };

    img.src = "/assets/images/austin-profile-picture.jpg"
}
	
	

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
if(typeof Barba !== 'undefined'){
	console.log('not defined')
	// mainFunction()
ready(()=>{
	mainFunction()
	Barba.Dispatcher.on("newPageReady",()=>{
		console.log('calling again')
		mainFunction()
    })
   
})
}