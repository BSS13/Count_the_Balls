SIT-708 Mobile Systems Development

I, Balpreet Singh Sandhu (SID-218713289) have recently began my Masters of Information Technology Professional (S779) course at Deakin university,
Burwood Campus. I completed my Bachelor's in Computer Science and Engineering (CSE) in the year 2018 from Guru Nanak Dev university (GNDU), Amritsar,
Punjab, India. I was born and brought up in the holy city of Amritsar renowned all over the globe for its famous "Golden Temple", by my Parents - my Father
a business man and my mother a business women. I live in my hometown with my Parents and younger brother and have done my schooling from DAV Public School,
Amritsar. I have taken up this course with specialization in Software and Services development to create my strong foundations in these core IT concepts and
strengthen my basic knowledge to be a better professional personnel.

As a part of the course, I am enrolled into this SIT-708 course (Mobile Systems Development) taught by Dr. Henry Larkin and as a part of the course I Have
created my game model "Count the Balls". The game begins by virtue of login screen where the user logs in his/her username which is stored and displayed onto
the Welcome screen which is launched thereafter. The welcome screen provides the option to access the learning module (which giving some basics insights into
what mathematical operations will be dealt in within the game, what all colours will be used in the game get a head start. Although this is a knowledge but good enough
to get the head start), stats (for the user beginning the session), log out (which clears all the data) and start game (which launches the game).The game focusses on
combining the concept of learning and applying mathematics by including the concept of game within to make learning fun and easy. The game goes through
multiple levels each categorized beforehand, and each level has its associated instruction screen, level screen and question screen. Each Level Screen displays a number of free
falling balls which the user has to keep track of the desired balls as instructed in the instruction screen for the level and then solve the mathematics question that
comes on the question screen as per the level type described in the instruction screen. Although, the questions will be easy at the start but the complexity will
increase progressively as the game progresses and there comes the concept of "10 second rule" and "scoring system" described in the Marking Justification docx.
Since the game gives score as per the attempts left, have 10 seconds to manually type and check the answer, and only 3 total attempts thus, completing the game
with all the attempts is quite a task. I arrived here in Australia on 27th Feb and since I travel in tram and seeing the flowing cars at the rush hours outside
the University premises struck in my mind the concept of creating such a game.

Main Features and their related functionality and API guidelines are as follows(To facilitate even more each line of code is preceded by a comment of the action being performed
by each line of code thus, facilitate the better reusability and future usages.)

-->Level Screen which is composed of a lot of sub-features

The level screen is composed of a lot of sub-functions that make the working and visibility of the level screen possible. Here, the main free flowing balls are
being created and there is the management of the ball positioning and movement.

a)level_screen_load_game_content() function:

  -This function has the code to fetch the total balls for each level, their individual ball count and colour that is being stored in the game Levels data.
  -This function initially fetches the total variety of balls in the level for example if we have say level 6 where there are total of 3 red, 4 green and 6
   blue balls then, we initially fetch the number of ball variety here 3
  -Then for each of the three variety it fetches the individual ball count and ball colour and stores it in separate arrays.
  -This also involves using the index variable here level_screen_index which keeps the check on the variety of the ball and then we generate the required number
   of balls for each variety. This is necessary to maintain identification and is vital for the model working and work through.
  -This has within calls to makeball and appendBall function and uses a array to push the number of balls being created
  -The makeBall is used to create the required ball by giving it the required colour and then it is pushed onto the array from where the appendBall will add
   it onto the screen after an interval of one second each.

   //Code to store the values
   for (var i=0;i<level_screen_ball_type_in_level;i++)
   {
     //Array to store the total ball colours associated in the level
     level_screen_ball_colors[i]=gameLevels[current_level].ball_colors[i];
     //Array to store the individual count of each ball
     level_screen_ball_individual_count[i]=gameLevels[current_level].ball_count[i];
     //Variable to store the total number of balls in the level
     level_screen_total_balls+=level_screen_ball_individual_count[i];

   }

   //Code to make the calls to the desired function and push the balls after generation.
   for(var k=0;k<level_screen_ball_type_in_level;k++)
    {
      //Fetch the level screen index value initially one into level_screen_ball_type variable
      var level_screen_ball_type=level_screen_index;

      //Create the individual ball count for the selected ball type and set their random position for later falling
        for (var l=0;l<level_screen_ball_individual_count[level_screen_index];l++)
        {

         //Variable that will make the ball that will be displayed onto the screen
         var level_screen_div_ball=creatediv(" ","general_div_ball");
         //Call to the make ball function that will take fetching of the looping variable and div created above to assign the required colour for the ball
         makeBall(level_screen_div_ball,level_screen_index,l);

         //Give a random position to the ball x coordinate to have a fall from any location from the screen
         var xPos = getRandomInt(0, 1000);
         //Set the left position of the div to the generated random xPosition
         level_screen_div_ball.style.left=xPos+"px";
         //Set the top of the balls to the required value
         level_screen_div_ball.style.top="10px";
         //Set the width of the div element i.e. the ball
         level_screen_div_ball.style.width="30px";
         //Set the height of the div i.e. the ball
         level_screen_div_ball.style.height="30px";
         //Push the ball to the balls array for later animation and give it the flow
         balls.push(level_screen_div_ball);

       }
       //Increment to shift to the next ball type
      level_screen_index++;
     }
 //Clear the index variable for the next level balls generation
 level_screen_index=0;
 //Function call to appendBalls() to add the animation to the balls
 appendBalls();

}



