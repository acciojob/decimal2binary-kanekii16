
function decimalToBinary(x) {
  //Write you code here
	let result = 0;
	 while(true){
        result = (result * 10 )+ x % 2
        x = Math.floor(x/2);
        if(x==0){
            return result;
        }
    }   
}

window.decimalToBinary = decimalToBinary;
