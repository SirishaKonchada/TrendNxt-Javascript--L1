var str = 'JohnKennedy';

function f(str){
  var ch = 'n',c = 0;
  for(var pos = 1;pos<=str.length;pos++)
  {
      if(ch == str.charAt(pos))
      {
        c++;
      }
  }
   return c;
}


console.log(f(str));