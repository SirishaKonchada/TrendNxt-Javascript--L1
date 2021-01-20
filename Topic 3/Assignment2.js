function f(str)
{
var sepwords = str.toLowerCase().split(' ');
for(var i=0;i<sepwords.length ; i++)
{
    sepwords[i]=sepwords[i].charAt(0).toUpperCase()+sepwords[i].substring(1);
}
return sepwords.join(' ');
}
//var str = 'this is regarding capitalizing each words in a sentence';
console.log(f("my name is"));
document.write(f("this is regarding capitalizing each words in a sentence"));