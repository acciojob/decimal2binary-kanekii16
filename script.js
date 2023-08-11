
function decimalToBinary(x) {
  //Write you code here

	

    let arr =[];

    // console.log(x/2);
    while(x != 0){
        arr.push(x%2);
        x = Math.floor(x/2);

    }
    arr = arr.reverse();
    let res = arr.toString();
    let temp = res.replace(/,/g,"");
    
	
	return temp;
}

window.decimalToBinary = decimalToBinary;
