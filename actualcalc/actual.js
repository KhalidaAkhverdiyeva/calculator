const calculator = document.querySelector('.calculator');
const display = document.querySelector('.display');
const number = document.querySelector('.number');
const clear = document.querySelector('clear')



number.addEventListener('click', appendToDisplay)



 function appendToDisplay (input){
      display.value += input;
   
 }

 clear.addEventListener('click', clear)

 function clear (){

    display.value = '';
 }


  

 function goBack(){
   window.history.back()
 }


 if(confirm('Press a button')){
   console.log('you  pressed ok');

 }else{

 }


 setTimeout(function(input){
   if(input >= 0 ){

   }else{
      console.log('no its not');
   }

 }, 2000)