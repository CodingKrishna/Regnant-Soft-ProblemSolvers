var str='JAVASCRIPT IS EASY'
var g=""
 

for(var index = 0; index < str.length; index++)
 
 { 
      if((str.charAt(index)) >= 'A' && (str.charAt(index)) <= 'Z')
        {
            g=g + String.fromCharCode(str.charCodeAt(index) + 32);
            
        }
       else
       {
        
            g = g + str.charAt(index)
       }
 }


console.log(g)