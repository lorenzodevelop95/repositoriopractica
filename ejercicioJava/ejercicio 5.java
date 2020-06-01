/*Lorenzo carazo zuñiga*/

class Main {
   

  public static void main(String[] args) {
    int repeat = 1;
   int morerepeat = -999;
   int [] vec = {1,2,2,5,4,6,7,8,8,8};
   int dato =0;
    for(int x=1; x<9; x++){
      if(vec[x] == vec[x+1]){
        repeat = repeat + 1;
      }else{
        if (repeat > morerepeat){
          morerepeat = repeat;
          dato = vec[x];
        }
        repeat = 1;
      }
      if(repeat > morerepeat){
        morerepeat = repeat;
         dato =  vec[x];
      }
    }
    System.out.println("Número "+ dato);
    System.out.println("Ocurrencias " + morerepeat);

  }
}
