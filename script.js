const prompts = [];
prompts[0] = "Imagine you are trapped in an empty barn"
prompts[1] = "The only other thing to exist in the barn is a brown cow"
prompts[2] = "You look at your feet and you notice.."
prompts[3] = "Theres peanut butter all over your balls"
prompts[4] = "Warm."
prompts[5] = "Sticky."
prompts[6] = "Peanut Butter."
prompts[7] = "Suddenly a voice emerges from the silence."
prompts[8] = "The cow proceeds to exclaim..."
prompts[9] = "The only way that you can escape"
prompts[10] = "Is if you suck my balls..."
prompts[11] = "Or if you let me suck your balls"
prompts[12] = "Please keep in mind. The cow has no dexterity in its mouth \n and you have a 70% chance of you getting your balls bit off."
prompts[13] = "As you decide."
prompts[14] = "Please know"
prompts[15] = "You have to tell one person"
prompts[16] = "That is the only way you can escape safely"
prompts[17] = "Now.... how will you escape?"


const original = document.getElementById("poop");
var count = 0;
var transstate = false; 

function RAHH(){
    if (transstate == false && count < prompts.length){
        poop.classList.add("hidden")
        transstate = true;
        setTimeout(function(){
            poop.innerHTML = prompts[count];
            count +=1 ;
        }, 1000);

         
        setTimeout(function(){
            poop.classList.remove("hidden");
        }, 1000);
        transstate = false;
        
    }
    
}
