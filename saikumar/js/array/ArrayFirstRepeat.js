/**How find the first repeating element in an array of integers */
var a=[1,3,3,42,,42,3,1,3,42,3];
var b=[];
var index=0;
var count;
var res=0;
for(var i = 0; i < a.length; i++){
    for(var j = i+1; j < a.length; j++){
        if(a[i]==a[j]){
            count=j;
            break;
        }
    }
   if(b.length==0&&count!=0){
       b[i]=0;
       index=count;
       res=a[index];
   }
   if(index>count){
       index=count;
       res=a[index];
   }
}
console.log(res+" is the first repeating element");