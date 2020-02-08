/*
 * Author:Uel Azdrian Karsten Small
 * FileName: main.js
 * Date:02/08/2020
 *
 */

  // intialise viarables for calculator program
  var inputs=[],// sets up array for inputs
  output= "",// displays the results of an operation performed
  defaultValue = 0,//default value when calculator is turn on or inputs is cleared
  powerStatus;
  

function getId(x){
 return document.getElementById(x);
}


  //AC button powers on calculator.
  getId("AC").addEventListener("click", function powerOn() {

    //when AC BUTTON is clicked checks the  length of inputs[] array
    $inputs.push($defaultValue);
    var $inputLen= $inputs.length;
    
    if ($inputLen === 1){
      getId("display").textContent=$defaultValue;
      $powerStatus =true;
       console.log($powerStatus);
    }else{
      $inputs.push($inputs=[] );
      getId("display").textContent="";
      $powerStatus =false;
      console.log($powerStatus);
      
    }
  });