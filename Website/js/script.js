'use stricts';

const header = document.querySelector("header")

function hideHeader(){
    const button = document.querySelector("button");
    if(header.style.display != "none"){
        header.style.display = "none";
        button.textContent = ">";
    }
    else{
        header.style.display = "block";
        button.textContent = "<";
    }
}