/* Lorenzo carazo zuñiga
*/

function funcion(n){
  
  var matrix =n.slice(0,n.length), result = new Array(n.length);
  var aux =0, iteration = 1;
  
  for (var i=0, j=n.length; i<j; i++){
    matrix[aux] =1;
    iteration =1;
    
    for(var x=0, y=n.length; x<y; x++){
      iteration = iteration * matrix[x];
    }
    
    result[aux] = iteration;
    aux += 1;
    matrix = n.slice(0,n.length)
  }
  
  return result;
}
a = [2, 3, 4, 6]
b = [123, 67, 890, 4]
c =  [2, 3, 7, 9, 4, 5, 6, 9, 12] 

funcion(a)
