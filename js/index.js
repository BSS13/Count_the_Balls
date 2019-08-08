//Makes a call to loadApp function to resolve cannot append null child
// issues as discussed in week 4 videos to make body recognizable
window.onload=loadApp;

//Stores the Current Level for reusability in various screen that will be loaded like Question and Instruction Screen
window.current_level;


//Variables storing UI elements for Signup Screen declared global
var login_h1;
var login_h3;
var login_data_div;
var login_username_label;
var login_username_input;
var login_button;
var login_screen_error_message_paragraph;

//Welcome Screen varibles storing UI elements declared Global
var welcome_nav_div;
var welcome_ul;
var welcome_li_learn;
var welcome_li_start;
var welcome_li_logoff;
var welcome_li_stats;
var welcome_a_stats;
var welcome_a_learn;
var welcome_a_start;
var welcome_a_logoff;
var welcome_header;
var welcome_paragraph;
var welcome_button;

//Variables storing UI elements for checkStats Screen declared Global
var checkstats_button;
var checkstats_h1;
var checkstats_username_div;
var checkstats_username_label;
var checkstats_username_input;
var checkstats_gamesplayed_div;
var checkstats_gamesplayed_label;
var checkstats_gamesplayed_input;
var checkstats_gameswon_div;
var checkstats_gameswon_label;
var checkstats_gameswon_input;
var checkstats_highestscore_div;
var checkstats_highestscore_label;
var checkstats_highestscore_input;

//Variables storing UI elements for Learning Modules Screen declared Global
var learning_module_header;
var learning_module_paragraph;
var learning_module_button;
var learning_module_colors_button;
var learning_module_counting_button;
var learning_module_addition_button;
var learning_module_subtraction_button;
var learning_module_multiplication_button;
var learning_module_division_button;


//Variables storing UI elements for Colors Screen declared Global
var color_screen_header;
var color_screen_paragraph;
var color_screen_button;
var color_screen_table;
var color_screen_tr_head
var color_screen_th_symbol;
var color_screen_th_meaning;
var color_screen_tr_red;
var color_screen_td_red_symbol;
var color_screen_td_red_meaning;
var color_screen_tr_green;
var color_screen_td_green_symbol;
var color_screen_td_green_meaning;
var color_screen_tr_yellow;
var color_screen_td_yellow_symbol;
var color_screen_td_yellow_meaning;
var color_screen_tr_blue;
var color_screen_td_blue_symbol;
var color_screen_td_blue_meaning;
var color_screen_tr_pink;
var color_screen_td_pink_symbol;
var color_screen_td_pink_meaning;


//Variables storing UI elements for Learn Counting COunting Screen declared Global
var counting_screen_header;
var counting_screen_paragraph;
var counting_screen_button;
var counting_screen_table;
var counting_screen_tr_head
var counting_screen_th_symbol;
var counting_screen_th_meaning;
var counting_screen_tr_one;
var counting_screen_td_one_symbol;
var counting_screen_td_one_meaning;
var counting_screen_tr_two;
var counting_screen_td_two_symbol;
var counting_screen_td_two_meaning;
var counting_screen_tr_three;
var counting_screen_td_three_symbol;
var counting_screen_td_three_meaning;
var counting_screen_tr_four;
var counting_screen_td_four_symbol;
var counting_screen_td_four_meaning;
var counting_screen_tr_five;
var counting_screen_td_five_symbol;
var counting_screen_td_five_meaning;
var counting_screen_paragraph1;

//Variables storing UI elements for Addition Screen declared Global
var addition_screen_header;
var addition_screen_paragraph;
var addition_screen_button;
var addition_screen_table;
var addition_screen_tr_head
var addition_screen_th_symbol;
var addition_screen_th_meaning;
var addition_screen_tr_one;
var addition_screen_td_one_symbol;
var addition_screen_td_one_meaning;
var addition_screen_tr_two;
var addition_screen_td_two_symbol;
var addition_screen_td_two_meaning;
var addition_screen_paragraph1;

//Variables storing UI elements for Subtraction Screen declared Global
var subtraction_screen_header;
var subtraction_screen_paragraph;
var subtraction_screen_button;
var subtraction_screen_table;
var subtraction_screen_tr_head
var subtraction_screen_th_symbol;
var subtraction_screen_th_meaning;
var subtraction_screen_tr_one;
var subtraction_screen_td_one_symbol;
var subtraction_screen_td_one_meaning;
var subtraction_screen_td_two_symbol;
var subtraction_screen_tr_two;
var subtraction_screen_td_two_meaning;
var subtraction_screen_paragraph1;

//Variables storing UI elements for Multiplication Screen declared Global
var multiplication_screen_header;
var multiplication_screen_paragraph;
var multiplication_screen_button;
var multiplication_screen_table;
var multiplication_screen_tr_head
var multiplication_screen_th_symbol;
var multiplication_screen_th_meaning;
var multiplication_screen_tr_one;
var multiplication_screen_td_one_symbol;
var multiplication_screen_td_one_meaning;
var multiplication_screen_td_two_symbol;
var multiplication_screen_tr_two;
var multiplication_screen_td_two_meaning;
var multiplication_screen_paragraph1;

//Variables storing UI elements for Division Screen declared Global
var division_screen_header;
var division_screen_paragraph;
var division_screen_button;
var division_screen_table;
var division_screen_tr_head
var division_screen_th_symbol;
var division_screen_th_meaning;
var division_screen_tr_one;
var division_screen_td_one_symbol;
var division_screen_td_one_meaning;
var division_screen_td_two_symbol;
var division_screen_tr_two;
var division_screen_td_two_meaning;
var division_screen_paragraph1;


//Variables storing UI elements for Instruction Screen declared Global
var instruction_screen_level_number_area;
var instruction_screen_level_instruction_area;
var instruction_screen_level_type_area;
var instruction_screen_next_button;
var div1_instruction_screen;
var div2_instruction_screen;
var instruction_screen_main_div;


//UI Elemens for the Level Screen
var level_screen_divhead;
var level_screen_divbody;
var level_screen_divfoot;
var level_screen_divcomplete;
var level_screen_level_info_span;
var level_screen_level_time_span;
var level_screen_level_question_button;
var level_screen_next_instruction;
var level_screen_timer_div;
var level_screen_timer_tag;
var level_screen_ball_type_in_level=0;
var level_screen_ball_colors=[];
var level_screen_ball_individual_count=[];
var level_screen_total_balls=0;
var level_screen_index=0;
var balls=[];
var level_screen_timer;


//Question Screen UI Elements
var question_screen_score;
var question_screen_attempts;
var question_screen_timer;
var question_screen_question_paragraph;
var question_screen_answer_textbox;
var question_screen_check_button;
var question_screen_next_button;
var current_level_question;
var current_level_answer;
var div1_question_screen;
var div2_question_screen;
var div3_question_screen;
var question_screen_current_level;
var question_screen_tid;
var question_screen_error_message_paragraph;
var question_score=gameData.score;
var question_screen_restart_button;
var question_screen_welcome_button;

/*
 This function is the main starting point of the application i.e. the first function that is called when
 the application loads. This function calls the login screen of the application and does not accept any parameters
 , just call the login screen, and in general is designed to call the first page of the application i.e. if in future
 the developer decides to change the starting page then it can be changed by just changing the value in the loadApp function
 and can be simply called as loadApp() and it does not return any value.
*/
function loadApp()
{
  //Call to the login function
  login();
}

/*
login function is called by loadApp and it is responsible for creating the login page UI which has a input to
accepts the user name and begin the session on button click, from whereon the user session is stored by calling
another function startSession. It does not accept any parameters and within it it just has a input to accept the Username
and does not return any value and can be called as login()
 */
function login()
{
  document.body.innerHTML="";

  //Creating UI Elements by referring to ui.js
  login_h1=createH1("Count The Balls!","login_h1");
  var login_image=createimage("images/login_page.jpg","600px","218px","login_image");
  login_h3=createH3("Enter Your Name for the Session and begin the Journey!!","login_h3");
  login_username_label=createSpan("Username","login_username_label");
  login_username_input=createtextArea("","login_username_label");
  login_data_div=creatediv("","login_data_div");
  login_button=createButton("Login","login_button");
  login_screen_error_message_paragraph=createParagraph("","login_screen_error_message_paragraph");

  //Making a call to startSession function
  login_button.onclick=startSession;

  //Appending the elements to the body
  document.body.appendChild(login_h1);
  document.body.appendChild(login_image);
  document.body.appendChild(login_h3);
  document.body.appendChild(login_data_div);
  login_data_div.appendChild(login_username_label);
  login_data_div.appendChild(login_username_input);
  login_data_div.appendChild(login_button);
  login_data_div.appendChild(login_screen_error_message_paragraph);
  document.body.appendChild(login_data_div);
}

