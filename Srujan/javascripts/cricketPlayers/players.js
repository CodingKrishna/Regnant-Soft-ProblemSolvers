var ld=  require("lodash");
var arr=["1,","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25"];
var final=[]

var k=0;
let demo=[];
    let j=0;
var count=0;
for(var i=0;count<arr.length;i++){
    
    var temp=ld.random(0,arr.length);
    if(arr[temp]!=undefined){
        selection(arr[temp]);
       count++;
    }
}

function selection(a){
    
    console.log(demo.length);
    if(demo.length<12){
        demo[j]=arr[temp]
        arr[temp]=undefined;
        j++;
        
        if(demo.length==11){
           // console.log(k);
            //console.log(demo);
            final[k]=demo;
            console.log(final);
            k++;
            demo=[];
            console.log(final);
            j=0;

        }
   }
   
}
console.log(final);
console.log("the number of matches to be played is "+(final.length-1));