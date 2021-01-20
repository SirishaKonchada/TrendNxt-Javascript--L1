function multiples(a)
{
    var x=Math.round(1000/a);
var s=0;
for(var i=1;i<=x;i++)
{
    s=s+a*i;
}
return s;
}
console.log(multiples(3)+multiples(5));