/*
This function here stores the username in the gameData for the corresponding user which can be referred later on
on any screen , this function in general can be used to make any intermediatory modifications between the user session begin
and loading the Welcome screen. It is just the in between function which only has the task to store the username and call the
Welcome Screen. It has no accpeting paramters and can be simply called by its name startSession() and has no return value.
*/
function startSession()
{
  //Storing the username into the GameData
  gameData.user=login_username_input.value;
  var user=login_username_input.value;

  /*  Code taken and searched through Stack Overflow Ref1
  Answer Link:https://stackoverflow.com/questions/10800355/remove-whitespaces-inside-a-string-in-javascript */
  var username_inserted=user.replace(/\s/g, "");

 //Try catch statement to counter for empty username entering the session.


  try
   {
    if(username_inserted == "")
     {
       throw "Please Enter a username for the session";
     }
    else
    {
      //Calling the Welcome Screen
      createWelcomeScreen();
    }
   }
 //Corresponding catch for the statement in case of entering empty input
 catch(err)
  {
    login_screen_error_message_paragraph.innerHTML=err;
  }
}

/*
 This function creates the UI screen after the user begins the session. The UI here displays the user name stored during the startSession
 and various buttons to get the user a head start, it has a link to stats, learning module, start quiz option and logoff option. It also displays
 the game guidelines and an additional button to  begin the game. It has no paramters to accept and no return value but creates the UI that Has
 various features.
 */
function createWelcomeScreen()
{
    //Clear the previous UI
    document.body.innerHTML="";
    var welcome_ul_div=creatediv("","welcome_ul_div");

    //Create the UI for the screen
    //UL list creation to contain the li composed of buttons.
    welcome_ul=createul("welcome_ul");

    //Create the Learn Module button
    welcome_a_learn=createButton("Learn","welcome_a_learn");
    //Associationg the onclick event with the button to start Learning Module
    welcome_a_learn.onclick=startLearningModule;


    //Create the Start Game Button
    welcome_a_start=createButton("Start","welcome_a_start");
    //Assigning click to the startGame function
    welcome_a_start.onclick=startGame;


    //Create Button for the Stats Screen
    welcome_a_stats=createButton("Stats","welcome_a_stats");
    //Assigning click to go to the checkStats screen
    welcome_a_stats.onclick=checkStats;


    //Create the button to logoff
    welcome_a_logoff=createButton("LogOff","welcome_a_logoff");
    //Assigning click to the logout function
    welcome_a_logoff.onclick=logout;


    //Appending the button to the ul to form a navbar kind of a thing
    welcome_li_learn=createli("","welcome_li_learn");
    welcome_li_start=createli("","welcome_li_start");
    welcome_li_stats=createli("","welcome_li_stats");
    welcome_li_logoff=createli("","welcome_li_logoff");

    welcome_li_learn.appendChild(welcome_a_learn);
    welcome_li_start.appendChild(welcome_a_start);
    welcome_li_stats.appendChild(welcome_a_stats);
    welcome_li_logoff.appendChild(welcome_a_logoff);

    welcome_ul.appendChild(welcome_li_learn);
    welcome_ul.appendChild(welcome_li_start);
    welcome_ul.appendChild(welcome_li_stats);
    welcome_ul.appendChild(welcome_li_logoff);

    welcome_ul_div.appendChild(welcome_ul);

    //Try Catch to handle if the user data gets washed ways from the game data

    try
     {
       //If user is empty then catch the bug
       if(gameData.user == "")
        {
          throw "Guest";
        }
       else
        {
         //Header to display the current User
         welcome_header=createH1("Welcome "+gameData.user,"welcome_header");
        }
     }

    catch(err)
     {
       //Create the header to display the username as Guest
        welcome_header=createH1("Welcome "+err,"welcome_header");
     }


    //Paragraph to give the guideline for the Game
    welcome_paragraph=createParagraph("The Game is dedicated so as to feel the power of Mathmatics.This game is designed with the sole purpose of combining maths with fun and applying the logics in the best way possible. Although the learning module is basic but gets he user know various symbols and colours that will be used in the game and after some basic brush up the heat will rise to test even the greats!! So are you Ready for the Challenge?","welcome_paragraph");
    var welcome_paragraph1=createParagraph("The game has a lot of levels each defined with its type and each level will first display the instruction which user should read carefully to note the level type as the question will be based on the level and what colour balls the user must note using which the question is solved, then will come the level screen where the balls will be displayed and finally the question screen which must be solved within 10 seconds","welcome_paragraph1");
    var welcome_paragraph2=createParagraph("So keep in mind the score is updated based on the attempts remaining so more the attempts remaining higher the score assigned in each level and Master is the one who attains the highest score possible,Don't wait jump straight into the learning modules and go through the basics and then start your Journey and prove that you are a Mathematics Master!!!!!!!!!!","welcome_paragraph2");
    //Create an additional button for start game that calls the same function as called by above created list button
    welcome_button=createButton("Start Game","welcome_button");
    document.body.appendChild(welcome_ul_div);
    document.body.appendChild(welcome_header);
    document.body.appendChild(welcome_paragraph);
    document.body.appendChild(welcome_paragraph1);
    document.body.appendChild(welcome_paragraph2);
    document.body.appendChild(welcome_button);
    //Assigning click to the startGame function
    welcome_button.onclick=startGame;
}

/*
This function neither returns nor accepts any parameter but is the main switch to begin the game and has a call to two important
functions namely createInstructionScreenUI and the createLevelInstruction that set up the Instruction Screen for the Game
*/
function startGame()
{
  //Call to the Instruction Screen UI function that generates the UI for the Instruction Screen
  createInstructionScreenUI();

  //Cal to create Instruction function that loads the level data from the gameLevels and append the required texts onto the UI elements
  createLevelInstruction();
}

/*
This function is activated upon the learn button as on the welcome Screen which has the basic learning module lessons to get refreshed
on the areas being discussed and get familiar with the concepts involved. It is simply called as startLearningModule() and has no additional
parameters or return values.
*/
function startLearningModule()
{
   document.body.innerHTML="";
   //Create the Back button to go back to the Welcome Screen
   learning_module_button=createButton("Back","learning_module_button");
   learning_module_button.onclick=createWelcomeScreen;
   document.body.appendChild(learning_module_button);

   //A Complex UI in in ui.js for the header section
   var learning_module_header_section=createComplexDiv("","learning_module_div","Learning Modules","learning_module_header","images/learn_icon.jpg","620px","320px","learning_module_image","This is just a short refresher on the concpets being used in the game for the young ones to get what is the concept behind addition,subtraction,multiplication and division. If you have the basic knowledge then you must go through the colours module only to et familiar with the colours being used in the game .Try to follow the sequence below and get your Journey towards being the Master Underway!!!!!!.","learning_module_paragraph");
   //Appending the element
   document.body.appendChild(learning_module_header_section);

   //Create the learn Colours button to get familiar with the colours being used in the game
   learning_module_colors_button=createButton("Colours","learning_module_colors_button");
   //Associaiting the learnColors function with the button.
   learning_module_colors_button.onclick=learnColors;

   //Create button to go to the Counting Lesson Module
   learning_module_counting_button=createButton("Counting","learning_module_counting_button");
   //Associating the learnCounting function with the button
   learning_module_counting_button.onclick=learnCounting;

   //Addition button creation to go to the Addition Learning Module
   learning_module_addition_button=createButton("Addition","learning_module_addition_button");
   //Associating the learnAddition button with the button click
   learning_module_addition_button.onclick=learnAddition;

   //Subtraction button creation to go to the Subtraction Module
   learning_module_subtraction_button=createButton("Subtraction","learning_module_subtraction_button");
   //Associating the learn subtraction button with the button
   learning_module_subtraction_button.onclick=learnSubtraction;

   //Multiplication button creation to go to the Multiplication Module
   learning_module_multiplication_button=createButton("Multiplication","learning_module_multiplication_button");
   //Associating the learn Multiplication button with the button
   learning_module_multiplication_button.onclick=learnMultiplication;

   //Division button creation to go to the division Module
   learning_module_division_button=createButton("Division","learning_module_division_button");
   //Associating the learn Division button with the button
   learning_module_division_button.onclick=learnDivision;


   //Appending the buttons to the screen.
   document.body.appendChild(learning_module_colors_button);
   document.body.appendChild(learning_module_counting_button);
   document.body.appendChild(learning_module_addition_button);
   document.body.appendChild(learning_module_subtraction_button);
   document.body.appendChild(learning_module_multiplication_button);
   document.body.appendChild(learning_module_division_button);

}

