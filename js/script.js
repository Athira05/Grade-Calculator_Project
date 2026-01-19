function calculateGrade()
{
  let math = Number(prompt("Enter Maths marks:"));
  let physics = Number(prompt("Enter Physics marks:"));
  let english = Number(prompt("Enter English marks:"));
  let chemistry = Number(prompt("Enter Chemistry marks:"));
  let social = Number(prompt("Enter Social marks:"));

  let mathMark=math;
  let physicsMark=physics;
  let englishMark=english;
  let chemistryMark=chemistry;
  let socialMark=social;
 

  let totalMark = mathMark+physicsMark+englishMark+chemistryMark+socialMark;
  let avgMark = totalMark/5;
 let grade ;
  if(avgMark>=90)
  {
    grade="A+";
    
  }
  else if(avgMark>=80 && avgMark<=89)
  {
    grade="A";
   
  }
  else if(avgMark>=70 && avgMark<=79)
  {
    grade="B";
    
  }
   else if(avgMark>=60 && avgMark<=69)
  {
    grade="C";
    
  }
   else if(avgMark>=50 && avgMark<=59)
  {
    grade="D";
    
  }
   else if(avgMark<50)
  {
    grade="E";
    
  }

  console.log(totalMark);
  console.log(avgMark);
  console.log(grade);

  alert("Total Mark:" + totalMark);
   alert("Average Mark:" + avgMark);
   alert("Grade:" + grade);
   
}