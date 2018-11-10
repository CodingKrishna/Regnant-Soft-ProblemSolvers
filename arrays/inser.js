/**
  * insert element at paticular position in array
  */
 var k=[10,20,40,50];
 var n=k.length;
 console.log(n);

       var  pos = 2;
        
        for(var i = (n-1); i >= (pos-1); i--)
        {
            k[i+1] = k[i];
        }
        k[pos-1]=30;
    
        console.log("After inserting:");
        for(var i = 0; i < n; i++)
        {
            console.log(k[i]);
        }