/*
This function does not accept any parameter and neither returns any value. It is simply called as learnColors() by the learn color button
as created on the learn module screen and has the necessary UI components to learn and get familiar with the colors being used in the
application. It displays the colors in the tabular form.
*/
function learnColors()
{
  //Clear the UI
  document.body.innerHTML="";

  //Create the Back Button
  color_screen_button=createButton("Back","color_screen_button");
  color_screen_button.onclick=startLearningModule;
  document.body.appendChild(color_screen_button);

  //Create the Header using Complex UI in ui.js
  var color_screen_header_section=createComplexDiv("","color_screen_div","Colours","color_screen_header","images/colors_icon.jpg","620px","320px","learning_module_image","The Following symbols of specific colours are being used within the Game. It's Good time to get Familiar with them!!!!!!","color_screen_paragraph");
  document.body.appendChild(color_screen_header_section);

  //Create the table strucuture from one defined in ui.js
  var color_screen_table=reusableTable("","screen_table","color_screen_table","color_screen_tr_head","Symbol","color_screen_th_symbol","Meaning","color_screen_th_meaning");
  document.body.appendChild(color_screen_table);

  //Fetch the Required table for appending
  var table=document.querySelector('.color_screen_table');


  //Creation of td (red coloured ball) and its appending
  color_screen_tr_red=createtr("color_screen_tr_red");
  color_screen_td_red_symbol=createtd("","color_screen_td_red_symbol");
  //Red colored ball creation
  var red=creatediv("","red");
  color_screen_td_red_symbol.appendChild(red);
  color_screen_td_red_meaning=createtd("This is RED colour Ball","color_screen_td_red_meaning");
  color_screen_tr_red.appendChild(color_screen_td_red_symbol);
  color_screen_tr_red.appendChild(color_screen_td_red_meaning);
  table.appendChild(color_screen_tr_red);

  //Creation of td (green coloured ball) and its appending
  color_screen_tr_green=createtr("color_screen_tr_green");
  color_screen_td_green_symbol=createtd("","color_screen_td_green_symbol");
  var green=creatediv("","green");
  color_screen_td_green_symbol.appendChild(green);
  color_screen_td_green_meaning=createtd("This is GREEN colour Ball","color_screen_td_green_meaning");
  color_screen_tr_green.appendChild(color_screen_td_green_symbol);
  color_screen_tr_green.appendChild(color_screen_td_green_meaning);
  table.appendChild(color_screen_tr_green);

  //Creation of td (blue coloured ball) and its appending
  color_screen_tr_blue=createtr("color_screen_tr_blue");
  color_screen_td_blue_symbol=createtd("","color_screen_td_blue_symbol");
  var blue=creatediv("","blue");
  color_screen_td_blue_symbol.appendChild(blue);
  color_screen_td_blue_meaning=createtd("This is BLUE colour Ball","color_screen_td_blue_meaning");
  color_screen_tr_blue.appendChild(color_screen_td_blue_symbol);
  color_screen_tr_blue.appendChild(color_screen_td_blue_meaning);
  table.appendChild(color_screen_tr_blue);

  //Creation of td (yellow coloured ball) and its appending
  color_screen_tr_yellow=createtr("color_screen_tr_yellow");
  color_screen_td_yellow_symbol=createtd("","color_screen_td_yellow_symbol");
  var yellow=creatediv("","yellow");
  color_screen_td_yellow_symbol.appendChild(yellow);
  color_screen_td_yellow_meaning=createtd("This is YELLOW colour Ball","color_screen_td_yellow_meaning");
  color_screen_tr_yellow.appendChild(color_screen_td_yellow_symbol);
  color_screen_tr_yellow.appendChild(color_screen_td_yellow_meaning);
  table.appendChild(color_screen_tr_yellow);

  //Creation of td (pink coloured ball) and its appending
  color_screen_tr_pink=createtr("color_screen_tr_pink");
  color_screen_td_pink_symbol=createtd("","color_screen_td_pink_symbol");
  var pink=creatediv("","pink");
  color_screen_td_pink_symbol.appendChild(pink);
  color_screen_td_pink_meaning=createtd("This is PINK colour Ball","color_screen_td_pink_meaning");
  color_screen_tr_pink.appendChild(color_screen_td_pink_symbol);
  color_screen_tr_pink.appendChild(color_screen_td_pink_meaning);
  table.appendChild(color_screen_tr_pink);

}

/*
  This no return and no parameter function is simply called as learnCounting() from button created previously
  on the learn Module screen and it contains all the information for getting started with learning. It is basically
  designed for younger kids to get a feel of learning.
*/
function learnCounting()
{
  //Clear the UI
  document.body.innerHTML="";

  //Create the Back Button
  counting_screen_button=createButton("Back","counting_screen_button");
  counting_screen_button.onclick=startLearningModule;
  document.body.appendChild(counting_screen_button);

  //Create the Header using Complex UI in ui.js
  var counting_screen_header_section=createComplexDiv("","counting_screen_div","Learn Counting","counting_screen_header","images/counting_icon.jpg","620px","320px","learning_counting_image","The Following symbols will help you to start the basics of counting on how to count smaller number by comparing them with the number of object you see and then later define what the count signifies and then figure out the mathmematical operations","counting_screen_paragraph");
  document.body.appendChild(counting_screen_header_section);

  //Create the table strucuture from one defined in ui.js
  var counting_screen_table=reusableTable("","screen_table","counting_screen_table","counting_screen_tr_head","Symbol","counting_screen_th_symbol","Meaning","counting_screen_th_meaning");
  document.body.appendChild(counting_screen_table);

  //Fetch the required table from above for appending
  var table=document.querySelector('.counting_screen_table');

  //Creating row one for the table and appending it
  counting_screen_tr_one=createtr("counting_screen_tr_one");
  counting_screen_td_one_symbol=createtd("","counting_screen_td_one_symbol");
  var counting_one=creatediv("","count_ball");
  counting_screen_td_one_symbol.appendChild(counting_one);
  counting_screen_td_one_meaning=createtd("This counts to one","counting_screen_td_one_meaning");
  counting_screen_tr_one.appendChild(counting_screen_td_one_symbol);
  counting_screen_tr_one.appendChild(counting_screen_td_one_meaning);
  table.appendChild(counting_screen_tr_one);

  //Creating row two for the table and appending it
  counting_screen_tr_two=createtr("counting_screen_tr_two");
  counting_screen_td_two_symbol=createtd("","counting_screen_td_two_symbol");
  var ctwo1=creatediv("","count_ball");
  var ctwo2=creatediv("","count_ball");
  counting_screen_td_two_symbol.appendChild(ctwo1);
  counting_screen_td_two_symbol.appendChild(ctwo2);
  counting_screen_td_two_meaning=createtd("This counts to Two","counting_screen_td_two_meaning");
  counting_screen_tr_two.appendChild(counting_screen_td_two_symbol);
  counting_screen_tr_two.appendChild(counting_screen_td_two_meaning);
  table.appendChild(counting_screen_tr_two);

  //Creating row three for the table and appending it
  counting_screen_tr_three=createtr("counting_screen_tr_three");
  counting_screen_td_three_symbol=createtd("","counting_screen_td_three_symbol");
  var cthree1=creatediv("","count_ball");
  var cthree2=creatediv("","count_ball");
  var cthree3=creatediv("","count_ball");
  counting_screen_td_three_symbol.appendChild(cthree1);
  counting_screen_td_three_symbol.appendChild(cthree2);
  counting_screen_td_three_symbol.appendChild(cthree3);
  counting_screen_td_three_meaning=createtd("This counts to Three","counting_screen_td_three_meaning");
  counting_screen_tr_three.appendChild(counting_screen_td_three_symbol);
  counting_screen_tr_three.appendChild(counting_screen_td_three_meaning);
  table.appendChild(counting_screen_tr_three);

  //Creating row four for the table and appending it
  counting_screen_tr_four=createtr("counting_screen_tr_four");
  counting_screen_td_four_symbol=createtd("","counting_screen_td_four_symbol");
  var cfour1=creatediv("","count_ball");
  var cfour2=creatediv("","count_ball");
  var cfour3=creatediv("","count_ball");
  var cfour4=creatediv("","count_ball");
  counting_screen_td_four_symbol.appendChild(cfour1);
  counting_screen_td_four_symbol.appendChild(cfour2);
  counting_screen_td_four_symbol.appendChild(cfour3);
  counting_screen_td_four_symbol.appendChild(cfour4);
  counting_screen_td_four_meaning=createtd("This counts to Four","counting_screen_td_four_meaning");
  counting_screen_tr_four.appendChild(counting_screen_td_four_symbol);
  counting_screen_tr_four.appendChild(counting_screen_td_four_meaning);
  table.appendChild(counting_screen_tr_four);

  //Creating row five for the table and appending it
  counting_screen_tr_five=createtr("counting_screen_tr_five");
  counting_screen_td_five_symbol=createtd("","counting_screen_td_five_symbol");
  var cfive1=creatediv("","count_ball");
  var cfive2=creatediv("","count_ball");
  var cfive3=creatediv("","count_ball");
  var cfive4=creatediv("","count_ball");
  var cfive5=creatediv("","count_ball");
  counting_screen_td_five_symbol.appendChild(cfive1);
  counting_screen_td_five_symbol.appendChild(cfive2);
  counting_screen_td_five_symbol.appendChild(cfive3);
  counting_screen_td_five_symbol.appendChild(cfive4);
  counting_screen_td_five_symbol.appendChild(cfive5);
  counting_screen_td_five_meaning=createtd("This counts to Five","counting_screen_td_five_meaning");
  counting_screen_tr_five.appendChild(counting_screen_td_five_symbol);
  counting_screen_tr_five.appendChild(counting_screen_td_five_meaning);
  table.appendChild(counting_screen_tr_five);

  //Additonal Concluding paragraph
  counting_screen_paragraph1=createParagraph("Thus carrying on you can count the coming number and as a Exercise just get yourself familiar with number before going to other modules","color_screen_paragraph");
  document.body.appendChild(counting_screen_paragraph1);

}


