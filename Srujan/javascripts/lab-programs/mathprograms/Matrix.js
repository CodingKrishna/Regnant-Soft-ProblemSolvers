/**
 * program to perform matrix multiplication and addition
 */
var one=[[1,2,3],[4,5,6],[7,5,9]];
var two=[[7,8,9],[4,2,6],[5,2,1]];
var add=[[],[],[]];
for(var i=0;i<one.length;i++){
    for(var j=0;j<one[0].length;j++){
        add[i][j]=one[i][j]+two[i][j];
    }
}
console.log(add);
//LOGIC FOR Multiplication
var mul=[[],[],[]];
for(i=0;i<one.length;i++){
    for( j=0;j<one[0].length;j++){
        sum=0
        for(k=0;k<two[0].length;k++){
            sum=sum+one[i][k]*two[k][j];
        }
        mul[i][j]=sum;
    }
}
console.log(mul)