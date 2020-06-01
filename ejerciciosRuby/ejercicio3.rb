#Lorenzo carazo zuñiga

class Max

  def sol(a)

    max = a[0]
    min = a[0]

    for x in (0..4)
      
      if a[x] > max
        max = a[x]
      end

    end
    print max
  end


end

a = [13,2,4,35,35]

obj = Max.new
obj.sol(a)

