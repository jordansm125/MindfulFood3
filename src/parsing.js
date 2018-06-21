d3.csv("./urlTestImage.csv",function (data) {
   	var URL = data.map(function(d) {return d.imageUrl});
   	console.log(URL[0]);

   	return URL;
   	//document.write('<img src="' + URL + '" width = 350 height = 300>');
   	/*var i;
   	for (i = 0; i < URL.length; i++){
		 var images = document.write('<img src="' + URL[i] + '"/>');
		}
		return images;*/
});
document.getElementById("imageLocation").innerHTML = ('<img src="' + URL[0] + '"width = 350 height = 300>');
//document.getElementById("imageLocation").innerHTML = (document.write(images));
//document.getElementById("imageLocation").innerHTML = ('<p>"URL"</p>');
