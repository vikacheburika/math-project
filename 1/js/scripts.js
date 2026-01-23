'use stricts';

const cards = document.querySelector("footer").querySelectorAll("div");
const visiblesCards = [cards[0], cards[1], cards[2]];
const trigonometrineCards = document.querySelector("footer").querySelectorAll("div")[6].querySelectorAll("div");
let cardPlus = 1;



const update = () =>{
    cards.forEach(element => {
        element.style.display = "none";
        
    });

    visiblesCards.forEach(element => {
        element.style.display = "inline-block";
        
        if(element == visiblesCards[1]){
            element.style.transform = "scale(1.3)";
            element.style.zIndex = 2;
        }
        else{
            element.style.transform = "scale(1.1)";
            element.style.zIndex = 0;
        }
    });
    trigonometrineCards.forEach(element => {
        element.style.display = "inline-block";
    })
}

const scrollCards = (direction) =>{
    if(direction == ">"){
        for(i in visiblesCards){
            if(parseInt(i)+cardPlus<=6){
                visiblesCards[i] = cards[parseInt(i)+cardPlus];
                console.log(parseInt(i)+cardPlus);
            }
            else{
                console.log("stop");
                cardPlus--;
            }
             
        }
        console.log(visiblesCards);
        
        cardPlus++;
    }
    else{
        for(i in visiblesCards){
            if(parseInt(i)+cardPlus-2>=0){
                visiblesCards[i] = cards[parseInt(i)+cardPlus-2];
            }
            else{
                console.log("stop");
                cardPlus = cardPlus > 1 ? cardPlus-- : 2;
            }
        }
        cardPlus--;
    }
    console.log(cardPlus);
    
    update();
}



update();