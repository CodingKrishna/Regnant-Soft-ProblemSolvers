/**printing a print table */
var i=3;
var j=1;
/** by passing value to function 
 * we will get the table
 */
function table(i)
{
  while(j<=10)
 {
   console.log(i+" * "+j+" = "+(i*j));
    j++;
   }
}
table(i);