/**
 * this function generates and prints the missing characters in the given array
 * @param {array to search missing characters} test 
 */

function missingChars(test) {
    var end = 0,start = 123;


    // getting the initial character values from the array
    // if my array is ['c','r','b','d','h'] 
    // then my first character is 'b' and last character is 'r'
    for (let i = 0; i < test.length; i++) {

        if(test[i].toLowerCase().charCodeAt(0) > end)
            end = test[i].toLowerCase().charCodeAt(0);
        
            if(test[i].toLowerCase().charCodeAt(0) < start)
            start = test[i].toLowerCase().charCodeAt(0);
    }

    // comparing all the characters between the first and last chars
    // with the actual characters in the given array

    var count = 0;
    for( var i = start;i<=end;i++){
        for(var j = 0;j<test.length;j++){
            if(String.fromCharCode(i) == test[j].toLowerCase()){
                count = 0;
                break;
            }
            else count = 1;
        }
        if(count == 1){     //printing the character if it is not present in the array
            console.log(String.fromCharCode(i))
        }
    }    
}
var arr = ['d','B','e','F','L']
missingChars(arr)