b)appendBalls() function:

  This function is responsible for appending the balls onto the screen with a delay of 1 second to avoid overlapping issues. This can be used to append
  any element onto the screen that is pushed onto the balls array with a delay of one second called from the above function.

  -It has within call to myMove() function responsible to add the motion logic to the ball.
  -It has a self calling function within it that makes a self call to it after every one second to append the balls with a delay to avoid the overlapping issue.

  //Append function logic
  //Within function to achieve a task here ball generation after every one second
  setTimeout(function ()
   {
     //Fetch the ball from the array
     var eball=balls[x];
     //Append the ball to the body
     document.body.appendChild(balls[x]);
     //Function call to myMove function that accepts the ball and add the movement logic
     myMove(eball);
     //Increment x to facilitate the fetching of the next ball
     x++;
     //To keep the check on the number of balls associated
      if (x < balls.length)
      {
         //Recall to the function i.e. self-calling function
         appendBalls();
      }
   }, 1000);//Associated timer for the recall of the function to redo the task.


c)myMove() function

  This function is responsible to add the motion to the ball in vertical downward motion in terms of y position change. This adds the fixed value of positions
  change value and it accepts the balls as and when called when appended. It can be used to add a fixed value as specified as 10 to make for the movement and
  can be used later on to make the parameter value for quick progress.

  -Has the fixed position change value that accounts for downward motion of the balls.
  -Is responsible for the Motion logic

  //Define the motion logic
  //Set the position 0 initially
  var pos = 0;
  //Set a interval sa as to make the ball finish its desired path in a fixed time limit
  var id = setInterval(frame, 10);
  //Function that has the moving logic
  function frame()
   {
     //Clear the element if it reaches below a certain pixel range
     if (pos == 600)//setting of the finish line
      {
       clearInterval(id);
       eball.remove();
      }
     //Continue to move till the finish line hits.
     else
      {
       pos++;//Add the position
       eball.style.top = pos + 'px';//Continuosly keep on adding the position value to account for the movement
      }
   }

d)makeBall() function

 This function is responsible for adding the required colour to the ball as stored in the arrays as stored in the array created by (a) function. It accepts
 mainly two parameter in form of a ball and index variable involving the use of looping variable capturing.

 -It adds the style in form of the required colour to the ball.

 e)counter() and go() functions

 These functions are triggered as the level screen is launched and is responsible for the inner counter for the better synchronization of the screen level games.
 These have the logic to manipulate and update the counter.

 e)createLevelScreenUI() function:

 This functions is responsible for the loading of the content of the Level screen onto its UI components defined
 which is called when the user clicks the start start level button on the instruction screen.

 -This has the code to fetch the data and display it on the elements. Any modification to the content of the page can be made here.



