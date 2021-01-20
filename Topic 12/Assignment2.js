var a=[9,4,2,8,1];
var n = a.length;
//using bubble sort
for(var i=0;i<n;i++)
{
    for(var j=i+1;j<n;j++)
    {
        if(a[i]>a[j]){
       var tmp = a[i];
         a[i]=a[j];
        a[j]=tmp;
        }
    }
}
console.log('Bubble Sort :    '+a);

//insertion sort
 
const len = a.length;
    for (let i = 0; i < len; i++) {
      let el = a[i];
      let j;
  
      for (j = i - 1; j >= 0 && a[j] > el; j--) {
        a[j + 1] = a[j];
      }
      a[j + 1] = el;
    }


  console.log('Insertion Sort : '+a);
  