/** program to print 2 elements last off array */
var a=[1,2,3,4,5,6,9,10];
var j=0;
var k=a.length-1;
var m=0;
   for(var index=0;index<1;index++)
{
      var j1=a[index];
      for(var iner=index+1;iner<a.length;iner++)
      {
          if(iner==1)
          {
           m=a[iner];
          }
             else
          {
              a[j]=a[iner]
               j++;
          }

      }
      a[j]=j1;
      j++
      a[j]=m;
}
console.log(a);