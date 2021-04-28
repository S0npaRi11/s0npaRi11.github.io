const throttle = (fn, wait) => {
    let time = Date.now();
    return function () {
        if(time + wait - Date.now() < 0){
            fn();
            time = Date.now();
        }
    }
}

const parallax = () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.parallax')
    
   if(parallax){
    const coords = ( scrolled * 0.7 ) + 'px'
    
    parallax.style.transform = `translateY(${coords})`
    // parallax.style.filter = `blur(${coords})`
   }
}

 window.addEventListener('scroll',throttle(parallax, 14))