/*
This function is called when addition button is clicked on the learn screen by simply typing learnAddition() and it is responsible
for generating the UI for the page and displaying the addition learning material and it does not accept any parameters and has no return type.
*/
function learnAddition()
{
  //Clear the previous UI
  document.body.innerHTML="";

  //Create the Back button to go to Learning Screen
  addition_screen_button=createButton("Back","addition_screen_button");
  addition_screen_button.onclick=startLearningModule;
  document.body.appendChild(addition_screen_button);

  //Create the Header using Complex UI in ui.js
  var addition_screen_header_section=createComplexDiv("","addition_screen_div","Learn Addition","addition_screen_header","images/add_icon.png","320px","320px","learning_addition_image","This module deals with addition which implies to add. It is represented by the symbol + and is referred as Addition or Add. Go through the following examples to get a start what it is all about.","addition_screen_paragraph");
  document.body.appendChild(addition_screen_header_section);

  //Create the table strucuture from one defined in ui.js
  var addition_screen_table=reusableTable("","screen_table","addition_screen_table","addition_screen_tr_head","Symbol","addition_screen_th_symbol","Meaning","addition_screen_th_meaning");
  document.body.appendChild(addition_screen_table);

  //Fetching the required table from above and appending it
  var table=document.querySelector('.addition_screen_table');

  //Create and append row one for the table
  addition_screen_tr_one=createtr("addition_screen_tr_one");
  addition_screen_td_one_symbol=createtd("","addition_screen_td_one_symbol");
  var cone1=creatediv("","count_ball");
  var cone2=creatediv("","count_ball");
  var cone3=creatediv("","count_ball");
  var cone4=creatediv("","count_ball");
  var addsymbol1=creatediv("+","symbol");
  var equalsymbol1=creatediv("=","symbol");
  addition_screen_td_one_symbol.appendChild(cone1);
  addition_screen_td_one_symbol.appendChild(addsymbol1);
  addition_screen_td_one_symbol.appendChild(cone2);
  addition_screen_td_one_symbol.appendChild(equalsymbol1);
  addition_screen_td_one_symbol.appendChild(cone3);
  addition_screen_td_one_symbol.appendChild(cone4);
  addition_screen_td_one_meaning=createtd("One when added with one gives two","addition_screen_td_one_meaning");
  addition_screen_tr_one.appendChild(addition_screen_td_one_symbol);
  addition_screen_tr_one.appendChild(addition_screen_td_one_meaning);
  table.appendChild(addition_screen_tr_one);

  //Create and append row two for the table
  addition_screen_tr_two=createtr("addition_screen_tr_two");
  addition_screen_td_two_symbol=createtd("","addition_screen_td_two_symbol");
  var ctwo1=creatediv("","count_ball");
  var ctwo2=creatediv("","count_ball");
  var ctwo3=creatediv("","count_ball");
  var ctwo4=creatediv("","count_ball");
  var ctwo5=creatediv("","count_ball");
  var ctwo6=creatediv("","count_ball");
  var addsymbol2=creatediv("+","symbol");
  var equalsymbol2=creatediv("=","symbol");
  addition_screen_td_two_symbol.appendChild(ctwo1);
  addition_screen_td_two_symbol.appendChild(ctwo2);
  addition_screen_td_two_symbol.appendChild(addsymbol2);
  addition_screen_td_two_symbol.appendChild(ctwo3);
  addition_screen_td_two_symbol.appendChild(equalsymbol2);
  addition_screen_td_two_symbol.appendChild(ctwo4);
  addition_screen_td_two_symbol.appendChild(ctwo5);
  addition_screen_td_two_symbol.appendChild(ctwo6);
  addition_screen_td_two_meaning=createtd("Adding one to two gives three","addition_screen_td_two_meaning");
  addition_screen_tr_two.appendChild(addition_screen_td_two_symbol);
  addition_screen_tr_two.appendChild(addition_screen_td_two_meaning);
  table.appendChild(addition_screen_tr_two);

   //Create the concluding paragraph
  counting_screen_paragraph1=createParagraph("Thus generally, adding one to any number will make the number one more than the number and similarly if we add any number say a to other number b then the number a increases by b i.e it makes a jump in the counting you learnt previously by b steps.","addition_screen_paragraph1");
  document.body.appendChild(counting_screen_paragraph1);

}

/*
This function is called when subtraction button is clicked on the learn screen by simply typing learnSubtraction() and it is responsible
for generating the UI for the page and displaying the subtraction learning material and it does not accept any parameters and has no return type.
*/
function learnSubtraction()
{
  //Clear the previous UI
  document.body.innerHTML="";
  //Create the Back button to go to Learning Screen
  subtraction_screen_button=createButton("Back","subtraction_screen_button");
  subtraction_screen_button.onclick=startLearningModule;
  document.body.appendChild(subtraction_screen_button);

  //Create the Header using Complex UI in ui.js
  var subtraction_screen_header_section=createComplexDiv("","subtraction_screen_div","Learn Subtraction","subtraction_screen_header","images/subtract_icon.png","320px","320px","learning_subtraction_image","This module deals with subtraction which implies to subtract. It is represented by the symbol - and is referred as Subtraction or Subtract. Go through the following examples to get a start what it is all about.","subtraction_screen_paragraph");
  document.body.appendChild(subtraction_screen_header_section);

  //Create the table strucuture from one defined in ui.js
  var subtraction_screen_table=reusableTable("","screen_table","subtraction_screen_table","subtraction_screen_tr_head","Symbol","subtraction_screen_th_symbol","Meaning","subtraction_screen_th_meaning");
  document.body.appendChild(subtraction_screen_table);

  //Fetch the required table from above and append the required elements below
  var table=document.querySelector('.subtraction_screen_table');

  //Create and append row one for the table
  subtraction_screen_tr_one=createtr("subtraction_screen_tr_one");
  subtraction_screen_td_one_symbol=createtd("","subtraction_screen_td_one_symbol");
  var cone1=creatediv("","count_ball");
  var cone2=creatediv("","count_ball");
  var cone3=creatediv("Zero","empty");
  var minussymbol1=creatediv("-","symbol");
  var equalsymbol1=creatediv("=","symbol");
  subtraction_screen_td_one_symbol.appendChild(cone1);
  subtraction_screen_td_one_symbol.appendChild(minussymbol1);
  subtraction_screen_td_one_symbol.appendChild(cone2);
  subtraction_screen_td_one_symbol.appendChild(equalsymbol1);
  subtraction_screen_td_one_symbol.appendChild(cone3);
  subtraction_screen_td_one_meaning=createtd("One when subtracted with one gives zero","subtraction_screen_td_one_meaning");
  subtraction_screen_tr_one.appendChild(subtraction_screen_td_one_symbol);
  subtraction_screen_tr_one.appendChild(subtraction_screen_td_one_meaning);
  table.appendChild(subtraction_screen_tr_one);


  //Create and append row two for the table
  subtraction_screen_tr_two=createtr("subtraction_screen_tr_two");
  subtraction_screen_td_two_symbol=createtd("","subtraction_screen_td_two_symbol");
  var ctwo1=creatediv("","count_ball");
  var ctwo2=creatediv("","count_ball");
  var ctwo3=creatediv("","count_ball");
  var ctwo4=creatediv("","count_ball");
  var minussymbol2=creatediv("-","symbol");
  var equalsymbol2=creatediv("=","symbol");
  subtraction_screen_td_two_symbol.appendChild(ctwo1);
  subtraction_screen_td_two_symbol.appendChild(ctwo2);
  subtraction_screen_td_two_symbol.appendChild(minussymbol2);
  subtraction_screen_td_two_symbol.appendChild(ctwo3);
  subtraction_screen_td_two_symbol.appendChild(equalsymbol2);
  subtraction_screen_td_two_symbol.appendChild(ctwo4);
  subtraction_screen_td_two_meaning=createtd("Subtracting one from two gives one","subtraction_screen_td_two_meaning");
  subtraction_screen_tr_two.appendChild(subtraction_screen_td_two_symbol);
  subtraction_screen_tr_two.appendChild(subtraction_screen_td_two_meaning);
  table.appendChild(subtraction_screen_tr_two);

  //Create the concluding paragraph
  counting_screen_paragraph1=createParagraph("Thus generally, subtracting one from any number will make the number one less than the number and similarly if we subtract any number say b from other number a then the number a decreases by b i.e it makes a jumps doown in the counting you learnt previously by b steps.","subtraction_screen_paragraph1");
  document.body.appendChild(counting_screen_paragraph1);

}

