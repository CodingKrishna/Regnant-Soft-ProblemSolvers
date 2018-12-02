/**
 * using ajax sending the time
 */

 function sendtime(){
     var element=document.getElementById('location');
    var location=element.options[element.selectedIndex].text;
     console.log(location); 
     var xhr=new XMLHttpRequest();
     var url = `http://localhost:4300/timezone/time/ajax?loc=${location}`
     console.log("URL>>", url);
    
     xhr.onreadystatechange=function(){
         if(xhr.status==200 && xhr.readyState==4){
          
             document.getElementById('disp').innerHTML=xhr.responseText;
         }
         else{
            document.getElementById('disp').innerHTML='urlwrong';
         }
     }
     xhr.open("get",url, true);
     xhr.send();
 }