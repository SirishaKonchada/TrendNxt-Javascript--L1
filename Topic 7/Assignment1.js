function fibo()
{
    var a = [0,1];
    for(var i=2;i<100;i++)
    {
      a[i]=a[i-1]+a[i-2];
    }
    return a;
}

console.log(fibo());