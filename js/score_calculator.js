/*
This function is used to calculate the score and is invoked whenever the correct answer is typed
to update the user score. It increments the score by 3 for correct answer if attempts remaining are 3,
score 2 if attempts remaining are two and score 1 if attempts remaining are one.
It retruns the score calculated in terms of eithe adding one,two or three and updating the value.
It can be called as score_calculator(x) where x can take value 1,2 or 3 and then add the score to calculated score
to the final generated score variable
for example if we have a score of 10 and attempts 3
then it will update the score to 13 on correct answer inputs
If we have attempts two then returns 12
and returns 11 on one remaining attempt

similarly, the game focusses on more attempts more the score approach and if we have 3 Attempts
remaining at all the levels till the game ends then we will end up as the Master
*/
function calculate_score(score,attempts)
{
  var new_score=score;

  if(attempts==3)
  {
    new_score=new_score+3;
  }

  else if(attempts==2)
  {
    new_score=new_score+2;
  }

  else if(attempts==1)
  {
    new_score=new_score+1;
  }



  return new_score;
}
