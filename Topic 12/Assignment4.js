var assessmentMarks = [9,9,7,10,9.5,9.5,6,8,10,10];

var n = assessmentMarks.length;
var s=0;
for(var i=0;i<n;i++)
{
  s=s+assessmentMarks[i];
}

console.log(s/n);