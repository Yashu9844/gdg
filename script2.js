function calucalate(operation){

    const num1 = parseFloat(document.getElementById("num1").value)
    const num2 = parseFloat(document.getElementById("num2").value)

    let result;

    if(isNaN(num1) || isNaN(num2)){
        document.getElementById("result").innerText = "Error: Please enter valid numbers.";
    return;
    }else{
switch(operation){
    case 'add':
        result = num1  + num2;
        break;

     case 'sub':
        result = num1 - num2;
        break;
        
     case 'mul':
        result = num1 * num2;
        break;
     case 'divide':
        if(num2 == 0){
            alert("cant be divided")
        }  else{
            result = (num1 / num2).toFixed(2);
        }
        
        break;
  default :
     result = "No valid operation" 
      
} 

    }
   document.getElementById("result").innerText = (`Result is ${result}`)

  

}

function clearInputs() {
    document.getElementById("num1").value = '';
    document.getElementById("num2").value = '';
    document.getElementById("result").innerText = ''; 
}