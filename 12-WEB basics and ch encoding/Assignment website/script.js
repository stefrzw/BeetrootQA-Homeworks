const hovered = document.getElementById('browserver');

hovered.addEventListener('mouseover', mouseOver);
hovered.addEventListener('mouseout', mouseOut);

function mouseOver(){
    hovered.innerText = 'Sorry, I dont know javascript :))))';
}

function mouseOut(){
    hovered.innerText = 'Hover me to see your browser version';
}





