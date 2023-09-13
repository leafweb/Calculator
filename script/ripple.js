var rippleContainer = document.querySelectorAll('.m-ripple,button,.btn');
rippleContainer.forEach(a => {
   a.classList.add('m-rippleContainer');
   a.ontouchstart = (e) => {
      for (var i = 0; i < event.touches.length; i++) {
         var touch = event.touches[i];
         var rect = a.getBoundingClientRect();
         var x = (touch.clientX - rect.left) + 'px';
         var y = (touch.clientY - rect.top) + 'px';
         var ripple = document.createElement('span');
         ripple.classList.add('m-rippleEffect');
         ripple.style.top = y;
         ripple.style.left = x;
         var animation = ripple.animate(
            [
               {
                  opacity: '0.3',
                  width: '20%'
               },
               {
                  opacity: '0',
                  width: '400%'
               }
            ],
            {
               fill: "both",
               duration: 1500,
            }
         )
         animation.play()
         animation.onfinish = () => {
            ripple.remove();
         };
      }
      a.appendChild(ripple);
   }
});
var rippleLabel = document.querySelectorAll('.g-ripple-label');
rippleLabel.forEach(a => {
   var b = a.querySelector('.g-ripple');
   b.classList.add('m-rippleContainer');
   a.ontouchstart = (e) => {
      for (var i = 0; i < event.touches.length; i++) {
         var touch = event.touches[i];
         var rect = b.getBoundingClientRect();
         var x = (touch.clientX - rect.left) + 'px';
         var y = (touch.clientY - rect.top) + 'px';
         var ripple = document.createElement('span');
         ripple.classList.add('m-rippleEffect');
         ripple.style.top = y;
         ripple.style.left = x;
         var animation = ripple.animate(
            [
               {
                  opacity: '0.3',
                  width: '20%'
               },
               {
                  opacity: '0',
                  width: '400%'
               }
            ],
            {
               fill: "both",
               duration: 1000,
            }
         )
         animation.play()
         animation.onfinish = () => {
            ripple.remove();
         };
      }
      b.appendChild(ripple);
   }
});