/*
This function is called when multiplication button is clicked on the learn screen by simply typing learnMultiplication() and it is responsible
for generating the UI for the page and displaying the multiplication learning material and it does not accept any parameters and has no return type.
*/
function learnMultiplication()
{
  //Clear the previous UI
  document.body.innerHTML="";
  //Create the Back button to go to Learning Screen
  multiplication_screen_button=createButton("Back","multiplication_screen_button");
  multiplication_screen_button.onclick=startLearningModule;
  document.body.appendChild(multiplication_screen_button);

  //Create the Header using Complex UI in ui.js
  var multiplication_screen_header_section=createComplexDiv("","multiplication_screen_div","Learn Multiplication","multiplication_screen_header","images/multiply_icon.png","320px","320px","learning_multiplication_image","This module deals with multiplication which implies to multiply. It is represented by the symbol * and is referred as Multiplication or Multiply. Go through the following examples to get a start what it is all about.","multiplication_screen_paragraph");
  document.body.appendChild(multiplication_screen_header_section);

  //Create the table strucuture from one defined in ui.js
  var multiplication_screen_table=reusableTable("","screen_table","multiplication_screen_table","multiplication_screen_tr_head","Symbol","multiplication_screen_th_symbol","Meaning","multiplication_screen_th_meaning");
  document.body.appendChild(multiplication_screen_table);

  //Fetching for later appending
  var table=document.querySelector('.multiplication_screen_table');

  //Create and append row one for the table
  multiplication_screen_tr_one=createtr("multiplication_screen_tr_one");
  multiplication_screen_td_one_symbol=createtd("","multiplication_screen_td_one_symbol");
  var cone1=creatediv("","count_ball");
  var cone2=creatediv("","count_ball");
  var cone3=creatediv("","count_ball");
  var multiplysymbol1=creatediv("*","symbol");
  var equalsymbol1=creatediv("=","symbol");
  multiplication_screen_td_one_symbol.appendChild(cone1);
  multiplication_screen_td_one_symbol.appendChild(multiplysymbol1);
  multiplication_screen_td_one_symbol.appendChild(cone2);
  multiplication_screen_td_one_symbol.appendChild(equalsymbol1);
  multiplication_screen_td_one_symbol.appendChild(cone3);
  multiplication_screen_td_one_meaning=createtd("One when multiplied with one gives one","multiplication_screen_td_one_meaning");
  multiplication_screen_tr_one.appendChild(multiplication_screen_td_one_symbol);
  multiplication_screen_tr_one.appendChild(multiplication_screen_td_one_meaning);
  table.appendChild(multiplication_screen_tr_one);


  //Create and append row two for the table
  multiplication_screen_tr_two=createtr("multiplication_screen_tr_two");
  multiplication_screen_td_two_symbol=createtd("","multiplication_screen_td_two_symbol");
  var ctwo1=creatediv("","count_ball");
  var ctwo2=creatediv("","count_ball");
  var ctwo3=creatediv("","count_ball");
  var ctwo4=creatediv("","count_ball");
  var ctwo5=creatediv("","count_ball");
  var ctwo6=creatediv("","count_ball");
  var ctwo7=creatediv("","count_ball");
  var ctwo8=creatediv("","count_ball");
  var multiplysymbol2=creatediv("*","symbol");
  var equalsymbol2=creatediv("=","symbol");
  multiplication_screen_td_two_symbol.appendChild(ctwo1);
  multiplication_screen_td_two_symbol.appendChild(ctwo2);
  multiplication_screen_td_two_symbol.appendChild(multiplysymbol2);
  multiplication_screen_td_two_symbol.appendChild(ctwo3);
  multiplication_screen_td_two_symbol.appendChild(ctwo4);
  multiplication_screen_td_two_symbol.appendChild(equalsymbol2);
  multiplication_screen_td_two_symbol.appendChild(ctwo5);
  multiplication_screen_td_two_symbol.appendChild(ctwo6);
  multiplication_screen_td_two_symbol.appendChild(ctwo7);
  multiplication_screen_td_two_symbol.appendChild(ctwo8);
  multiplication_screen_td_two_meaning=createtd("Multiplying two by two gives four","multiplication_screen_td_two_meaning");
  multiplication_screen_tr_two.appendChild(multiplication_screen_td_two_symbol);
  multiplication_screen_tr_two.appendChild(multiplication_screen_td_two_meaning);
  table.appendChild(multiplication_screen_tr_two);

  //Create the concluding paragraph
  multiplication_screen_paragraph1=createParagraph("Thus generally, multiplying anhy number by one gives the same number and on general terms if we are to multiply a by b then the result will be equal to what we get if we add a b times","multiplication_screen_paragraph1");
  document.body.appendChild(multiplication_screen_paragraph1);
}

/*
This function is called when division button is clicked on the learn screen by simply typing learnDivision() and it is responsible
for generating the UI for the page and displaying the division learning material and it does not accept any parameters and has no return type.
*/
function learnDivision()
{
  //Clear the previous UI
  document.body.innerHTML="";
  //Create the Back button to go to Learning Screen
  division_screen_button=createButton("Back","division_screen_button");
  division_screen_button.onclick=startLearningModule;
  document.body.appendChild(division_screen_button);

  //Create the Header using Complex UI in ui.js
  var division_screen_header_section=createComplexDiv("","division_screen_div","Learn Division","division_screen_header","images/divide_icon.png","320px","320px","learning_division_image","This module deals with division which implies to divide. It is represented by the symbol / and is referred as Division or Divide. Go through the following examples to get a start what it is all about.","division_screen_paragraph");
  document.body.appendChild(division_screen_header_section);

  //Create the table strucuture from one defined in ui.js
  var division_screen_table=reusableTable("","screen_table","division_screen_table","division_screen_tr_head","Symbol","division_screen_th_symbol","Meaning","division_screen_th_meaning");
  document.body.appendChild(division_screen_table);

  //Fetching for later append
  var table=document.querySelector('.division_screen_table');


  //Create and append row one for the table
  division_screen_tr_one=createtr("division_screen_tr_one");
  division_screen_td_one_symbol=createtd("","division_screen_td_one_symbol");
  var cone1=creatediv("","count_ball");
  var cone2=creatediv("","count_ball");
  var cone3=creatediv("","count_ball");
  var divideysymbol1=creatediv("/","symbol");
  var equalsymbol1=creatediv("=","symbol");
  division_screen_td_one_symbol.appendChild(cone1);
  division_screen_td_one_symbol.appendChild(divideysymbol1);
  division_screen_td_one_symbol.appendChild(cone2);
  division_screen_td_one_symbol.appendChild(equalsymbol1);
  division_screen_td_one_symbol.appendChild(cone3);
  division_screen_td_one_meaning=createtd("One when divided by one gives one","division_screen_td_one_meaning");
  division_screen_tr_one.appendChild(division_screen_td_one_symbol);
  division_screen_tr_one.appendChild(division_screen_td_one_meaning);
  table.appendChild(division_screen_tr_one);


  //Create and append row two for the table
  division_screen_tr_two=createtr("division_screen_tr_two");
  division_screen_td_two_symbol=createtd("","division_screen_td_two_symbol");
  var ctwo1=creatediv("","count_ball");
  var ctwo2=creatediv("","count_ball");
  var ctwo3=creatediv("","count_ball");
  var ctwo4=creatediv("","count_ball");
  var ctwo5=creatediv("","count_ball");
  var ctwo6=creatediv("","count_ball");
  var ctwo7=creatediv("","count_ball");
  var ctwo8=creatediv("","count_ball");
  var dividesymbol2=creatediv("/","symbol");
  var equalsymbol2=creatediv("=","symbol");
  division_screen_td_two_symbol.appendChild(ctwo1);
  division_screen_td_two_symbol.appendChild(ctwo2);
  division_screen_td_two_symbol.appendChild(ctwo3);
  division_screen_td_two_symbol.appendChild(ctwo4);
  division_screen_td_two_symbol.appendChild(dividesymbol2);
  division_screen_td_two_symbol.appendChild(ctwo5);
  division_screen_td_two_symbol.appendChild(ctwo6);
  division_screen_td_two_symbol.appendChild(equalsymbol2);
  division_screen_td_two_symbol.appendChild(ctwo7);
  division_screen_td_two_symbol.appendChild(ctwo8);
  division_screen_td_two_meaning=createtd("Dividing four by two gives two","division_screen_td_two_meaning");
  division_screen_tr_two.appendChild(division_screen_td_two_symbol);
  division_screen_tr_two.appendChild(division_screen_td_two_meaning);
  table.appendChild(division_screen_tr_two);

  //Create the concluding paragraph
  division_screen_paragraph1=createParagraph("Thus generally, dividing any number by one gives the number itself. Thus, on the general broad terms if a number a is completely divisible by other number b then it gives how many times we should add b to get a i.e waht number of b's combined when added will give 'a',So we are all done Remember it is just the basic introduction regarding the concepts being used, Just go through the Guidelines and Give the Game a Try!!!!!! ","division_screen_paragraph1");
  document.body.appendChild(division_screen_paragraph1);

}


