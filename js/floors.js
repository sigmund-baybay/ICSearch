var img1 = "../src/floorplan/1 OG.png"
var img2 = "../src/floorplan/2 OG.png"
var img3 = "../src/floorplan/3 OG.png"
let n = 1

function back() {
  var image = document.getElementById("floorImage");
  var floorText = document.getElementById("floor-text");
  n--;
  if (n == 2) { // show second floor
    image.src = img2; 
    floorText.innerHTML = "2nd Floor";
  } else if (n == 1) { // show first floor
    floorText.innerHTML = "1st Floor";
    image.src = img1;
  } else if (n < 1) { // do nothing
    n++;
  }
}


function forward() {
  var image = document.getElementById("floorImage");
   var floorText = document.getElementById("floor-text");
  n++;
  if (n == 2) { // show 2nd floor
    image.src = img2;
    floorText.innerHTML = "2nd Floor";
  }else if (n == 3) { // show 3rd floor
    image.src = img3;
    floorText.innerHTML = "3rd Floor";
  }else if (n > 3) { // do nothing
    n--;
  }
}