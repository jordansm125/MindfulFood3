//declares a variable that allows me to return data from parsing
var url;
//reads and parses csv full of image data
d3.csv("./images4.csv",function (data) {
	//extracts the image ID from the csv file
	var ID = data.map(function(d) {return d.imageId});
	//empty array to put the new url's into
	fullUrl = [];
	//for each ID we create a new url
	for (i =0; i < ID.length; i++){
		//creating each url with the image ID pre-loaded into the form
		var prefilledForm = 'https://docs.google.com/forms/d/e/1FAIpQLSeJvrnlwHIr7Oqjuh7B2EA6NDFiSJ5uytflof1LydrF9DxSaw/viewform?usp=pp_url&entry.886282136=&entry.1677717347=' + ID[i];
		//pushes the new url into the empty array
		fullUrl.push(prefilledForm);
		}
	//sets the array equal to url so we can acess the new url's
	url = fullUrl;
});
