d3.csv("./images3.csv",function (data) {
   		var URL = data.map(function(d) {return d.imageUrl});
   		document.write('<img src=' + URL[0] + '/>');
   		
   		/*var i;
   		*for (i = 0; i < URL.length; i++){
		*	document.write('<img src=' + URL[i] + '/>');
			}*/
	});
