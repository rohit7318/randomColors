const container = document.getElementById("container");
// const colorContainer = document.getElementById("color-container");
for(let i = 0 ; i<100; i++)
{
    let colorContainer = document.createElement("div");
    colorContainer.classList.add("color-container");
    container.appendChild(colorContainer);

    
    
}

let colorContainers = document.querySelectorAll(".color-container");
    colorContainers.forEach(function(color,index){

        let bgColor = randomColorGenerator();
        color.style.backgroundColor = bgColor;
        let sp = document.createElement("span");
        color.appendChild(sp);
        sp.textContent = bgColor;

       


        
    });





function randomColorGenerator()
{
    var chars = "0123456789abcdef";
    var colorCode = "#";

    

    for(let i = 0 ; i<6; i++)
    {
        let randomNum = generateRandomNum(chars);
        colorCode += chars.substring(randomNum,randomNum+1);
    }
    
    return colorCode;
}


function generateRandomNum(string)
{
    return Math.random()*string.length;
    
}