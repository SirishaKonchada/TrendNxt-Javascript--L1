
/*
prompts user to input integer upto which he/she wants to print prime numbers
*/
var inp = 15;//prompt('enter a integer');
console.log('1');
for(var i=2;i<=inp;i++)
{
  var f=1;
  for(var j=2;j<=i/2;j++)
  {
   if(i%j == 0)
   {
     f=0;
     break;
   }
  }
  if(f == 1)
    console.log(i);
  
  //res[k++]=i;
  
}
//console.log(res);
//document.write(res);