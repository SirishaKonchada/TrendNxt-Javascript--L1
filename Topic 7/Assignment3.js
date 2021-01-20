var a = [1,2,3,4,5,6,7,8];
var n=a.length;
var f= prompt('enter a num');
if(f > a.length)
{
    document.write(a);
}
else{
    for(var i = n-1 ; i >= f ; i-- )
    {
        document.write(a[i]);
    }
}