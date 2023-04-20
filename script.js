const prompts = [];
prompts[0] = "Imagine yourself in a white box...."
prompts[1] = "The only thing inside the box is a floating surface 6 inches above your face"
prompts[2] = "On the bottom of the platform."
prompts[3] = "Is a living."
prompts[4] = "Moving."
prompts[5] = "Anatomically accurate version of your penis and testicles."
prompts[6] = "Now there is an offer."
prompts[7] = "For $1000 a second"
prompts[8] = "Will you place one of your own balls in your mouth?"
prompts[9] = "The choice is all yours to make.."
prompts[10] = "Choose wisely!"

const original = document.getElementById("poop");
var count = 0;
var transstate = false; 

function RAHH(){
    if (transstate == false && count < prompts.length){
        poop.classList.add("hidden")
        transstate = true;
        setTimeout(function(){
            if(count )
            poop.innerHTML = prompts[count];
            count +=1 ;
        }, 1000);

         
        setTimeout(function(){
            poop.classList.remove("hidden");
        }, 1000);
        transstate = false;
        
    }
    
}
