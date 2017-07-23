document.addEventListener("DOMContentLoaded", function(){
    var heading = document.getElementById("change_heading");
    heading.innerText = "Hello World"; 

});

// var buttonColor= document.querySelectorAll("section div");

// var selectionText = document.querySelector(".selected");

// for(var i = 0; i < buttonColor.length; i++){
//   buttonColor[i].addEventListener("mouseover", function (event) {
//         selectionText.innerText = event.target.classList.value
//  })
// }

//Add purple square
    var newDiv = document.createElement("div");
    newDiv.classList.add("purple");


    var buttonColor= document.querySelector("section");
    buttonColor.appendChild(newDiv);


//Add mouseover
    buttonColor.addEventListener("mouseover", function (event) {
        var selectionText = document.querySelector(".selected");
    selectionText.innerText = event.target.classList.value.toUpperCase()

    //solution selectionText.innerText = event.target.className
    })


// Race Car
  var button = document.querySelector("button");
  var car1 = document.querySelector(".car1");
  var car2 = document.querySelector(".car2");



  button.addEventListener("click", function(){
    var speeds = [ randomSpeed (), randomSpeed ()]

    function randomSpeed () {
        return Math.floor(Math.random()*(5 - 2))+2;;
    }

    car1.style.animation = "drive " + speeds[0] + "s both linear";
    car2.style.animation = "drive " + speeds[1] + "s both linear";

    setTimeout(function(){ 
      if(speeds[0] === speeds[1]){
        alert("Tie");
      } else if (speeds[0] > speeds[1]){
        alert("Winner! Car 2");
      } else {
        alert("Winner! Car 1");
      }
    },Math.max(speeds[0], speeds[1])*1000);

  })

