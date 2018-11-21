/*armstrongnumbers */
var armstrongNum = function(a){
    var x=0;
    var y;
    var temp=a;  
    while(temp>0){             /*condition in loop */
        y=temp%10;
        temp=parseInt(temp/10);
        x = x+y*y*y;          
    }
     if(a==x){
          return a;
        }
        else{
            return 0;
        }
        
    }
    var r=armstrongNum(153)
        console.log(r);
   