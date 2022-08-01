function createCard(item,array){
    const card = document.getElementById(`palette${item}`);
    const arrayLength = array.length;
    const percentage = ( 100/arrayLength ) * item;
    card.style.float ="left"
    card.style.width ="100px"
    card.style.height ="150px"
    card.style.margin ="2px"
    card.style.background =`rgb(238 0 0/${percentage}%)`
};

function generatePalette(){
    const container = document.getElementById("container");
    container.innerHTML="";
    const inputNumber = document.getElementById("inputNumber").value;
    const array =[];
    for(let i=0 ; i<inputNumber;i++){
        array.push(i+1);
    }

    array.forEach(item=>{
        container.innerHTML +=`<div id=palette${item}>${item}</div>`
        createCard(item,array);
    })
}