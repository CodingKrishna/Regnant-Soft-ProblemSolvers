var a=[1,2,3,4,5];
/**print array elements */
for(let index=0;index<a.length;index++)
{
    console.log(a[index]);
}console.log("  ")

/**even num in a array */
for(let index=0;index<a.length;index++)
{
    if(a[index]%2==0)
    {
        console.log(a[index]+" even num in a array");
    }
}console.log("  ")

/** odd num in a array */
for(let index=0;index<a.length;index++)
{
    if(a[index]%2!=0)
    {
        console.log(a[index]+" odd num in a array");
    }
}
/**even index position elements */
console.log("  ")
for(let index=0;index<a.length;index++)
{
    if(index%2==0)
    {
        console.log(a[index]+" is present in even index position ");
    }
}console.log("  ")

/**odd index position elements */
for(let index=0;index<a.length;index++)
{
    if(index%2!=0)
    {
        console.log(a[index]+" is present in odd index position");
    }
}
console.log(" ");
var sum=0;
/**sum of array */
for(let index=0;index<a.length;index++)
{
   sum+=a[index];
}
console.log("sum of array "+sum);
console.log(" ");

/**index of given element */
var k=3;
for(let index=0;index<a.length;index++)
{
    if(a[index]==k)
    {
        console.log(a[index-1]+" index  of given element "+k);
        break;
    }
}
