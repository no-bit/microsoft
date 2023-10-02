'use strict';
const switcher = document.querySelector(".btn");
switcher.addEventListener("click",function(){
    document.body.classList.toggle("light-theme");
    document.body.classList.toggle("dark-theme");
    const className = document.body.classList;
    if (className=="light-theme"){
        this.textContent="Darks";
    }else{
        this.textContent="Lights";
    }
    console.log("current class", className);
});