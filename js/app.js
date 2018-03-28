/*Created a continuous slideshow for my viewers, there is a 3 second interval between the images and then it continues. Once the funtion reaches the last image it will again go back to the beginning.*/
var i = 0; 			
var images = [];	
var time = 3000;	
	 
images[0] = "img/choco.jpg";
images[1] = "img/cakeboss.jpg";
images[2] = "img/wedding.jpg";
images[3] = "img/chef.jpg";

function ContinueSlideshow(){
    document.slide.src = images[i];
    
	if(i < images.length - 1){
	  
	  i++; 
	} else {
		
		i = 0;
	}
	setTimeout("ContinueSlideshow()", time);
}
window.onload=ContinueSlideshow;