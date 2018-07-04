Hi Sam! Thanks for all of your help. I hope the comments I made are helpful.

Here are some quick instructions/descriptions. Most of this will be obvious but incase its not I thought it might be best to write it out for you.

The "index.html" allows you to call the script to get the prefilled url's and parse the csv file that has the image data. 

The "prefilledURL.js" parses the image csv for the IMAGE ID NUMBER (emphasis because image and url is used alot within my code). 

The "formHandler.js" is supposed to allow you to change the url based on the forms you've already submitted/loaded or ya know whatever your code does. #magic

Another big note, so this is really silly but because our accessToken's are temporary in order to get a new csv file you have to run our photoscraper. Now you shouldn't have any problems just make sure that "prefiledURL.js" is access "images4.csv", since you aren't loaded the images youre just getting existing data. 

However, if you do run into problems with the csv file all you have to do is go to:
 "PhotoScraper"--> "GooglePhotosAlbumAccess.py"

I assume youre familar with python but incase not just navitgate to the "PhotoScraper" folder and type:
python GooglePhotosAlbumAcess.py

Then in your terminal it will say something like "no photos" a couple of times and then say "writing complete" or something and then you can just change the name of the csv and drop it into the other folder so your path is correct. 

Oh also here is the info to access the gmail account to get to the correct image data. 
U: mindfulfoodal@gmail.com
P: NUS2018!
