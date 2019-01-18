const $etchSpace = document.querySelector(".etchSpace");


for(var i=0; i<16; i++){
    const $div = document.createElement("div");
    $div.setAttribute("class", "etched");

    $etchSpace.append($div);

}