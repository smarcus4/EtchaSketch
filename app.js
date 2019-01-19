const $etchSpace = document.querySelector(".etchSpace");
const spaces = 2
    
    
    


    for(let i=0; i<spaces; i++){//rows
        for(let i=0; i<spaces; i++){//columns
     
    
        const $div = document.createElement("div");
        $div.classList.add("etched");
        $div.style.backgroundColor = "#ffffff" 
        $etchSpace.appendChild($div);

        }   
    }





const setGridSize = ($etchSpace, spaces) => {
    $etchSpace.style.gridTemplateColumns = `repeat(${spaces}, 1fr)`;
    $etchSpace.style.gridTemplateRows = `repeat(${spaces}, 1fr)`;
}


setGridSize($etchSpace, spaces)


const $newDiv = document.querySelectorAll(".etched");
$newDiv.forEach($div => $div.addEventListener("mouseenter", function hoverOnDivs(e){



    function random_rgba() {
        var o = Math.round, r = Math.random, s = 255;
        return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + "1"+ ')';
    }
    
    const color = random_rgba();

    $div.style.backgroundColor = color;




}));

