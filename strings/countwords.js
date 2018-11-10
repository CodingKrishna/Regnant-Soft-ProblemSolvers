var str1="hi this is my new gang hai    vikram";
var str=" ";
var count=1;
for (var i = 0; i < str1.length ; i++){
			if ((str1.charAt(i)== ' ') && (str1.charAt(i + 1) != ' ')){
				count++;
 
			}
        }
        console.log("number of words "+count)
