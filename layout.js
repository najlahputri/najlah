console.log(document.getElementsByClassName('left1')[0]);
console.log(document.getElementsByClassName('left2')[0]);
const li_ = document.getElementsByTagName('li');

const left1 = document.getElementsByClassName('left1')[1];
const ul = document.getElementsByTagName("UL")[0];
const li = document.getElementsByTagName("LI")[0];
const btnDel = document.getElementById('btnDel');
const kata = document.getElementById('textInput');
const ubah = document.getElementById('textInput');



for(let i=0; i<li_.length; i++)
{
    li_[i].style.backgroundColor="bisque"
}
li_[0].setAttribute('id','listNama');
const header = document.getElementsByClassName('header')[0];
header.innerHTML="header";
header.style.color="white";
header.style.fontSize="30pt";
header.style.textAlign="center";
const footer = document.querySelector('.left1');
console.log(footer);

const btn1 = document.getElementById('btn1');
btn1.addEventListener('click',function(){
    for(let i=0; i<li_.length; i++)
    {
        li_[i].style.backgroundColor="plum";
    }
})


li_[0].addEventListener('mouseenter',function(){
    li_[0].innerHTML="Ami"
    li_[0].style.color="white"
    li_[0].style.backgroundColor="lightblue";
})
li_[0].addEventListener('mouseleave',function(){
    li_[0].innerHTML="Sela"
    li_[0].style.color="black"
    li_[0].style.backgroundColor="pink";
})

li_[1].addEventListener('mouseenter',function(){
    li_[1].innerHTML="Mita";
    li_[1].style.color="white";
    li_[1].style.backgroundColor="peachpuff";
})
li_[1].addEventListener('mouseleave',function(){
    li_[1].innerHTML="Bebe";
    li_[1].style.color="black";
    li_[1].style.backgroundColor="skyblue";
})

li_[2].addEventListener('mouseenter',function(){
    li_[2].innerHTML="Amalia";
    li_[2].style.color="white";
    li_[2].style.backgroundColor="rosybrown";
})
li_[2].addEventListener('mouseleave',function(){
    li_[2].innerHTML="Nabila";
    li_[2].style.color="black";
    li_[2].style.backgroundColor="peachpuff";
})


btn2.addEventListener('click',function() { 
    let tampung = kata.value;
    if(tampung=="plum"){
        for (let i = 0; i < li.length; i++) {
          li[i].style.backgroundColor = tampung;
        }
    }
    else{
        const liBaru = document.createElement("LI");
        const isiLi = document.createTextNode("Najlah Cantik");
        liBaru.appendChild(isiLi);

        ul.insertBefore(liBaru,ul.lastChild);
    }
 });



    

 btnDel.addEventListener('click', function(){
    ul.removeChild(ul.lastElementChild);
 });

 const konten = document.getElementsByClassName('content')[1];
 const paragrafBaru = document.createElement("p");
 const textParagraf = document.createTextNode("Najlah Cantik");
 paragrafBaru.appendChild(textParagraf);
 konten.appendChild(paragrafBaru);