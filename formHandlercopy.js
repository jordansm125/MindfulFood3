//Full disclosure I may be misunderstanding this code.
//calls function when the page loads
document.getElementById("form").onload=function(){
	//loads 1st pre-filled url
	if (countLoadTime=0){
			//gets array of pre-filled url's
			var prefilledUrl = Object.values(url);
			//gets url based on currentLoadTime index, so first the first on it should get prefilledURL[0]
			document.getElementById("form").src = prefilled[countLoadTime];
			//increment countLoadTime
			countLoadTime++;
			}
	//stops loading the page? 
	else if(loadFlag=0){
	//sets LoadFlag to 1 so the next form can load
		loadFlag = 1;
	}
	else{	
			//get array of prefilled url's
			var prefilledUrl = Object.values(url);
			//get url based on new countLoadTime which is equal to 1? so it should be prefilledUrl[1]
			document.getElementById("form").src = prefilledUrl[countLoadTime];
			//resets the loadFlag? so ELSE i called again when the form is resubmitted?
			loadFlag = 0;
		}
	}
var loadFlag = 0;
var countLoadTime = 0;
