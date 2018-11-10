/*program for arranging words in alphabatical order */
var x=["karthik","srujan","anudeep","janaki"];
var temp=0,k=0;
for(var j=0; j<x.length; j++) {
    for(var j1=0; j1<j; j1++) {
       if(x[j]<x[j1]) {
          temp=x[j];
          x[j]=x[j1];
          x[j1]=temp;
}
    }
       }
for(var j=0; j<x.length; j++) {
    console.log(x[j]);
}