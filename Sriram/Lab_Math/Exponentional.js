/**
 * Finding the exponentional value of a number
 */


 var e=2.7182818284590
 var result=1
 function expo(x)
 
   {

     if(x==0)
     {
         console.log("1")
     }
     else
     {

           while(x>0)
            {
               result=result * e
               x--
            }
            return result;

     }
       
   }

   var r = expo(32)
   console.log(r)