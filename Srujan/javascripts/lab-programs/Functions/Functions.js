//functions without parameter and return type
function f1(){
    console.log('It is in f1')
}
f1()

//functions with parameter
function f2(a){
    console.log('In f2 value is: '+a)
}
f2(3);
var a=5;
f2(a);

//functions with only return type
function f3(){
    return 5*3;
}
var x=f3()
console.log('using retuen type: '+x);
console.log('directly calling f3 : '+f3() )

//function with array as arguments
function f4(g){
    console.log(g)
for(i=0;i<g.length;i++){
    console.log(g[i])
}
    
}
var g=[1,2,3,4,5,6]

f4(g);
//-------------------------------
//returning arrays 
function f5(){
    var xxx=[10,20,30,40]
    return xxx
}
var yyy=f5()
for(i=0;i<yyy.length;i++){
console.log(yyy[i])
}
//---------------------------------------------------
//fuctions inside function
function one(){
    function two(){
        return three(10);
    }
    return two();

}
function three(n){
    console.log(n);
    return n;
}
console.log(one())
/*-------------------------------------------------------
calling function as parameter 
creating a function as a single parameter then calling the function passing an anonymous function
*/
function call(f){
f();
}

call(function(){                //calling a function by passing an anonymus function
    console.log ('srujan')
});
/*--------------------------------------------------------
passing two functions in a single function
creating the function with two parameters and accessing them with two functions
*/
  //createing parameters for function
 function a1(m,n){   
     //logic performed on fumctions                             
    if(m()>n()){                                    
        console.log(m()+'value is greater')
    }
    else
    {
        console.log(n()+'value is greater')
    }
     
 }
  //calling the function which has parameter
 a1(                                               
     function(){           //passing the first function                         
         return 5;
     },function(){           //passing second function                       
         return 6;
     }
 )


 //demo 
 function emo(ma){
     return ma;
 }
 console.log(emo(0));
