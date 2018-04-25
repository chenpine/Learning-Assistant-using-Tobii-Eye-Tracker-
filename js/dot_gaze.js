var url = "ws://localhost:4649/Echo";
var output;
var cali_offset_X = 60;
var cali_offset_Y = 120;
var reso_4K_X = 3840;
var reso_4K_Y = 2160;
var dot_size = 100;

var avail_height = window.screen.availHeight;
var avail_width = window.screen.availWidth;

function init () {
  output = document.getElementById ("output");
  setInterval(function(){ doWebSocket (); }, 1000/3);
  console.log(window.screen.availHeight);
  console.log(window.screen.availWidth);
}

function clamp(num, min, max) {
  return num <= min ? min : num >= max ? max : num;
}


function gazeDiv(x_pos, y_pos) {

  var d = document.getElementById('gaze');
  d.style.position = "absolute";

  d.style.left = clamp(x_pos,dot_size/2,avail_width-dot_size*2/3)-cali_offset_X+'px';
  d.style.top = clamp(y_pos,dot_size/2,avail_height-dot_size/2)-cali_offset_Y+'px';

  var f = document.getElementById('words');
  f.innerHTML = "<span style=' position: relative; top: 100px; font-weight: 100%; font-size: 30px !important; color: black;'>X "+x_pos+" Y "+y_pos+"</span>";

  var a_img = document.getElementById('num_part_2');

  var qq1 = document.getElementById('Q1');
  var qq2 = document.getElementById('Q2');
  var qq3 = document.getElementById('Q3');
  var qq4 = document.getElementById('Q4');
  var qq5 = document.getElementById('Q5');
  var ii1 = document.getElementById('I1');
  var ii2 = document.getElementById('I2');
  var ii3 = document.getElementById('I3');

  var L1 = document.getElementById('1');
  var L2 = document.getElementById('2');
  var L3 = document.getElementById('3');
  var L4 = document.getElementById('4');
  var L5 = document.getElementById('5');
  var L6 = document.getElementById('6');
  var L8 = document.getElementById('8');
  var L24 = document.getElementById('24');
  var L25 = document.getElementById('25');

  var arr = document.getElementById('arrow');
  var arr_2 = document.getElementById('arrow_2');

  if (!L24.paused) 
  {
    a_img.style.display = "block";
  }

    if ((y_pos > 230 || x_pos < 150 || x_pos > 3000) && !L1.paused)
    {
        qq1.style.fill = "yellow";
        qq2.style.fill = "#f9f8ea";
        qq3.style.fill = "#f9f8ea";
        qq4.style.fill = "#f9f8ea";
        qq5.style.fill = "#f9f8ea";
        arr.style.display = "none";
        arr_2.style.display = "block";
        arr_2.style.y = 0.7;
    }

    else if ((y_pos > 230 || x_pos < 150 || x_pos > 3000) && !L2.paused)
      {
        qq1.style.fill = "#f9f8ea";
        qq2.style.fill = "yellow";
        qq3.style.fill = "#f9f8ea";
        qq4.style.fill = "#f9f8ea";
        qq5.style.fill = "#f9f8ea";
        arr.style.display = "block";
        arr_2.style.display = "none";
        arr.style.y = 0.7;
      }

    else if ((y_pos > 350 || x_pos < 150 || x_pos > 3000) && !L3.paused)
    {
        qq1.style.fill = "#f9f8ea";
        qq2.style.fill = "#f9f8ea";
        qq3.style.fill = "yellow";
        qq4.style.fill = "#f9f8ea";
        qq5.style.fill = "#f9f8ea";
        arr.style.display = "none";
        arr_2.style.y = 4.7;
        arr_2.style.display = "block";
    }

    else if ((y_pos > 350 || x_pos < 150 || x_pos > 3000) && !L4.paused)
      {
        qq1.style.fill = "#f9f8ea";
        qq2.style.fill = "#f9f8ea";
        qq3.style.fill = "#f9f8ea";
        qq4.style.fill = "yellow";
        qq5.style.fill = "#f9f8ea";
        arr_2.style.display = "none";
        arr.style.display = "block";
        arr.style.y = 4.7;
      }

    else if ((y_pos > 500 || x_pos < 150 || x_pos > 3000) && !L5.paused)
    {
        qq1.style.fill = "#f9f8ea";
        qq2.style.fill = "#f9f8ea";
        qq3.style.fill = "#f9f8ea";
        qq4.style.fill = "#f9f8ea";
        qq5.style.fill = "yellow";
        arr.style.display = "none";
        arr_2.style.display = "block";
        arr_2.style.y = 8;
    }

    else if ((y_pos > 500 || x_pos < 150 || x_pos > 3000) && !L6.paused && L6.currentTime >= 0 && L6.currentTime <= 2)
    {
        qq1.style.fill = "yellow";
        qq2.style.fill = "yellow";
        qq3.style.fill = "yellow";
        qq4.style.fill = "yellow";
        qq5.style.fill = "yellow";
        arr.style.display = "none";
        arr_2.style.display = "none";
    }

    else if ((y_pos > 500 || x_pos < 150 || x_pos > 3000) && !L6.paused && L6.currentTime > 2 && L6.currentTime <= 6)
    {
        qq1.style.fill = "#f9f8ea";
        qq2.style.fill = "yellow";
        qq3.style.fill = "#f9f8ea";
        qq4.style.fill = "#f9f8ea";
        qq5.style.fill = "#f9f8ea";
        arr.style.display = "block";
        arr_2.style.display = "none";
        arr.style.y = 0.7;
    }

    else if ((y_pos > 500 || x_pos < 150 || x_pos > 3000) && !L6.paused && L6.currentTime > 6 && L6.currentTime <= 10)
    {
        qq1.style.fill = "#f9f8ea";
        qq2.style.fill = "#f9f8ea";
        qq3.style.fill = "yellow";
        qq4.style.fill = "#f9f8ea";
        qq5.style.fill = "#f9f8ea";
        arr.style.display = "none";
        arr_2.style.display = "block";
        arr_2.style.y = 4.7;
    }

    else if ((y_pos > 500 || x_pos < 150 || x_pos > 3000) && !L6.paused && L6.currentTime > 10 && L6.currentTime <= 15)
    {
        qq1.style.fill = "#f9f8ea";
        qq2.style.fill = "#f9f8ea";
        qq3.style.fill = "#f9f8ea";
        qq4.style.fill = "yellow";
        qq5.style.fill = "#f9f8ea";
        arr.style.display = "block";
        arr_2.style.display = "none";
        arr.style.y = 4.7;
    }

    else if ((y_pos <= 450 || y_pos >=800 || x_pos < 150 || x_pos > 3000) && !L24.paused)
    {
        qq1.style.fill = "#f9f8ea";
        qq2.style.fill = "#f9f8ea";
        qq3.style.fill = "#f9f8ea";
        qq4.style.fill = "#f9f8ea";
        qq5.style.fill = "#f9f8ea";
        ii1.style.fill = "yellow"
        arr.style.display = "block";
        arr.style.y = 17;
        arr_2.style.display = "none";
    }

    else if ((y_pos <= 450 || y_pos >=800 || x_pos < 150 || x_pos > 3000) && !L25.paused)
    {
        qq1.style.fill = "#f9f8ea";
        qq2.style.fill = "#f9f8ea";
        qq3.style.fill = "#f9f8ea";
        qq4.style.fill = "#f9f8ea";
        qq5.style.fill = "#f9f8ea";
        ii1.style.fill = "e5e5de"
        ii2.style.fill = "yellow"
        arr.style.display = "none";
        arr_2.style.display = "block";
        arr_2.style.y = 22;
    }

    else if ((y_pos <= 450 || y_pos >=800 || x_pos < 150 || x_pos > 3000) && !L8.paused)
    {
        qq1.style.fill = "#f9f8ea";
        qq2.style.fill = "#f9f8ea";
        qq3.style.fill = "#f9f8ea";
        qq4.style.fill = "#f9f8ea";
        qq5.style.fill = "#f9f8ea";
        ii1.style.fill = "e5e5de"
        ii2.style.fill = "e5e5de"
        ii3.style.fill = "yellow"
        arr.style.display = "block";
        arr.style.y = 22;
        arr_2.style.display = "none";
    }

    else
      {
        qq1.style.fill = "#f9f8ea";
        qq2.style.fill = "#f9f8ea";
        qq3.style.fill = "#f9f8ea";
        qq4.style.fill = "#f9f8ea";
        qq5.style.fill = "#f9f8ea";
        ii1.style.fill = "#e5e5de"
        ii2.style.fill = "#e5e5de"
        ii3.style.fill = "#e5e5de"
        arr.style.display = "none";
        arr_2.style.display = "none";
      }

}

function doWebSocket () {

  websocket = new WebSocket (url);

  websocket.onopen = function (e) {
    onOpen (e);
  };

  websocket.onmessage = function (e) {
    onMessage (e);
    // console.log(e.data.split(":")[0]);
  };

  websocket.onerror = function (e) {
    onError (e);
  };

  websocket.onclose = function (e) {
    onClose (e);
  };
}

function onOpen (event) {
  send ("connected");
}

function onMessage (event) {
  gazeDiv(event.data.split(":")[0], event.data.split(":")[1]);
}

function onError (event) {
  writeToScreen ('<span style="color: red;">ERROR: ' + event.data + '</span>');
}

function onClose (event) {
  writeToScreen ("DISCONNECTED");
}

function send (message) {
  websocket.send (message);
}

function writeToScreen (message) {
  var pre = document.createElement ("p");
  pre.style.wordWrap = "break-word";
  pre.innerHTML = message;
}

window.addEventListener ("load", init, false);