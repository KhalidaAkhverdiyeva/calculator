function changeText(){
    document.querySelector('#Text').textContent = '<strong>Change is good!</strong>'
  
}

function change2(){
    document.querySelector('#change2').innerHTML = ' <strong>Change is good!</strong>'//it does not read tags in innetHTML
}
console.log(document.links);

const linkArrays =Array.from(document.links);
console.log(linkArrays);


console.log(window);
console.log(window.document.URL);


const element = document.getElementById('header')
element.textContent = 'New Header'


// document.getElementById('image').src = 'image2.png' //this is basically changeing picture without doing anything in html 


console.log(document.getElementById('section2').firstChild.nodeValue);
// console.log(document.getElementById('section3').childNodes[1].nodeValue);



// let firstChildNode = document.getElementById('parent').firstChild //firstElementChild "firtChild even considers the comment as a child"


// const element3 = document.getElementById('three')
// const closest = element3.closest()
const element5 = document.querySelector('.small').nextElementSibling

console.log(element5);

const element6 = document.querySelector('.small').parentNode
console.log(element6);

const closestParen = element.closest();