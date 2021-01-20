var a = 5;
var b = parseInt(prompt('enter a num or string'));
if(Number.isInteger(a))
{
    if( Number.isInteger(b))
    {
          document.write(a+b);
    }
    else
    document.write("Sorry....Only Nos will be added");
}
else
document.write("Sorry....Only Nos will be added");