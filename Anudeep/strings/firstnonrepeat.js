/*program to print first non repeated character from String */
var i="hello world";
var count=1;
for(var m=0 ; m<i.length; m++) {
   count=1; 
   for( var n=m+1 ;n<i.length; n++) {
        
        if(i[m]==i[n] ) {   /*condition one */
            count++;
            break;
        }    
    }
    if(count<=1){    /*condition two */ 
        console.log("first non repeat "+i[m])
        break;
    }

}
