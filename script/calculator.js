let input = document.querySelector('#input');
let elm = document.querySelector('#history');
let history = [];
if (localStorage.getItem('history')) {
   history = JSON.parse(localStorage.getItem('history'));
   for (var i = 0; i < history.length; i++) {
      elm.innerHTML += `<div>${history[(history.length-1)-i]}</div>`;
   }
}

function NUMBER(x) {
   var last = input.value[input.value.length - 1];
   if (input.value == 'SyntaxError' || input.value.includes(' = ')) {
      input.value = x;
   } else {
      if (last == ')') {
         input.value += '×' + x;
      } else {
         input.value += x;
      }
   }
   navigator.vibrate(2);
}
function BRACKET(x) {
   var last = input.value[input.value.length - 1];
   var a = '(+-×÷'
   if (x == '(') {
      if (input.value.includes(' = ')) {
         if (last !== undefined) {
            input.value = input.value.replace(' = ', '') + '×' + x;
         } else {
            input.value += input.value.replace(' = ', '') + x;
         }
      } else {
         
         if (last !== undefined) {
            input.value += '×' + x;
         } else {
            input.value += x;
         }
      }
   } else {
      input.value += x;
   }
   navigator.vibrate(2);
}
function MATH(x) {
   var last = input.value[input.value.length - 1];
   var a = 'πe√';
   var b = 'eπ√1234567890';
   if (input.value == 'SyntaxError') {
      input.value = x;
   } else {
      if (input.value.includes(' = ')) {
         if (a.includes(x) && b.includes(last)) {
            input.value = input.value.replace(' = ', '') + '×' + x;
         } else {
            input.value = input.value.replace(' = ', '') + x;
         }
      } else {
         if (a.includes(x) && b.includes(last)) {
            input.value += '×' + x;
         } else {
            input.value += x;
         }
      }
   }
   navigator.vibrate(2);
}
function CLEAR() {
   input.value = '';
   navigator.vibrate(2);
}
function BACKSPACE() {
   if (input.value.includes(' = ')) {
      input.value = '';
   } else {
      input.value = input.value.substr(0, input.value.length - 1);
   }
   navigator.vibrate(2);
}
function EQUAL() {
   if (input.value == '') {
      input.value = '';
   } else {
      if (input.value.includes(' = ')) {
         primary = input.value.replace(' = ', '');
      } else {
         try {
            var primary = input.value;
            // riplace
            var replace = [
               { '÷÷': 'NaN' },
               { '××': 'NaN' },
               { '×': '*' },
               { '÷': '/' },
               { '^': '**' },
               { '%': '*(0.01)' },
               { '√': 'Math.sqrt' },
               { 'sin': 'Math.sin' },
               { 'cos': 'Math.cos' },
               { 'tan': 'Math.tan' },
               { 'cot': '1 / Math.tan' },
               { 'log': 'Math.log10' },
               { 'In': 'Math.log' },
               { 'π': 'Math.PI' },
               { 'e': 'Math.E' },
               { '°': ' * (Math.PI / 180)' }
            ];
            for (x in replace) {
               var a = input.value = input.value.replaceAll(Object.keys(replace[x]), Object.values(replace[x]));
            }
            // bracket
            var count1 = count2 = 0;
            var b = ''
            for (var i = 0; i < a.length; i++) {
               if (a.charAt(i) == "(") {
                  count1++
               }
            }
            for (var i = 0; i < a.length; i++) {
               if (a.charAt(i) == ")") {
                  count2++
               }
            }
            for (var i = 0; i < count1 - count2; i++) {
               b += ')';
            }
            var c = a + b;
            // solution
            var solution = eval(c);
            if (Number.isInteger(solution)) {
               input.value = ' = ' + solution;
            } else {
               input.value = ' = ' + Number(solution.toFixed(10));
            }
            if (solution == 'Infinity') {
               input.value = ' = ∞';
            }
            // end
            var end = primary + b + input.value;
            HISTORY(end);
         } catch (error) {
            input.value = 'SyntaxError';
         }
      }
   }
   navigator.vibrate(2);
}
function HISTORY(x){
   history.push(x);
   if (history.length >= 30) { history.shift(); }
   localStorage.setItem('history', JSON.stringify(history));
   for (i in history) {
      var div = document.createElement('div');
      div.innerHTML = history[i];
   }
   elm.prepend(div);
   if (elm.childNodes.length >= 30) {
      elm.removeChild(elm.lastChild);
   }
}