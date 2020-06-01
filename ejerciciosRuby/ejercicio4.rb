#Lorenzo carazo zuñiga
v=[1,2,1,3,3,1,2,1,5,1]
v.sort!
c1=0
while c1<=9  
  a=0
  b=""
  for c2 in 0..9
    if v[c2]==v[c1]
      a+=1
      b=b.concat("*")
    end    
  end
puts " #{v[c1]} : #{b}" 
c1+=a
end