/*
This no return and no argument function that displays the stats for the user that is currently involved in the session
and is called simply bby checkStats() from the Welcome Screen.
*/
function checkStats()
{
  //Clear the UI
  document.body.innerHTML="";

  //Create the UI for the page
  checkstats_username_div=creatediv("","checkstats_username_div");
  checkstats_gamesplayed_div=creatediv("","checkstats_gamesplayed_div");
  checkstats_gameswon_div=creatediv("","checkstats_gameswon_div");
  checkstats_highestscore_div=creatediv("","checkstats_highestscore_div");

  //Create the Back Button to go back to the Welcome Screen
  checkstats_button=createButton("Back","checkstats_button");
  //Associate the click logic with the buton by going to the startSession function linkage
  checkstats_button.onclick=startSession;

  //Create the Screen Header
  checkstats_h1=createH1("Stats","checkstats_h1");
  var stats_image=createimage("images/stats.png","320px","160px","stats_image");

  //Create the label and input to display the Username
  checkstats_username_label=createSpan("Username","checkstats_username_label");
  checkstats_username_input=createtextArea("","checkstats_username_input");
  checkstats_username_div.appendChild(checkstats_username_label);
  checkstats_username_div.appendChild(checkstats_username_input);

  //Create the label and input to display the Games Played
  checkstats_gamesplayed_label=createSpan("Games Played","checkstats_gamesplayed_label");
  checkstats_gamesplayed_input=createtextArea("","checkstats_gamesplayed_input");
  checkstats_gamesplayed_input.value=gameData.gamesPlayed;
  checkstats_gamesplayed_div.appendChild(checkstats_gamesplayed_label);
  checkstats_gamesplayed_div.appendChild(checkstats_gamesplayed_input);

  //Create the label and input to display the Games Won
  checkstats_gameswon_label=createSpan("Games Won","checkstats_gameswon_label");
  checkstats_gameswon_input=createtextArea("","checkstats_gameswon_input");
  checkstats_gameswon_input.value=gameData.gamesWon;
  checkstats_gameswon_div.appendChild(checkstats_gameswon_label);
  checkstats_gameswon_div.appendChild(checkstats_gameswon_input);

  //Create the label and input to display the Highest Score
  checkstats_highestscore_label=createSpan("Highest Score","checkstats_highestscore_label");
  checkstats_highestscore_input=createtextArea("","checkstats_highestscore_input");
  checkstats_highestscore_input.value=gameData.highestScore;
  checkstats_highestscore_div.appendChild(checkstats_highestscore_label);
  checkstats_highestscore_div.appendChild(checkstats_highestscore_input);

  //Append the elements to the body
  document.body.appendChild(checkstats_button);
  document.body.appendChild(checkstats_h1);
  document.body.appendChild(stats_image);
  document.body.appendChild(checkstats_username_div);
  document.body.appendChild(checkstats_gamesplayed_div);
  document.body.appendChild(checkstats_gameswon_div);
  document.body.appendChild(checkstats_highestscore_div);

  //Try Catch to handle if the user data gets washed ways from the game data

  try
   {
     //If user is empty then catch the bug by appropraitely making it as Guest
     if(gameData.user == "")
      {
        throw "Guest";
      }
     else
      {
        checkstats_username_input.value=gameData.user;
      }
   }

  catch(err)//Display and make the proper modifications
   {
      checkstats_username_input.value=err;
   }



}

/*
This function has no return statements or parameter and it is called simply by logout() call from
the logoff button at the Welcome screen which clear the user name and associated data from the
game Data. It is basically the logoff button and then clears all the stored data and then calls the login()
function to re display the login screen for the new user to start his/her new session.
*/
function logout()
{
  //Clear all the data as the sesion is closed.
   gameData.user="";
   gameData.gamesPlayed=0;
   gameData.gamesWon=0;
   gameData.highestScore=0;
   login();
}

/*
This function is called when the user clicks the start game button displaying on the welcome screen by a simple createInstructionScreenUI)()
call and is responsible for the UI creation for the Instruction Screen and does not return any data but creates the elements by using
elements defined in ui.js which return the associated element ready for appending on the document body.
*/
function createInstructionScreenUI()
{
  //Fetch the current level from the game data and store it in the current_level variable defined at the top in "Level x" format where x takes
  // any value depending on the number of levels of the game and is further reused.
  current_level="Level "+gameData.level;

  //clears the UI for the screen
  document.body.innerHTML="";

  //Create the main div for holding the content of the UI
  instruction_screen_main_div=creatediv("","instruction_screen_main_div");
  document.body.appendChild(instruction_screen_main_div);

  //Creating within div for the main div
  div1_instruction_screen=creatediv("","div1_instruction_screen");

  //Creation of complex element defined in ui.js as imageParagraph
  div2_instruction_screen=imageParagraph("","div2_instruction_screen","images/info_symbol.png","50px","50px","instruction_screen_image","Instruction","instruction_screen_level_instruction_area");


  //Creating elements for the inner div1
  instruction_screen_level_number_area=createH1(current_level,"instruction_screen_level_number_area");
  instruction_screen_level_type_area=createH2("","instruction_screen_level_type_area");

  //Creating button to launch the level Screen for the game i.e. where the balls will be seen.
  instruction_screen_next_button=createButton("Ready","instruction_screen_next_button");
  //Appending the loadLevelUI() function with the button that has the required logic
  instruction_screen_next_button.onclick=loadLevelUI;

  //Appending the elements of the div 1 to div 1
  div1_instruction_screen.appendChild(instruction_screen_level_number_area);
  div1_instruction_screen.appendChild(instruction_screen_level_type_area);

  //Appending div1 to the main div
  instruction_screen_main_div.appendChild(div1_instruction_screen);

  //Appending the required elements to the div
  div2_instruction_screen.appendChild(instruction_screen_next_button);
  instruction_screen_main_div.appendChild(div2_instruction_screen);

  //Fetch the instruction_area that will be modified in various other codes.
  instruction_screen_level_instruction_area=document.querySelector('.instruction_screen_level_instruction_area');
  console.log(instruction_screen_level_instruction_area);

}
/*
This function fetches the level instructions from the game levels and append them to the UI created above
This function is called simultaneously with the above function as the game start button is being clicked
This returns generates the required data in appended form and does not return any thing and is simpy Called
by the function call createLevelInstruction()
*/
function createLevelInstruction()
{
  //Fetch the level instruction from game data by reusing the current_level formed before hand.
  var instruction=gameLevels[current_level].instruction;
  //Append the data to the created element
  instruction_screen_level_instruction_area.innerText=instruction;

  //Fetch the level type stored from the level information and then append it
  var level_type=gameLevels[current_level].type;
  //Append the data into the Level Type Area
  instruction_screen_level_type_area.innerText=level_type;
}


/*
This function is the initialization point for the level screen that is being called from the button on the instruction screen
invoked by a simple function call loadLevelUI() and has three functions within to counter and work for the level screen
synchronization and working.
*/
function loadLevelUI()
{
  //Function call to create the Game UI
  createLevelScreenUI();
  //Function call for the synchronization counter
  level_screen_start_counter();
  //Function call for loading the game content
  level_screen_load_game_content();
}

/*
This function is called by level_screen_start_counter() call from the loadLevelUI function
and is responsible for inner counter creation for the synchronization of the level screen and
it initializes a counter with a call to level_screen_go() after every 1 second and it is stored in the
variable to later stop the counter.
*/

//Variable to manipulate the counter on the level screen
var a;
function level_screen_start_counter()
{

 //Ref 3
 //Answer Link:https://stackoverflow.com/questions/1133770/convert-a-string-to-an-integer-in-javascript
 //Fetch the value from the screen and parse it to make it into an integer for easy manipulation and modification for later displaying the modified value for the counter effect
 a=parseInt(level_screen_timer.innerText);
 //Varaible to store the counter variable to be later stopped.
 tid=setInterval(level_screen_go,1000);
}

/*
This function is repeatedly called by the level_screen_start_counter function
after interval of 1 seconds to carry on the inner clock for the synchronization purposes.
*/
function level_screen_go()
{
  //Decrement the value
  a--;

  //Reflect the modified value
  level_screen_timer.innerText=a;

  //Logic for when timer goes zero
  if(a==0)
  {
    //Make the question button appear
    level_screen_level_question_button.style.display="block";
    //Clear the timer

    //Ref 4
    //Answer Link:https://stackoverflow.com/questions/21714860/stop-javascript-counter-once-it-reaches-number-specified-in-div
    clearInterval(tid);
    //Insert display meessage for the user
    level_screen_next_instruction.innerHTML="Well done ! Keep the counts ready and go solve the question on the next screen within 10 seconds!!";
  }
}

