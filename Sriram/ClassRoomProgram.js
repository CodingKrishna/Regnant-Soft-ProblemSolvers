/**
 * Finding The Index where 'a' Reapeating More No.of Times
 */


var str=["aaba","aaab","aaaabbaa","aaaaa","aaaaaaaa"]

var count=0;
var index;
var temp;
var g=[]
var f=[]

/** 
 * We are now cheacking that 'a' is there or not in each and every string for an given string array
*/
for(i=0;i<str.length;i++)
{

   for(j=0;j<str[i].length;j++)
   {
       if(str[i].charAt(j)=='a')
       {
               count=count+1;
               
       }
   }
   //console.log(count)


  /** 
   * now we are passing that count value in to the new array
   */
   var k=i;
    
       g[k]=count
 
   count=0;
}
//console.log(g)
 





/**
 * copy 'g' array elements in to new array 'f'
 */
for(m=0;m<g.length;m++)
{
    f[m]=g[m]
}
//console.log(f)
t=f.length



/**
 * ascending order for the largest number in an array 'f'
  */ 
for(i=0;i<t;i++)
{
    for(j=0;j<t;j++)
    {
            
         if(f[i]<f[j])
         {
             temp=f[i]
             f[i]=f[j]
             f[j]=temp
         } 
         
    }
}
/**
 * we got the largest number in an array 'f' 
*/
var large_num=f[t-1]



/**
 * Now we are comparing the array  old 'g' with large_number
 * if the element is equals to the 'large_num' printing that element index
 */
for(d=0;d<g.length;d++)
{
    if(g[d]==large_num)
    {
        console.log("At index "+d+" 'a' is reapeated More no. of times")
    }
}