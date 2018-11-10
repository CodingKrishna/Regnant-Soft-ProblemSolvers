/* fibonacci series */
var first=0;
var second=1;
var fibo=function(f,s,count){
    if(count>1)
    console.log(first);
    if(count>2)
    console.log(second);
    if(count>=3){
        while(count<10){
            third=first+second;
            first=second;
            second=third;
            console.log(third);
            count++;
        }
    }
    
}
fibo(first,second,5)