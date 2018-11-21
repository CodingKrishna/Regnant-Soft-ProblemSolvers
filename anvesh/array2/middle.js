var a=[1,2,3,4,5,6,7,8];
var k=a.length-1;
console.log(k);

for(let index=parseInt(k/2);index<a.length;index++)
{
    console.log("array center to right "+a[index]);
}
console.log(" ")

for(let index=parseInt(k/2);index>=0;index--)
{
    console.log("array center to left "+a[index]);
}
console.log(" ");

/** print alternate elements in a array */
for(let index=0;index<a.length;index++)
{
    if(index%2!=0)
    {
        console.log("printing alter nate elements in a array"+a[index])
    }
}