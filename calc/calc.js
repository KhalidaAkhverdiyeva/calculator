const num1 = document.querySelector('#num1');
const num2 = document.querySelector('#num2');
const res = document.querySelector('#result');


num1.addEventListener('focus', () => {
    num1.value = '';
});
num2.addEventListener('focus', () => {
    num2.value = '';
});



document.querySelector('#plus').addEventListener('click', add);

function add (){
    if(num1.value === '' || num2.value === ''){
        alert('Number boxes must be filled!')
        res = '';
        
    } 
    res.value = Number(num1.value) + Number(num2.value);
    clearInputs();
}



document.querySelector('#minus').addEventListener('click', minus);

function minus (){
    if(num1.value === '' || num2.value === ''){
        alert('Number boxes must be filled!')
        res = '';
    } 
    res.value = Number(num1.value) - Number(num2.value);
    clearInputs();
}




document.querySelector('#multiply').addEventListener('click', multiply);

function multiply (){
    if(num1.value === '' || num2.value === ''){
        alert('Number boxes must be filled!')
        res = '';
    } 
    res.value = Number(num1.value) * Number(num2.value);
    clearInputs();
}




document.querySelector('#divide').addEventListener('click', divide);

function divide (){
    if(num1.value === '' || num2.value === ''){
        alert('Number boxes must be filled!')
        res = '';
    } 
    const num2Value = Number(num2.value);

    if ( num2Value === 0){
        alert('Dividing by 0 is not possible')
    }
    res.value = Number(num1.value) / Number(num2.value);
    clearInputs();
    
}




