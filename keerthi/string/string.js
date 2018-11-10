var a=["cat","bat","mat"]
temp="";
for(var i=0;i<a.length;i++){
    for(var j=i+1;j<a.length;j++){
        if(a[i]>a[j])
        {
            temp=a[i]
            a[i]=a[j]
            a[j]=temp


        }
    }
}
for(var i=0;i<a.length;i++){
    console.log(a[i])
}