let re=0;
let operation="+";
let first=0;
let second=0;

function handleOnChange(e) {
    var sign  = document.getElementById("sign");
	var op = (sign.options[sign.selectedIndex].value);

    if (op=="+") operation="+";
    else if (op=="-") operation="-";
    else if (op=="*") operation="*";
    else if (op=="/") operation="/";
	
	
  }

  function setValue() {

	first = parseInt(document.getElementById('first').value); 
	second = parseInt(document.getElementById('second').value);

    if(operation=="-"){
	re = first - second;
    document.getElementById("result").innerText="result : "+re;}

    else if(operation=="*"){
	re = first * second;
    document.getElementById("result").innerText="result : "+re;}

    else if(operation=="/"){
	re = first / second;
    document.getElementById("result").innerText="result : "+re;}

    else if(operation=="+"){
        re = first + second;
        document.getElementById("result").innerText="result : "+re;}
    
}
