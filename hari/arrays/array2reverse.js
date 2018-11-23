/*program to print array in reverse order*/
a=[2,3,4,5]
b=a.length;
for(index=b-1;index>=0;index--){
   console.log(a[index])
}

console.log("--")

c=[2,3,4,5]
console.log(c)
z=c.length;
v=[]
for(index=c.length-1;index>=0;index--){
    v[c.length-index-1] = c[index]
  // console.log(v)
}
console.log(v)
console.log(v[1])
