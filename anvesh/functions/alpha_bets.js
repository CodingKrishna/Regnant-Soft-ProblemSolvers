/** finding missing alpha bets in a string*/
var a="hdsuewxblzsa";
var b=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var d=[];
    for(var index=0;index<a.length;index++)
    { 
        for(var iner=0;iner<b.length;iner++)
        {
            
             if(a[index]==b[iner])
           {
               b[iner]='A';
               
            }
       }
    }  
     //console.log(b);
    for(var index =0;index<b.length;index++)
{
        if(b[index]!='A')
    {
         console.log("char not present in string are "+b[index]);
    }
}
