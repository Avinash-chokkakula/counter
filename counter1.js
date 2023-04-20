let counterValue = document.getElementById("myParagraph");


function myIncrement(){
    let previousValue=counterValue.textContent;
    let updatedValue=parseInt(previousValue)+1;
    // console.log(updatedValue);
    // console.log(typeof(updatedValue)); 

     counterValue.textContent=updatedValue;

     if (updatedValue > 0) {
        counterValue.style.color = "green";
      }
      else if (updatedValue < 0) {
        counterValue.style.color = "red";
      }
      else{
        counterValue.style.color = "black";
      }
}

function myDecrement(){
    let previousValue=counterValue.textContent;
    let updatedValue=parseInt(previousValue)-1;
    // console.log(updatedValue);
    // console.log(typeof(updatedValue)); 

    
    counterValue.textContent=updatedValue;

    if (updatedValue > 0) {
       counterValue.style.color = "green";
     }
     else if (updatedValue < 0) {
       counterValue.style.color = "red";
     }
     else{
       counterValue.style.color = "black";
     }
}

function myReset(){
    let previousValue=counterValue.textContent;
    let updatedValue=0;
    counterValue.textContent=updatedValue;
    counterValue.style.color = "black";
}