function convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1],
	  7:['XL',40],
      8:['X', 10], 
      9:['IX',9],
     10:['V', 5],
     11:['IV',4],
     12:['I', 1]
  };
    };
let roman = "";

  // Iterate through the Roman numeral object
  for (let key in obj) {
    const [symbol, value] = obj[key];
    while (num >= value) {
      roman += symbol;
      num -= value;
    }
  }

  return roman;
}
  //your code here

}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
