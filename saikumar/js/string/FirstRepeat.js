var a = ["abc", "bab", "cad", "bab", "abc"];
var b = [];
var count = 0;
var index = 0;
for(var i = 0; i < a.length; i++){
    for(var j = i+1; j < a.length; j++){
        if(a[i] == a[j]){
            count = j;
            break;
        }
    }
    if(b.length == 0 && count != 0){
        b[i] = 0;
        index = count;
        res = a[index];
    }
    if(index > count){
        index = count;
        res = a[index];
    }
}
console.log(res);