//below stockroom data within database;
function insertProgress(userid,task,action,value,correctness){
	
$.ajax({
  type: "POST",
  url: "../php/insert_progress.php",
  data: {
    userid:userid,
	task:task,
	action:action,
	value:value,
	correctness:correctness
  },
  dataType: "text",
  //success: function(resultData) { alert("Update Complete") }
});
};

function insertmouse(userid,task,action,value,x,y){
$.ajax({
  type: "POST",
  url: "../php/insert_mouse.php",
  data: {
	userid:userid,
	task:task,
	action:action,
	value:value,
	x:x,
	y:y
  },
  dataType: "text",
  //success: function(resultData) { alert("Update Complete") }
});
};
function insertReport(userid, task, type, value){
	$.ajax({
		type:"POST",
		url:"../php/insert_report.php",
		data:{
			userid:userid,
			task:task,
			type:type,
			value:value
		},
		dataType:"text",
	});
};
function ajaxSelectCorrectness(table, where){
	var correctness=[];
	$.ajax({
		type:"POST",
		url:"../php/ajax_select.php",
		async:false,
		data:{
		 table:table,
		 where:where
		},
		dataType:'json',
		success:function(result){
			if(result){
				for(var i=0;i<result.length;i++){
					correctness.push(result[i].correctness);
				}
				}
		},
		error:function(jqXHR, exception){
			//alert("Ajax can't retrieve database!"+errmsg);			
			var msg = '';
	        if (jqXHR.status === 0) {
	            msg = 'Not connect.\n Verify Network.';
	        } else if (jqXHR.status == 404) {
	            msg = 'Requested page not found. [404]';
	        } else if (jqXHR.status == 500) {
	            msg = 'Internal Server Error [500].';
	        } else if (exception === 'parsererror') {
	            msg = 'Requested JSON parse failed.';
	        } else if (exception === 'timeout') {
	            msg = 'Time out error.';
	        } else if (exception === 'abort') {
	            msg = 'Ajax request aborted.';
	        } else {
	            msg = 'Uncaught Error.\n' + jqXHR.responseText;
	        }
        //alert(msg);
		}
	});
	return correctness;
}

function ajaxSelectBCorrectness(table, where){
	var correctness=[];
	$.ajax({
		type:"POST",
		url:"../php/ajax_selectB.php",
		async:false,
		data:{
		 table:table,
		 where:where
		},
		dataType:'json',
		success:function(result){
			if(result){
				for(var i=0;i<result.length;i++){
					if(result[i].correctness!="")
					{
					correctness.push(result[i].correctness);
					}
				}
				}
		},
		error:function(jqXHR, exception){
			//alert("Ajax can't retrieve database!"+errmsg);			
			var msg = '';
	        if (jqXHR.status === 0) {
	            msg = 'Not connect.\n Verify Network.';
	        } else if (jqXHR.status == 404) {
	            msg = 'Requested page not found. [404]';
	        } else if (jqXHR.status == 500) {
	            msg = 'Internal Server Error [500].';
	        } else if (exception === 'parsererror') {
	            msg = 'Requested JSON parse failed.';
	        } else if (exception === 'timeout') {
	            msg = 'Time out error.';
	        } else if (exception === 'abort') {
	            msg = 'Ajax request aborted.';
	        } else {
	            msg = 'Uncaught Error.\n' + jqXHR.responseText;
	        }
        //alert(msg);
		}
	});
	return correctness;
}

function ajaxSelectThreshold(table, where){
	var threshold=[];
	$.ajax({
		type:"POST",
		url:"../php/ajax_select.php",
		async:false,
		data:{
		table:table,
		where:where
		},
		dataType:'json',
		success:function(result){
			if(result){
				for(var i=0;i<result.length;i++){
					threshold.push(result[i].value);
				}
				}
		},
		error:function(jqXHR, exception){
			//alert("Ajax can't retrieve database!"+errmsg);			
			var msg = '';
	        if (jqXHR.status === 0) {
	            msg = 'Not connect.\n Verify Network.';
	        } else if (jqXHR.status == 404) {
	            msg = 'Requested page not found. [404]';
	        } else if (jqXHR.status == 500) {
	            msg = 'Internal Server Error [500].';
	        } else if (exception === 'parsererror') {
	            msg = 'Requested JSON parse failed.';
	        } else if (exception === 'timeout') {
	            msg = 'Time out error.';
	        } else if (exception === 'abort') {
	            msg = 'Ajax request aborted.';
	        } else {
	            msg = 'Uncaught Error.\n' + jqXHR.responseText;
	        }
        //alert(msg);
		}
	});
	return threshold;
}

function recordOperation(userid, taskNum){
	// moniter and insert operation data into database;
/*document.addEventListener("click",function(event){
	if(event.target.id=="")
	 {var id=(event.target.parentNode.id);}
	 else
	 {var id=(event.target.id);}
     insertmouse(userid, taskNum,'click',id,event.clientX, event.clientY);
});*/
document.addEventListener("mousedown",function(event){
	if(event.target.id=="")
	 {var id=(event.target.parentNode.id);}
	 else
	 {var id=(event.target.id);}
     insertmouse(userid, taskNum,'mousedown',id,event.clientX, event.clientY);
});
document.addEventListener("mouseup",function(event){
	if(event.target.id=="")
	 {var id=(event.target.parentNode.id);}
	 else
	 {var id=(event.target.id);}
     insertmouse(userid, taskNum,'mouseup',id,event.clientX, event.clientY);
});

document.addEventListener("mouseover",function(event){
	if(event.target.id=="")
	{var id=(event.target.parentNode.id);}
	else
	{var id=(event.target.id);}
	insertmouse(userid,taskNum,'mouseover',"null", event.clientX, event.clientY);
});
document.addEventListener("keydown",function(event){
	insertmouse(userid,taskNum,'enter',event.code, event.clientX,event.clientY);
});
};


