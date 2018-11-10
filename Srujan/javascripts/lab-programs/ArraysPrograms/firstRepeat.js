var a=[1,2,3,3,1,2,3,5]

var count=0;
var b=[];
var index=0;

for(var i=0;i<a.length;i++){
    //innerloop
    
    for(var j=i+1;j<a.length;j++){
        //condition to check elements in an array
            if(a[i]==a[j]){
            //assigning the position of j to count    
            count=j
            break
            }
        }
        //logic used to first time initilize the index
        if(b.length==0&&count!=0){
            b[1]=0;
            index=count;
        }
        //comparing the positions of the repeated elements 
        if(index>=count){
            var rep=a[count];
        }
        

    }
    
        console.log(rep+' element is first repeated');
     
    
    

        // 