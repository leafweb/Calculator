// theme
var color = localStorage.getItem('color');
if (color == undefined) {
   color = 'hsl(200,100%,50%)'
   localStorage.setItem('color', color)
}
var mode = eval(localStorage.getItem('darkMode'));
if (mode == undefined) {
   mode = false
   localStorage.setItem('darkMode', mode);
}
var M = Mushroom(color, mode);
// DarkMode
function DarkMode() {
   var mode = eval(localStorage.getItem('darkMode'));
   var color = localStorage.getItem('color');
   M = Mushroom(color, (!mode) ? true : false);
   localStorage.setItem('darkMode', (!mode) ? true : false);
   statusBar();
}
// color
function Color(x) {
   var mode = eval(localStorage.getItem('darkMode'));
   M = Mushroom(x, mode);
   localStorage.setItem('color', x);
   statusBar();
}
//menu
function menu(e) {
   var [m, mb] = [document.querySelector('menu'), document.querySelector('menuBackdrob')]
   e.children[0].classList.toggle('on');
   m.classList.toggle('on');
   mb.classList.toggle('on');
   mb.onclick = () => {
      e.children[0].classList.toggle('on');
      m.classList.toggle('on');
      mb.classList.toggle('on');
   }
}