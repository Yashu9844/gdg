
function calucate(operation){

  const num1 = parseFloat(document.getElementById('num1').value)

  const num2 = parseFloat(document.getElementById('num2').value)

let result;

  if(isNaN(num1)|| isNaN(num2)){
    console.log("Please enter valid number")


  }else{
    switch(operation){
        case 'add' : 
          result = num1 + num2
          break;

         case 'subtract' :
            result = num1 - num2
            break;

         case 'multiply':
            result = num1 * num2;
            break;
            
         case 'divide':
            if(num2 == 0){
                console.log("cant dicvide by zero")
                break;
            }  else{
                result = num1 / num2
                break;
            } 

        default : 
       result = 'Inavlid operation'
    }
  }

  document.getElementById("result").innerText = (`Result ${result}`)    


}