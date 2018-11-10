/*passing functions as argunents in function*/

function f1(x, y){
    console.log("f1..")
    x();
    y();
}

f1(function (){
    console.log("kjhsakjfhkjdsahjfkjdsah")
}, function (){
    console.log("uytruytruytrytr")
})