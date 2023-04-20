const prompts = [];
prompts[0] = "Imagine yourself in an open flower field."
prompts[1] = "You look around and you are surrounded in miles of purple flowers."
prompts[2] = "You look at your feet and you notice...."
prompts[3] = "All the flowers around you are turning into....."
prompts[4] = "Living."
prompts[5] = "Breathing."
prompts[6] = "Spiders."
prompts[7] = "Now heres the catch..."
prompts[8] = "These spiders are only attracted to straight people"
prompts[9] = "How do you convince the spiders that you are gay......"
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
