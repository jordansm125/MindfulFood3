d3.csv("./images3.csv",function (data) {
   	var URL = data.map(function(d) {return d.imageUrl});
   	   	console.log(URL[0]);
  /* 	var i;
   	for (i = 0; i < URL.length; i++){
		 var images = document.write('<img src="' + URL[i] + '"/>');
		}
		return images;*/
		document.getElementById("imageLocation").innerHTML = ('<img src="' + URL[1] + '"width = 400 height = 400>');

});


//document.getElementById("imageLocation").innerHTML = (document.write(images));
