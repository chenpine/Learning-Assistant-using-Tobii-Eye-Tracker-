  
function selectElement(evt) 
{
      document.getElementById("click").play();
      clickcount++;
      selectedElement = evt.target;
      oriX=selectedElement.getAttribute('x');
      oriY=selectedElement.getAttribute('y');
          
      currentX = (evt.clientX/w);

      currentY = (evt.clientY/h);

      currentMatrix = selectedElement.getAttributeNS(null, "transform").slice(7,-1).split(' ');
    
      selectedElement.setAttribute('opacity', 0.8);

      for(var i=0; i<currentMatrix.length; i++) {

      currentMatrix[i] = parseFloat(currentMatrix[i]);
        }
}

function moveElement(evt) 
{
  if(currentMatrix)
  {
      var dx = evt.clientX/w - currentX;

      var dy = evt.clientY/h - currentY;

      currentMatrix[4] += dx;

      currentMatrix[5] += dy;

      selectedElement.setAttributeNS(null, "transform", "matrix(" + currentMatrix.join(' ') + ")");

      currentX = evt.clientX/w;

      currentY = evt.clientY/h;
  }



}

function deselectElement(evt)
{
  document.getElementById("click").play();
  if(selectedElement != 0)
  {
    selectedElement.setAttribute('opacity', 1);
    selectedElement.removeAttributeNS(null, "onmousemove");
        
    var transX=Math.floor(currentMatrix[4]);
    var transY=Math.floor(currentMatrix[5]);
    var nowX= transX+Math.floor(oriX);
    var nowY= transY+Math.floor(oriY);
     
    if(nowX<morningXr && morningXl<nowX && morningYl<nowY && nowY<morningYr)
      {
        //insertReport(userid, taskNum, 'action', "Drag "+selectedElement.id+" into part_box_1");
        judge=judge+1;
        if (selectedElement.id=="num_part_1") {right1=1;}
        else{right1=0;}
        console.log(selectedElement.id,right1,right2,right3)
        
        currentMatrix[4] = 0;
        currentMatrix[5] = 0;
        newMatrix = "matrix(" + currentMatrix.join(' ') + ")";
        selectedElement.setAttributeNS(null, "transform", newMatrix);
        selectedElement.setAttributeNS(null,'x', morningX);//只是基于原定位置set 为 0， 鼠标拖拽位置不算；
        selectedElement.setAttributeNS(null,'y', morningY);
      }
    else if(nowX<afternoonXr && afternoonXl<nowX && afternoonYl<nowY && nowY<afternoonYr)
      {
      //insertReport(userid, taskNum, 'action', "Drag "+selectedElement.id+" into part_box_2");
      judge=judge+1;
      if (selectedElement.id=="num_part_2") {right2=1;}
      else{right2=0;}
      console.log(selectedElement.id,right1,right2,right3)
      currentMatrix[4] = 0;
      currentMatrix[5] = 0;
      newMatrix = "matrix(" + currentMatrix.join(' ') + ")";
      selectedElement.setAttributeNS(null, "transform", newMatrix);
      selectedElement.setAttributeNS(null,'x', afternoonX);//只是基于原定位置set 为 0， 鼠标拖拽位置不算；
      selectedElement.setAttributeNS(null,'y', afternoonY);   
      }
    else if(nowX<allXr && allXl<nowX && allYl<nowY && nowY<allYr)
      {
      //insertReport(userid, taskNum, 'action', "Drag "+selectedElement.id+" into whole_box");
      judge=judge+1;
      if (selectedElement.id=="num_whole") {right3=1;}
      else{right3=0;}
      console.log(selectedElement.id,right1,right2,right3)
      currentMatrix[4] = 0;
      currentMatrix[5] = 0;
      newMatrix = "matrix(" + currentMatrix.join(' ') + ")";
      selectedElement.setAttributeNS(null, "transform", newMatrix);
      selectedElement.setAttributeNS(null,'x', allX);//只是基于原定位置set 为 0， 鼠标拖拽位置不算；
      selectedElement.setAttributeNS(null,'y', allY); 
      }
    else
      {  
      //insertReport(userid, taskNum, 'action', "Drag "+selectedElement.id+" into none");
      currentMatrix[4] = 0;
      currentMatrix[5] = 0;
      newMatrix = "matrix(" + currentMatrix.join(' ') + ")";
      selectedElement.setAttributeNS(null, "transform", newMatrix);
      selectedElement.setAttributeNS(null,'x', oriX);
      selectedElement.setAttributeNS(null,'y', oriY);
      //$("#cloud").show();$("#remind0").show();
      }

    if(judge>=3){$("#check").show();}

  selectedElement = 0;
  clickcount=0;
  }
}

function blinking(elem) 
{
    var tt=setInterval(function() 
    {
        if (elem.css('visibility') == 'hidden') 
        {
            elem.css('visibility', 'visible');
        } 
        else 
        {
            elem.css('visibility', 'hidden');
        }    
    }, 500);  
  setTimeout(function() { clearInterval(tt); }, 2010);
  elem.css('visibility', 'visible');
};


function pauseOtherAudios()
{
  var handler;    
  document.addEventListener('play', handler=function(e)
  {
    var audios = document.getElementsByTagName('audio');
    for(var i = 0, len = audios.length; i < len;i++)
    {
      if(audios[i] != e.target)
      {
          audios[i].pause();
      }
    }
  }, true);
  setTimeout(function(){document.removeEventListener('play',handler, true);},50);
};

function menu()
{
  window.location.href="http://va.tech.purdue.edu/comps/menu.php";
}
