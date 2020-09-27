 adjust("blue"); //map标签的id
 adjust("yin");
 var timeout = null; //onresize触发次数过多，设置定时器  
 window.onresize = function () {
 	clearTimeout(timeout);
 	timeout = setTimeout(function () {
 		window.location.reload();
 	}, 100); //页面大小变化，重新加载页面以刷新MAP  
 }

 //获取MAP中元素属性  
 function adjust(mapId) {
 	var map = document.getElementById(mapId);
 	var element = map.childNodes;
 	var itemNumber = element.length / 2;
 	for (var i = 0; i < itemNumber - 1; i++) {
 		var item = 2 * i + 1;
 		var oldCoords = element[item].coords;
 		var newcoords = adjustPosition(oldCoords);
 		console.log(oldCoords);
 		console.log(newcoords);
 		element[item].setAttribute("coords", newcoords);
 	}
 	var test = element;
 }

 //调整MAP中坐标

 function adjustPosition(position) {

 	var imageWidth = 1920; //原图片的长宽  
 	var imageHeigth = 860;

 	var iwidth = jQuery("#blueImg").width(); //页面正在显示的图片的宽高
 	var iheight = jQuery("#blueImg").height();
 	var each = position.split(",");
 	//获取每个坐标点  
 	for (var i = 0; i < each.length; i++) {
 		each[i] = Math.round(parseInt(each[i]) * iwidth / imageWidth).toString(); //x坐标  
 		i++;
 		each[i] = Math.round(parseInt(each[i]) * iheight / imageHeigth).toString(); //y坐标  
 	}
 	//生成新的坐标点  
 	var newPosition = "";
 	for (var i = 0; i < each.length; i++) {
 		newPosition += each[i];
 		if (i < each.length - 1) {
 			newPosition += ",";
 		}
 	}
 	console.log(newPosition);
 	return newPosition;
 }
