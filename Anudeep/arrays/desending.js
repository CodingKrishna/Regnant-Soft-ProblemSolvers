/*program to print given array in decending order*/
var x=[2,5,6,8,9,10,15,7,25]
var temp=0,k=0;
for(var j=0; j<x.length; j++) {
    for(var j1=0; j1<j; j1++) {
    if(x[j]>x[j1]) {
       temp=x[j];
       x[j]=x[j1];
       x[j1]=temp;
    }
    
    }
 
    
    console.log(x[j] );
    }