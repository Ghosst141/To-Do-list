const btn = document.getElementById('btn');
const textfield = document.getElementById('textfield');
const ul = document.getElementById('todo');

btn.addEventListener('click', addtodo);

function addtodo() {
    const txt = document.createTextNode(textfield.value);
    const li = document.createElement('li');
    const delbtn = document.createElement('button');
    const datediv=document.createElement('div');
    const textdiv=document.createElement('div');


    let date= new Date();
    date=date.toLocaleDateString();
    date=document.createTextNode(date);
    delbtn.innerText='X';

    delbtn.setAttribute('class','delbtn');
    datediv.setAttribute('class','date');
    textdiv.setAttribute('class','textdiv');
    li.setAttribute('class','list');
    li.style.listStyleType='none';

    datediv.appendChild(date);
    textdiv.appendChild(txt)
    li.appendChild(datediv);
    li.appendChild(textdiv);
    li.appendChild(delbtn);

    delbtn.addEventListener('click',()=>{
        li.remove();
    })

    const fc=document.querySelector('li:nth-child(1)');
    if (textfield.value && !fc) {
        ul.appendChild(li)
    }
    else{
   
    textfield.value="";
}
