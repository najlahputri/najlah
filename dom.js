let dataColor=['red', 'blue', 'yellow', 'purple', 'pink']
let footershow=false;
var divColor=document.getElementById("color-set");

function setColor(){
    const textData=document.getElementById("text-data").value
    document.getElementById(textData).style=(`background-color:${textData};color:white`)
}

function addColor(){
    const textData=document.getElementById("text-data").value
    dataColor[dataColor.length]=textData
    divColor.insertAdjacentHTML('beforeend', `<div id="${textData}" class="color-content"><h1>${textData}</h1></div>`)
}

function addfooter(){
    const footer=document.getElementById("footer")
    if(footershow){
        footer.style.display="none"
        document.getElementById("addfooter").innerHTML="Add Footer"
    } else{
        footer.style.display="block"
        document.getElementById("addfooter").innerHTML="Remove Footer"
    }
    footershow=!footershow
}
for( let index=0; index<dataColor.length; index++) {
    const elemen=dataColor[index];
    divColor.insertAdjacentHTML('beforeend', `<div id="${element}" class="color-content"><h1>${element}</h1></div>`)
}