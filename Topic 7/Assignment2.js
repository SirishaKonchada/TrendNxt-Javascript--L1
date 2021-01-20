//var List = re
var list1 = [1,2,3];
var list2 = ['a','b','c'];

var res = [];
var j=0,k=0;
for(var i=0;i<list1.length;i++)
{
    res.push(list1[j++]);
    res.push(list2[k++]);
}
console.log(res);