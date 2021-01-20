var s='dog';
var n=s.length;
var sum=' ';//,x='';
function getCombination(s){
    for(var i=0;i<n;i++)
    {
        for(j=i;j<n;j++)
        {
        var x=s.charAt(j);
        sum=sum + x ;
        document.write(sum+',');
        }
        sum=' ';
    }
}

getCombination(s);