/*
This function is called after we press the go to question button that appears on the level screen after all the balls are being generated and have
fallen completely to begin the testing zone and it has no paramters na dhas additional call to three functions to invoke and set up the question
screen for the corresponding level
*/
function level_screen_launch_question()
{
  //Function call to create the create and load the Question Screen UI
  createQuestionScreenUI();
  //Function call to fetch the required questiona and answer for the level question and display the data
  question_screen_createQuestionLevelData();
  //Function call to start the counter for the question Screen
  question_screen_start_counter();
}


/*
This function creates the level screen UI for the level screen where the next instruction for the game will come and the next button to launch the
question will appear.This is called as we click the start level button on the Instruction Screen by a createLevelScreenUI() call and has no return
and parameter associated.
*/
function createLevelScreenUI()
{
  //Clear the previous UI
  document.body.innerHTML="";

  //Use the complex commonHeader function defiend in ui.js to create the complex element and append it
  level_screen_divhead=commonHeader("","level_screen_head",current_level,"level_screen_level",gameLevels[current_level].ltime,"level_screen_timer");
  document.body.appendChild(level_screen_divhead);

  //Ref 5
  //  Answer Link:https://stackoverflow.com/questions/20306204/using-queryselector-with-ids-that-are-numbers
  //Fetch the value for later modifications.
  level_screen_timer=document.querySelector(".level_screen_timer");

  //Fetch and append the required appropriate message
   level_screen_next_instruction=createParagraph("","level_screen_next_instruction");
   document.body.appendChild(level_screen_next_instruction);

//  level_screen_divcomplete.appendChild(level_screen_divfoot);
  level_screen_level_question_button=createButton("Go to Question","level_screen_level_launch_question_button");
  level_screen_level_question_button.onclick=level_screen_launch_question;

  document.body.appendChild(level_screen_level_question_button);
  //level_screen_divfoot.appendChild(level_screen_level_question_button);
}



/*
This function is called by simple function call as level_screen_load_game_content() on start of the level screen from the button
that is on the instruction screen and is responsible for the required ball of specific colour generation which are visible on the
screen.
*/
 function level_screen_load_game_content()
 {
  //Find the type of balls in the level
  level_screen_ball_type_in_level= gameLevels[current_level].balls;

   //Store the ball count and color for each type and total number of balls
   for (var i=0;i<level_screen_ball_type_in_level;i++)
   {
     //Array to store the total ball colours associated in the level
     level_screen_ball_colors[i]=gameLevels[current_level].ball_colors[i];
     //Array to store the individual count of each ball
     level_screen_ball_individual_count[i]=gameLevels[current_level].ball_count[i];
     //Variable to store the total number of balls in the level
     level_screen_total_balls+=level_screen_ball_individual_count[i];

   }


    /*
     This loop creates individual balls by Making use of index variable (level_screen_index) that stores the type
     of balls and then create the associated balls of that index i.e. we use a variable index
     that goes till the number of different balls in the level ,say for example if we have three
     different coloured balls in the level say red,green and yellow (each colour might have various
     balls of same colour i.e. we can have 3 red, 4 green and 6 yellow balls) but total variety is 3 and
     index variable goes till total variety stored in level_screen_ball_type variable and for each index
     value it will go till the number of balls for that index fetched from the array storing the individual count
     of the balls ,continuing example say index=0 that implies red then for 3 times stored in level_screen_ball_individual_count Array
     it wil create the required balls and then increment it and go on till the total balls are completed.
    */
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

           //Ref 6
           //Answer Link:https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
          //Give a random position to the ball x coordinate to have a fall from any location from the screen
          var xPos = getRandomInt(100, 400);

          //This code sets the width,height and initial position of the ball being created
          //This code is used here to account for the the dynamic number of balls that are going to be generated.
          //Set the left position of the div to the generated random xPosition
          level_screen_div_ball.style.left=xPos+"px";
          //Set the top of the balls to the required value
          level_screen_div_ball.style.top="10px";
          //Set the width of the div element i.e. the ball
          level_screen_div_ball.style.width="20px";
          //Set the height of the div i.e. the ball
          level_screen_div_ball.style.height="20px";
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


//This variable is used to keep track and loop through each of the elements in the balls array that has all the generated balls stored
var x = 0;

/*
This function is used to append the balls to the screen after fetching them from the balls array that stores all the created Balls
and is having setTimeout function that has a self call to itself after every 1 second to generate the balls after every one second
and within call to myMove() function that will give it the motion.
*/
function appendBalls ()
{
  //Ref 7 based on stack overflow defined in licenses.txt
  //Answer Link:https://stackoverflow.com/questions/1101668/how-to-use-settimeout-to-invoke-object-itself
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
   }, 1650);//Associated timer for the recall of the function to redo the task.
}

