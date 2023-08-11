
function decimalToBinary(x) {
  //Write you code here
	
	
	let num = 0;
	 while(true){
        num = (num * 10 )+ x % 2
        x = Math.floor(x/2);
        if(x==0){
           break;
        }
    } 
	let result = "";
	
	return result + num;
}

window.decimalToBinary = decimalToBinary;
