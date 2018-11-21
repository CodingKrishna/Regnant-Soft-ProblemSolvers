/** Print elements left to right and right to left from middle*/

var el =[1,2,3,4,5,6,7,8,9,10];
mid =(el.length)/2;
for(var x=0;x<mid;x++){
/** printing left to right*/
console.log(el[x]);

}
console.log("right to left")
//printing right to left
for(var x=el.length-1; x>=mid;x--){
    console.log(el[x]);
}