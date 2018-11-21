/* Print elements at even index in array */

var y =[11,10,9,8,7,6,5,4,3,2,1];
for(var x=0; x<y.length; x++){

   
    if(x!=0 && x%2==0){
        console.log("Element at:"+x+"   was"+y[x]);
        //console.log(y[x]);
    }
}