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