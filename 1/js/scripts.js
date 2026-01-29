'use stricts';

const cards = document.querySelector("footer").querySelectorAll("div");
let visiblesCards = [0, 1, 2];
const trigonometrineCards = document.querySelector("footer").querySelectorAll("div")[6].querySelectorAll("div");




const update = () =>{
    cards.forEach(element => {
        element.style.display = "none";
        
    });

    visiblesCards.forEach((el, i) => {
        cards[el].style.display = "inline-block";
        cards[el].style.order = i;
        
        if(el == visiblesCards[1]){
            cards[el].style.transform = "scale(1.3)";
            cards[el].style.zIndex = 2;
        }
        else{    
            cards[el].style.transform = "scale(1.1)";
            cards[el].style.zIndex = 0;
        }
    });
    trigonometrineCards.forEach(element => {
        element.style.display = "inline-block";
    })
}

const scrollCards = (direction) =>{
    if(direction == ">"){
        visiblesCards = visiblesCards.map(el =>{  
                if(el<6){
                    el++;
                    return el;
                }
                else{
                    el = 6-el;
                    return el;
                }         
                
            });}
    if(direction == "<"){
        visiblesCards = visiblesCards.map(el =>{  
                if(el>0){
                    el--;
                    return el;
                }
                else{
                    el = 6-el;
                    return el;
                }         
                
            });}
    
    update();

}



update();