/* Lorenzo carazo zuñiga
*/

function factorial (n) {
	var total = 1; 
  console.log("0!=1")
	for (i=1; i<=n; i++) {
		total = total * i; 
    console.log(i + "!" + "=" + total)
	}
  
	
}
factorial(0)
