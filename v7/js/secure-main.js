/* disable Ctrl X C V S U cmdKeyBoard */
  $(document).keydown(function(e){
    e.preventDefault();
  });
  
$(document).keydown(function(e){
  var key = e.charCode || e.keyCode;
  if (key == 13) { 
    // enter key do nothing
  } else {
    e.preventDefault();
  }	
});


/* disableF12KeyKeyBoard */
$(document).keydown(function (event) {
    if (event.keyCode == 123) { // Prevent F12
        return false;
    } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) { // Prevent Ctrl+Shift+I        
        return false;
    }
});


/* disableRightKeyofMouse */
function clickIE() {if (document.all) {return false;}}
function clickNS(e) {if 
(document.layers||(document.getElementById&&!document.all)) {
if (e.which==2||e.which==3) {return false;}}}
if (document.layers) 
{document.captureEvents(Event.MOUSEDOWN);document.onmousedown=clickNS;}
else{document.onmouseup=clickNS;document.oncontextmenu=clickIE;}
document.oncontextmenu=function(){return false;};