/*
This function myMove is being called from appendBalls() function to add the motion logic to the balls.
It accepts the ball i.e. a HTML div element made as a ball by specifying the border-radius, width,
height and colors and it then adds the logic to make the application ball flow and fall.
Function is simply called by the name as myMove() along with the paramter here eball which is a div modified as explained above
It accepts the ball here since it is to add the moving logic is called from within the appendBalls function
In general, it can be used for any element but it needs it position element to be specified and and made free flowing
to account for the change in positions of the elements. It works as setting a interval for the ball to complete its path and
by using the setInterval function and work till the fixed position set and then later clear the element when it reaches
the desired and required positions and it does not return anything.
For example, if it accepts a ball which is randomly xPos placed then it will keep on updating the value of its top to make
it move linearly down from the top onto the finish line
*/
function myMove(eball)
{
  //Set the position 0 initially
  var pos = 0;
  //Ref 8 based on stackoverflow defined in licenses.txt
  //Answer Link:https://stackoverflow.com/questions/25352760/how-to-make-object-move-in-js

  //Set a interval sa as to make the ball finish its desired path in a fixed time limit
  var id = setInterval(frame, 10);
  //Function that has the moving logic
  function frame()
   {
     //Clear the element if it reaches below a certain pixel range
     if (pos == 1024)//setting of the finish line
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
}

/*
This function is used to generate the random random between the specified range as provided and here it is called when we are to set the
xPos of the ball to any random location before the ball begins to fall which will later cover the down movement.
It accepts two numbers defined as min and max which specify the range within which we want to generate a number say, if we call getRandomInt(2,6)
then it will return a number within the range 2-6 thus, get any desired ranged number and then perform any logic onto it.
It will return the floor value i.e. if we get 4.2 it returns 4 on account of floor function to get a integer not a real number.
for example getRandomInt(4,6) will give a integer value between 4 and 6
Similarly, getRandomInt(6,10) will give a integer value between 6 and 10 based on the random value generated
*/
 //Ref 6 based on stackoverflow in licenses.txt
 //Answer Link:https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range

 function getRandomInt(min, max)
  {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/*
This function is called when we are to create the balls and is used to assign the required colours to the created Balls
It accepts ball(div element), index(the variable which stores the type of the ball which forms the link to get the colour of the
ball from the array storing the ball colours) and additional optional parameter for the testing and getting the fetch values
*/
 function makeBall(level_screen_div_ball,level_screen_index,l)
 {
  //Set the background colour for the ball i.e. give the desired colour to the ball
  level_screen_div_ball.style.background=level_screen_ball_colors[level_screen_index];
 }



 /*
 This function is called when the question is answered correctly and it has a recall to the createInstructionScreenUI and
 createLevelInstruction functions to load the level for the next question
 */
 function question_screen_call_next_level()
 {
   //Call to the Insruction Screen Loading and set up functions
   createInstructionScreenUI();
   createLevelInstruction();
 }

 function question_screen_restart_game()
 {
   //Clear the values of attempts and score for the next try
   gameData.level=1;
   gameData.attempts=3;
   gameData.score=0;
   question_score=0;
   gameData.timer=10;

   createInstructionScreenUI();
   createLevelInstruction();
 }

 function question_screen_home_call()
 {
   //Clear the values of attempts and score for the next try
   gameData.level=1;
   gameData.attempts=3;
   gameData.score=0;
   question_score=0;
   gameData.timer=10;

   createWelcomeScreen();
 }

 /*
 This no return and no paramter function is responsible for the creation of the Question Screen UI invoked by the
 launch question button on the Level Screen. It creates the UI for the main ultimate screen.
 */
 function createQuestionScreenUI()
 {
   //Clear the UI
   document.body.innerHTML="";

   //Remove the classes for both the correct and incorrect answer from the body
   document.body.classList.remove("correct_answer");
   document.body.classList.remove("incorrect_answer");
   document.body.classList.remove("master_answer");
   document.body.classList.remove("game_won");

   //Create the within divs for the page
   //Create the complex element defined in the ui.js
    div2_question_screen=imageParagraph("","bodydiv","images/question_symbol.png","50px","50px","question_screen_image","Question: ","question_screen_question_paragraph");

   //Create the other complex elements for the divs defined in ui.js
   div1_question_screen=commonHeader("","topdiv","Score:"+question_score,"question_screen_score","Attempts :"+gameData.attempts,"question_screen_attempts");
   document.body.appendChild(div1_question_screen);

   //Fetch the element for cross function modifications.
   question_screen_score=document.querySelector(".question_screen_score");
   question_screen_attempts=document.querySelector(".question_screen_attempts");

   //Create the other elements
   question_screen_timer=createH2(gameData.timer,"question_screen_timer");
   question_screen_answer_textbox=createtextArea("Answer","question_screen_answer_textbox");
   question_screen_answer_textbox.setAttribute("placeholder","Enter Answer Here");
   question_screen_check_button=createButton("Check","question_screen_check_button");
   question_screen_check_button.onclick=checkAnswer;
   question_screen_next_button=createButton("Next Level","question_screen_next_button");
   question_screen_next_button.onclick=question_screen_call_next_level;
   question_screen_restart_button=createButton("Restart","question_screen_restart_button");
   question_screen_restart_button.onclick=question_screen_restart_game;
   question_screen_welcome_button=createButton("Home","question_screen_welcome_button");
   question_screen_welcome_button.onclick=question_screen_home_call;
   question_screen_error_message_paragraph=createParagraph("","question_screen_error_message_paragraph");

   //Append the div 1 and its associated elements
   document.body.appendChild(div1_question_screen);
   div1_question_screen.appendChild(question_screen_score);
   div1_question_screen.appendChild(question_screen_attempts);

   //Append the Timer
   document.body.appendChild(question_screen_timer);

   //Append the div 2 and its associated elements
   document.body.appendChild(div2_question_screen);
   div2_question_screen.appendChild(question_screen_answer_textbox);
   div2_question_screen.appendChild(question_screen_check_button);
   div2_question_screen.appendChild(question_screen_error_message_paragraph);

   //Append the Next Button
   document.body.appendChild(question_screen_next_button);
   document.body.appendChild(question_screen_restart_button);
   document.body.appendChild(question_screen_welcome_button);
   //Begin the screen with focus at the input area
   question_screen_answer_textbox.focus();

   //Fetch for cross function manipulations.
   question_screen_question_paragraph=document.querySelector('.question_screen_question_paragraph');


 }


 /*
 This function is called simultaneously as above two functions and has no return statements and parameters
 and it fetches the level question and displays it by appending it to the elements created above.
 */

 //Variable for counter manipulations and modifications.
 var aa;
 function question_screen_createQuestionLevelData()
 {
   //Fetch the required values and display it.
   question_screen_current_level_question=gameLevels[current_level].question;
   question_screen_question_paragraph.innerHTML="Question :"+question_screen_current_level_question;
    aa=gameData.timer;
 }

 /*
 This function is called when we launch the question screen from the level screen and is used to start the counter to set the time interval
 within which the question must be answered here the 10 seconds.
 */
 function question_screen_start_counter()
 {
   //Set and start the counter
   question_screen_tid=setInterval("question_screen_go()",1000);
 }

 /*
 This function changes the value of the counter as displayed on the Question Screen
 by modifying the values. It does not accept any other paramter and is responsible
 for the modification of the counter values
 */

 function question_screen_go()
 {
   //Fetch the Value of the timer storing HTML element
  // var a=parseInt(question_screen_timer.innerHTML);

   //Decrement the value
   aa--;

  //If value goes to zero then its time up
   if(aa==0)
   {
     //Clear the interval
     //Ref 4 based on stackoverflow in licenses.txt
     //  Answer Link:https://stackoverflow.com/questions/21714860/stop-javascript-counter-once-it-reaches-number-specified-in-div

     clearInterval(question_screen_tid);
     //Set the Value again
     question_screen_timer.innerHTML="Times Up!!Try Again!!!!!!";
     //Make the button disabled
     question_screen_check_button.disabled=true;
     question_screen_restart_button.style.display="block";
     question_screen_welcome_button.style.display="block";

     //Update the stats
     gameData.gamesPlayed++;
     gameData.timer=10;

     var present_highest_score=gameData.highestScore;

     if(question_score>present_highest_score)
     {
       gameData.highestScore=question_score;
     }


   }

   else if(aa>0)
  {
    //Again reset the value
    question_screen_timer.innerText=aa;

  }
 }


 /*
 This function has the logic to check the answer for the question by matching the user typed answer with the
 actual answer which is fetched from the data stored and has no return statements and parameters and is invoked when we click the button
 on the question screen to check.
 */
 function checkAnswer()
 {
   //Fetch the user typed answer
   var question_screen_userAnswer=question_screen_answer_textbox.value;
   //Fetch the actual answer
   var question_screen_actualAnswer=gameLevels[current_level].answer;

   //Removing the animation classes
   document.body.classList.remove("incorrect_answer");
   document.body.classList.remove("correct_answer");

   //Try catch to handle in valid inputs from the user

   try
    {
     if(question_screen_userAnswer == "")//Catch for empty inputs
      {
        throw "Empty";
      }
     //Reference 2
     if(isNaN(question_screen_userAnswer))//Catch for invalid inputs
      {
        throw "NaN (not a number)";
      }

    }
  //Corresponding catch for the statement in case of entering empty or NaN input
  catch(err)
   {
     question_screen_error_message_paragraph.innerHTML = "Answer you have provided is " + err;
   }

   //Check if the two answers (user and actual) match or not
   if(question_screen_userAnswer==question_screen_actualAnswer)
   {

     //Check for the Master Level Correct Response
     if(gameData.level==13)
     {
       gameData.gamesWon++;
       gameData.gamesPlayed++;

       document.body.classList.remove("incorrect_answer");
       document.body.classList.remove("correct_answer");

       //Call function to calculate score
        if(gameData.attempts==3)
        {
         question_score=question_score+3;
        }

          else if(gameData.attempts==2)
          {
           question_score=question_score+2;
          }

           else if(gameData.attempts==1)
           {
            question_score=question_score+1;
           }
        //Display and update the score
        question_screen_score.innerText="Score:"+question_score;
        //Remove the check button from the screen

        //Display the required buttons
        question_screen_check_button.style.display="none";
        question_screen_welcome_button.style.display="block";

         //Check if achieved the perfect score
        if(question_score==39)
         {
          document.body.classList.add("master_answer");
          //Display the correct Messsage in place of the Timer
          question_screen_timer.innerHTML="Wow! All Hail the Master!!!!!!";
          //Display the next level button
          question_screen_next_button.style.display="none";
         }

        else//If perfect score not achieved
        {
          document.body.classList.add("game_won");
          //Display the correct Messsage in place of the Timer
          question_screen_timer.innerHTML="Congrats!!Try to become the Master";
          //Display the next level button
          question_screen_next_button.style.display="none";

        }

        //Update the Score and stats
        var curr_highest_score=gameData.highestScore;

        if(question_score>curr_highest_score)
        {
        gameData.highestScore=question_score;
        }
        //Clear the interval
        clearInterval(question_screen_tid);
      }


     //Correct Answer if it is not the final level
     else


     {
     //Add the required associated class here and remove the other
     document.body.classList.remove("incorrect_answer");
     document.body.classList.add("correct_answer");
     //Display the correct Messsage in place of the Timer
     question_screen_timer.innerHTML="Correct Answer!!!!!!";
     //Display the next level button
     question_screen_next_button.style.display="block";
     //Call function to calculate score
     if(gameData.attempts==3)
     {
      question_score=question_score+3;
     }

     else if(gameData.attempts==2)
     {
       question_score=question_score+2;
     }

     else if(gameData.attempts==1)
     {
       question_score=question_score+1;
     }
     //Display and update the score
     question_screen_score.innerText="Score:"+question_score;
     //Remove the check button from the screen
     question_screen_check_button.style.display="none";
     //Increment the level number in gameData and current_level variable
     gameData.level++;
     current_level++;
     gameData.timer=10;
     //Clear the interval
     clearInterval(question_screen_tid);
   }

    }

   //Counter logic if answer is not correct
   else
    {
      //Add the required associated class here and remove the other
     document.body.classList.remove("correct_answer");
     document.body.classList.add("incorrect_answer");

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
         question_screen_restart_button.style.display="block";
         question_screen_welcome_button.style.display="block";

         //Update Stats
         gameData.gamesPlayed++;
         gameData.timer=10;

         //Update the highest score
         var present_highest_score=gameData.highestScore;

         if(question_score>present_highest_score)
         {
           gameData.highestScore=question_score;
         }

      }

      else//If attempts are not zero
      {
        //Clear the value of input box
        question_screen_answer_textbox.value="";
        //Regain the focus towards the answer box
        question_screen_answer_textbox.focus();

      }


    }
 }
