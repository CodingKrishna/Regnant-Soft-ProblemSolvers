/**
 * largest number in array
 */
console.log("largest number in array");
 var arr2=[40,20,30,100,2000,454]
 var laz = arr2[0];
 for(var k=0;k<=arr2.length;k++){
    if(arr2[k]>laz){
        laz = arr2[k]
        
    }
 }
 console.log(laz);