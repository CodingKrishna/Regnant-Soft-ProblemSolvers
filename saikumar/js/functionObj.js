var x, y;
var op = function(x,y){
    this.x = x;
    this.y = y;
    this.add = function(){
        return this.x+this.y;
    }
    this.sub = function(){
        return this.x-this.y;
    }
    this.mul = function(){
        return this.x*this.y;
    }
    this.div = function(){
        return this.x/this.y;
    }
    this.display = function(){
        console.log(this.add());
        console.log(this.sub());
        console.log(this.mul());
        console.log(this.div());
    }
  
}
var obj = new op(3,4);
console.log(obj);
obj.display();
var add1 = function(){
    console.log("add");
}