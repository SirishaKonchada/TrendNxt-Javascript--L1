function dropdowncount()
{
   
    var x=document.getElementById("mySelect").options.length;
  
    var a = new Array(x);
    for(var i=0;i<x;i++){
      a[i]=document.getElementById('mySelect').options[i].text;
    }
    alert('ListCount :  '+x+'\n'+'ListElements : '+a);
}

dropdowncount();
