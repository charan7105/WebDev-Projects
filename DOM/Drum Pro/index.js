var buttonlenght = document.querySelectorAll(".drum").length;

for (let i = 0; i < buttonlenght; i++) 
{
    document.querySelectorAll(".drum")[i].addEventListener("click", clicked );

     function clicked()
     {
        // this.style.color="white";
        var clickedinfo = this.innerHTML;
        playsound(clickedinfo);

        animatebutton(clickedinfo);
     }   
}

document.addEventListener("keypress", function(event){ playsound(event.key); animatebutton(event.key)});

function playsound(key)
 {
     switch (key) 
            {
                case "w":
                var crash = new Audio("/DOM/Drum Pro/sounds/crash.mp3");
                crash.play();
                break;
            
                case "a":
                var kickbass = new Audio("/DOM/Drum Pro/sounds/kick-bass.mp3");
                kickbass.play();
                break;
        
                case "s":
                var snare = new Audio("/DOM/Drum Pro/sounds/snare.mp3");
                snare.play();
                break;

                case "d":
                var tom1 = new Audio("/DOM/Drum Pro/sounds/tom-1.mp3");
                tom1.play();
                break;

                case "j":
                var tom2 = new Audio("/DOM/Drum Pro/sounds/tom-2.mp3");
                tom2.play();
                break;

                case "k":
                var tom3 = new Audio("/DOM/Drum Pro/sounds/tom-3.mp3");
                tom3.play();
                break;

                case "l":
                var tom4 = new Audio("/DOM/Drum Pro/sounds/tom-4.mp3");
                tom4.play();
                break;
                
                default: console.log("nothing");
            }

 }

function animatebutton(currentKey)
{
   var activeButton= document.querySelector("."+currentKey);
   activeButton.classList.add("pressed");
   setTimeout(function(){ activeButton.classList.remove("pressed")},100);
}