/**
 * convert upper case and lower 
 * //charcodeAt will return ascii value of the chanracter at particular index
 * //The static String.fromCharCode() method returns a string
 */

var str1="HELLOW";
var p;
var q="",q1="";
for(var index=0;index<str1.length;index++){
    var j=str1.charCodeAt(index);
    if(j>=97 && j<=122){
        var m=j-32;
        var p=String.fromCharCode(m);
        q+=p;

    }else {
        q+=str1[index];
    }
    if(j>=60 && j<=90){
        var m=j+32;
        var p=String.fromCharCode(m);
        q1+=p;
    }
    else{
        q1+=str1[index];
    }
}
console.log("upper case"+"\t"+q);
console.log("lowwer case"+"\t"+q1);
/**
 * revese a string
 */
var str2="hellow";
for(var index=str2.length-1;index>=0;index--){
    console.log("reverse of the given string"+"\t"+str2[index]);
}

/**
 * number of vowels and consonents in string
 */
var str4="vikram aeiou";
var count=0;
var count2=0;
for(var i =0;i<=str4.length;i++){
    if(str4.charAt(i)=='a'||str4.charAt(i)=='e'||str4.charAt(i)=='i'||str4.charAt(i)=='o'||str4.charAt(i)=='u')
    {
        count++;
    }
    else 
    {
count2++
    }
}
console.log("count of the vowels"+count)
console.log("count of the consonents"+count2)

/**
 * convert string to interger and interger to string
 */
var str5="97";
var i=parseInt(str5);
console.log(i);
var k=97;

var str6=str5.toString(k);
console.log(str6);

/**
 * number of words in a string
 */
var str9="this is my new program";

var s=str9.split(" ");
console.log("after spliting"+"\t"+s);
console.log("number of words in the string"+"\t"+s.length);
var str1="hi this is my new gang hai    vikram";
var str=" ";
var count=1;
for (var i = 0; i < str1.length ; i++)
		{
			if ((str1.charAt(i) == ' ') && (str1.charAt(i + 1) != ' '))
			{
				count++;
 
			}
        }
        console.log("number of words "+count)


/**
 * program to remove all white spaces
 */

 var str7="hi this is my new string";
var str8="";
for(var i=0;i<=str7.length;i++){
    if(str7.charAt(i)!=" ")
    {
        str8=str8+str7.charAt(i)
    }
    
}
console.log(str8);
/**
 * duplicate characters in string
*/

 var str10="hi helllow i am here"
 var str11="";
 for(var i=0;i<str10.length;i++)
 {
     if(str10.charAt(i)!=" ")
     {
         str11=str11+str10.charAt(i);
     }
    }

 console.log(str11);

 for(var i=0;i<=str11.length;i++)
 {
    var count=0;
     for(var k=0;k<=str11.length;k++)
     {
      if(str11[i]==str11[k])
      {
          if(i>k)
          {
              break;
          }
         count++;
      }
     }
     if(count>1)
     {
         console.log(str11[i]+count)
     }
 }
 /**
  * first non repeating character
  */
 var g="hiwhelloi"
 var count=1;
 for(var i=0;i<g.length;i++)
 {
     for(var j=0;j<g.length;j++)
     {
         if((g.charAt(i)==g.charAt(j)&&(i!=j)))
         {
            count=0;
            break;
         }
        else 
        {
             count=1;
        }
    }
     if(count==1)
     {
         console.log(g.charAt(i))
         break;
     }
 }
 /**
 * check string palindrome
 */
var str3="adfada";
var l= str3.length;
flag=0;
for(var index=0;index<=l;index++){

        if(str3[index]!=str3[l-index-1])
            {
flag=1;
break;

            }
    
}
if(flag==0){
    console.log("the string"+"\t"+str3+" is palindrome")
}
