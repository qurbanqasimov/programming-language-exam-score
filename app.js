const js = document.querySelector(".js")
const c = document.querySelector(".c")
const py = document.querySelector(".py")

const sBtn = document.querySelector(".sumbit")

const averageText = document.querySelector(".average ")
const letterText = document.querySelector(".letter ")

sBtn.addEventListener("click", function(){
    const result = (js.value * 0.3) + ( c.value *0.1) +(py.value * 0.6) 
   
   
    if(result>90){
        averageText.textContent = `Average score: ${result.toFixed(2)}`;
        letterText.textContent = "Letter result:AA";
        letterText.style = "color:green"
    }

    else if(result>80){
        averageText.textContent = `Average score: ${result.toFixed(2)}`;
        letterText.textContent = "Letter result:BA";
        letterText.style = "color:green"
    
    }

    else if(result>70){
        averageText.textContent = `Average score: ${result.toFixed(2)}`;
        letterText.textContent = "Letter result:BB";
        letterText.style = "color:green"
    
    }

    else if(result>60){
        averageText.textContent = `Average score: ${result.toFixed(2)}`;
        letterText.textContent = "Letter result:CB";
        letterText.style = "color:orange"
    }

    else if(result>50){
        averageText.textContent = `Average score: ${result.toFixed(2)}`;
        letterText.textContent = "Letter result:CC";
        letterText.style = "color:orange"
    }

    else if(result>40){
        averageText.textContent = `Average score: ${result.toFixed(2)}`;
        letterText.textContent = "Letter result:DC";
        letterText.style = "color:blueviolet"
        
    }

    else if(result>30){
        averageText.textContent = `Average score: ${result.toFixed(2)}`;
        letterText.textContent = "Letter result:DD";
        letterText.style = "color:blueviolet"
    }

    else {
        averageText.textContent = `Average score: ${result.toFixed(2)}`;
        letterText.textContent = "Letter result:FF";
        letterText.style = "color:white"
    }

})

const reset = document.querySelector(".reset")
reset.addEventListener("click", function(){
    
    averageText.textContent = `Average score: ---`;
    letterText.textContent = "Letter result:---"
    letterText.style = "color:black"
})