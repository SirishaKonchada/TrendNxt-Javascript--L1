var arr = [2,4,6,13,15,17,21,22,23,26,27,29,31,32,35];
var l=0,r=arr.length;
function binarySearch(arr,l,r)
{
    var a = 20;
    if(r>=l){
     var mid = l+(r-1)/2;
     if(arr[mid] == a)
         return a;
     if(arr[mid]>a)
     return binarySearch(arr,l,mid-1);
     if(arr[mid]<a)
     return binarySearch(arr,mid+1,r);
    }
    return -1;
}
//returns element if it is present in the array else -1
console.log(binarySearch(arr,0,r-1));