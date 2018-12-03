

var showTime=function(){
    

   var v= document.getElementById('time_id');


   var h= v.options[v.selectedIndex].value;


   
   console.log(h);
   var xhr=new XMLHttpRequest();
  
     xhr.open("get","http://localhost:4521/timezone?time="+h,true)
    
     xhr.send();

     xhr.onreadystatechange=  function ()
     {
         console.log('in function')
        
        if((xhr.status==200) && (xhr.readyState==4)) 
        { 
            console.log("in if")
           var t=document.getElementById('time_id2');
           t.innerHTML= xhr.responseText;

       }
   }





}