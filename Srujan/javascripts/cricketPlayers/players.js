var ld=  require("lodash");
var arr=["1,","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25"];
var final=[]

var k=0;
let demo=[];
    let j=0;
var count=0;
for(var i=0;count<arr.length;i++){          //count increase increses only whrn element is added to final
    
    var temp=ld.random(0,arr.length);
    if(arr[temp]!=undefined){               //if the element is undefined then don't enter the loop
        selection(arr[temp]);
       count++;
    }
}

function selection(a){
    
    console.log(demo.length);
    if(demo.length<12){
        demo[j]=arr[temp]       //assigning the selected elementto demo and making the element as undefined    
        arr[temp]=undefined;     
        j++;                    //incrementing the index of demo
        
        if(demo.length==11){        //if demolength is 11 then add array to final 
            final[k]=demo;
            k++;                    //increseing the final index 
            demo=[];                //making the demo empty and its index to 0    
            j=0;

        }
   }
   
}
console.log(final);
console.log("the number of matches to be played is "+(final.length-1));