-->Question Screen
 Question screen involves a lot of functions and features in form of using a counter, score updater, check answer module described as below:

 a)checkAnswer() function:

 It has the required logic to make modification to the score, attempts based on checking the user answer. It is the code to make any modification in terms of answer
 checking logic that is being invoked when the user clicks the check answer button on the question screen.

 -It has a if statement that is executed when the user types in correct answer which on correct answer stops the counter, displays the next button
 -On the else part it manages the attempts variable and decrements it as and when the answer typed is wrong and change the text of the timer
  when attempts go to zero and disable the check button.

  if(question_screen_userAnswer==question_screen_actualAnswer)
  {
    //Display the correct Messsage in place of the Timer
    question_screen_timer.innerHTML="Correct Answer!!!!!!";
    //Display the next level button
    question_screen_next_button.style.display="block";
    //Call function to calculate score
    var question_screen_score=calculate_score(gameData.attempts);
    //Display and update the score
    question_screen_score.innerHTML="Score:"+question_screen_score;
    //Remove the check button from the screen
    question_screen_check_button.style.display="none";
    //Increment the level number in gameData and current_level variable
    gameData.level++;
    current_level++;
    //Clear the interval
    clearInterval(question_screen_tid);

   }

  //Counter logic if answer is not correct
  else
   {
     //Decrement the attempts and display them on the screen
    gameData.attempts--;
    //Fetch the attempts left
    var question_screen_attempt_left=gameData.attempts;
    //Update the attempt value on the screen
    question_screen_attempts.innerHTML="Attempts :"+question_screen_attempt_left

    //Logic to handle if the attempts go to zero
    if(question_screen_attempt_left==0)
    {
      //Make the check button disabled
      question_screen_check_button.disabled=true;
      //Clear the timer
      clearInterval(question_screen_tid);
      //Display the message
      question_screen_timer.innerHTML="Sorry! No more Attempts! Try Again";
      //Chnage text to restart level after displaying
       question_screen_next_button.style.display="block";
      question_screen_next_button.innerHTML="Restart Level";
    }

  -Along with this it takes into account the master level by introducing the Master level checks for the perfect score in form of nested if and else and complex
   variable capturing and manipulation.

  This function thus, has all the required code to update the score if attempts are still >0 and go to next level and if attempts go to zero then what to do
  Thus, it is where the logic for correct and wrong answer input can be handled.

 b)score_calculator.js :

 This file has the logic to update the score as per attempts giving 3 score if attempts remaining are three, 2 on two and 1 on One.
 Thus, this forms the engaging part of the game where the user gets the score as per attempts and getting the top score is quiet a difficult task.

 if(attempts==3)
 {
   score=score+3;
 }

 else if(attempts==2)
 {
   score=score+2;
 }

 else if(attempts==1)
 {
   score=score+1;
 }


 c) question_screen_start_counter() and question_screen_go() function

  These two functions are responsible for creating and updating the counter associated with the level.
  The start_counter() function begins the counter and it stores in the tid variable that marks the state,
  which can be later on removed and are called as and when the question screen loads upon launch question button on level
  screen is triggered.

  -go() function takes the value of the counter i.e. the innerHTML value, parses it and then displays it
   by decrementing it.
  -This go() function can be manipulated by setting the initial value of the counter inner HTML as and when we
   load the UI to any value, thus if we start it to 20 then it is a twenty counter.
  -Also, the go() function specifies the rate at which the value should decrease, here we decrement it by one as a--
   but can be used to manipulate the value as required when we first fetch it as inner HTML.

   d)question_screen_createQuestionLevelData() function:

   This functions is responsible for the loading of the content of the Question screen onto its UI components defined
   which is called when the user clicks the launch question button on the level screen.

   -This has the code to fetch the data and display it on the elements. Any modification to the content of the page can be made here.


-->Instruction Screen

 a)level_screen_load_game_content() function

   This functions is responsible for the loading of the content of the Instruction screen onto its UI components defined
   which is called when the user clicks the start game button on the welcome screen.

   -This has the code to fetch the data and display it on the elements. Any modification to the content of the page can be made here.

-->Apart from these main features all the other UI that are being created be it the Welcome, Login, each Learning module screen, stats screen
have their corresponding UI creation function and if required UI loading function.

  -All these have their corresponding UI functions starting with their name like createWelcomeScreen, learnColors, learnCounting, learnAddition,
   learnSubtraction, learnMultiplication, learnDivision etc. function which have the UI definition and appending code and can be used to manipulate
   the UI and are called from the respective buttons that are being defined, created and appended at the welcome screen.

-->Other notable functions

  a)Keeping in mind the future reusability loadApp function is created. It is the first function that is being called when the screen loads and it helps
   to resolve the null object insertion issue discusssed in week 4 videos and is starting point of the game, thus any future changes just requires the change
   of function call within this function.

  b)startSession
   This function is called when the user logins to begin the session and can be used in general to modify the user data and set up initial parameters when the,
   user connects it the game.

B) Data Structures being used:

 --The game is being designed with the approach of making the game level data as readable as possible for the non-programmer, thus rather than using arrays to
 store the game level data used the concept of nested object where each object is being referred to by its name as Level x, where x can take any value as per
 levels associated and then its attributes written as name value pairs which can be easily manipulated and any alternations can be made very easily stored in
 the game_Levels.js file and this information is reused in all of the screen approximately.

 For example the game Levels information follows the following structure:

 "Level 1":
     {
      instruction:"In this level you will see red,yellow and green coloured balls and you will have to keep the count of red and yellow balls to solve the addition problem that will follow",
      type:"Addition",
      question:"What do we get on addition of number of red and yellow balls ?",
      answer:6,
      balls:3,
      ball_colors:
      [
        "red","green","yellow"
      ],
      ball_count:
      [
        4,6,2
      ]
    },

  declared within the global levels object and can be easily manipulated and is in human readable format thus, easy manipulation is made possible.

  --Similarly, for the user data the information is stored in the gameData.js which has all the attributes for the session when the user logs on and is Used
    to create the manipulate the game variables

    window.gameData={
       score:0,
       attempts:3,
       level:1,
       user:"",
       gamesPlayed:0,
       highestScore:0,
       gamesWon:0
    };

    It has the following structure and can be easily manipulated.

  --Apart from these a lot of arrays are used within the JS file to store the individual ball count, ball colour and balls that can be easily fetched by means
    of the index and values can be pushed by push function associated with the array.
