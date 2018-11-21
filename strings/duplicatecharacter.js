/**
 * duplicate characters in string
*/

 var str10="hi helllow i am here"
 var str11="";
 for(var i=0;i<str10.length;i++){
     if(str10.charAt(i)!=" ")
     {
         str11=str11+str10.charAt(i);
     }
    }

 console.log(str11);

 for(var i=0;i<=str11.length;i++){
    var count=0;
     for(var k=0;k<=str11.length;k++)
     {
      if(str11[i]==str11[k])
      {
          if(i>k)
          {
              break;
          }
         count++;
      }
     }
     if(count>1){
         console.log(str11[i]+count)
     }
 }
 