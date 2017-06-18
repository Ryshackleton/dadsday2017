// function([string1, string2],target id,[color1,color2])    
 consoleText([
   'Hi Dad',
   "It's Ryan",
   "Ummmm, your father's day card got mailed a bit late this year",
   "So here's a homemade e-card to tide you over"
], 'text',['tomato','rebeccapurple','lightblue']);

document.getElementById('container').style.visibility = 'hidden';

function consoleText(words, id, colors) {

  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function() {
    
    if (letterCount === 0 && waiting === false) { 
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
//        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
  
  window.setInterval(function() {
    
    if( words.length === 0 ){
      document.getElementById('container').style.visibility = 'visible';
      con.className = 'console-underscore hidden'
    }
    else
      {
          if (visible === true) {
            con.className = 'console-underscore hidden'
            visible = false;

          } else {
            con.className = 'console-underscore'

            visible = true;
          }
      }
    
  }, 400)
}

$(document).ready(function(){
  $("#boxB").on("click", function(){
    $("#boxB").fadeOut(400);
    $("#container").addClass("blah")
  })
  $("#turn").on("click", function(){
   $("#boxB").fadeIn(400)
  })
$("#flap").on("click", function(){
  $("#flap").toggleClass("open");
  $("#boxA").toggleClass("shown");
})  
$("#sub").on("click", function(){

    $("#sub").toggleClass("active");
})
})