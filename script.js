//values
var deviation=500;



//init
window.onload = function(){
  window.document.body.onload = init;
};

function init(){
  dragElement(document.getElementById("cd"));
  alert(window.innerHeight);
  document.getElementById('middle').style.height=(window.innerHeight-172)+"px";
}


var previousEl;

//footer
function profile(p){

  if (previousEl) {
    previousEl.className = "";
    document.getElementById(previousEl.id+"Prof").classList.remove('active');
  }
  previousEl = document.getElementById(p);
  previousEl.className = "selected";



  document.getElementById(p+"Prof").classList.add('active');
  alert(document.getElementById('footer').offsetHeight);
  document.getElementById('middle').style.paddingBottom = document.getElementById('footer').offsetHeight+"px";
  window.scrollTo(0,document.body.scrollHeight);
  // document.getElementById('footer').clientHeight+"px";
}

function down(){
  document.getElementById('jonasProf').classList.remove('active');
  document.getElementById('olaProf').classList.remove('active');
  document.getElementById('chrisProf').classList.remove('active');
  document.getElementById('oneProf').classList.remove('active');
  document.getElementById('middle').style.paddingBottom = document.getElementById('footer').offsetHeight+"px";
}








//Make the DIV element draggagle:
function dragElement(elmnt) {


  var pos1 = 0, pos2 = 0;
  document.getElementById('cover').onmousedown = dragMouseDown;


  function dragMouseDown(e) {
    document.getElementById('leftLink').style.visibility='visible';
    document.getElementById('rightLink').style.visibility='visible';
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos2 = e.clientX;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }


  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos2 - e.clientX;
    pos2 = e.clientX;
    // set the element's new position:
    elmnt.style.left = Math.max(Math.min((elmnt.offsetLeft - pos1),deviation),-1*deviation) + "px";

    if(elmnt.offsetLeft>0){
      document.getElementById('demoSongs').style.visibility='hidden';
      document.getElementById('order').style.visibility='visible';
    } else {
      document.getElementById('order').style.visibility='hidden';
      document.getElementById('demoSongs').style.visibility='visible';
    }

    if(Math.abs(elmnt.offsetLeft)==deviation){
      if(pos1*pos1>25){
        if(elmnt.offsetLeft==deviation){
          document.getElementById('rightLink').style.visibility='hidden';

        } else {
          document.getElementById('leftLink').style.visibility='hidden';
        }
        var audio = new Audio('click2.mp3');
        audio.play();
        closeDragElement();
      }
    }
  }


  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
