/*program to find for even index numbers and odd index numbers and to find even numbers and odd numbers in an array*/
var a=[2,4,5,8,12];
for(i=0;i<a.length;i++){

    if(i%5==0)
    {
        console.log(a[i]);

    }
}

for(i=0;i<a.length;i++){

    if(i%2!=0)
    {
        console.log("odd idexes"+i);

    }
    else
    {
        console.log("even idexes"+i);
    }
}

for(i=0;i<a.length;i++){

    if(a[i]%2==0)
    {
        console.log("even numbers"+a[i]);

    }
    else
    {
        console.log("odd numbers"+a[i]);
    }
}

