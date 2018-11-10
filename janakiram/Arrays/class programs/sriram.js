/*W.A.P to find the index of the element which has more a's  
* [aa,aab,aaabd,aaaaa,aaa,aaz]*/
var arr = ['aaa','aab','aaaaa','aad','aaabd']

for(var i=0;i<arr.length;i++){
    
    var count =0
   
    for(var j=0;j<arr[i].length;j++){
        if (arr[i].charAt(j)=='a'){
         count++
        
        }
        
    }
    console.log(count)


  
}
console.log(arr[1].charAt(2))