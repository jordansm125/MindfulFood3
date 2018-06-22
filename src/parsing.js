d3.csv("./images4.csv",function (data) {
   	var URL = data.map(function(d) {return d.imageUrl});
   	   	console.log(URL[0]);
  /* 	var i;
   	for (i = 0; i < URL.length; i++){
		 var images = document.write('<img src="' + URL[i] + '"/>');
		}
		return images;*/
	document.getElementById("imageLocation").innerHTML = ('<img src="' + URL[1] + '"width = 500 height = 500>');
	//document.getElementById("imageLocation").innerHTML = ('<p>"' + URL[0] + '"</p>');

});
//document.getElementById("imageLocation").innerHTML = (document.write(images));