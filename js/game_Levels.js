//Stores a nested objects where each object is marked by its name like Level 1 etc. and has all the parameters
// associated with it stored in form of name value pairs involving simple data, arrays in form of ball_colors
// and ball_count
window.gameLevels={

  "Level 1":
      {
       instruction:"In this level you will see red,yellow and green coloured balls and you will have to keep the count of red and yellow balls to solve the addition problem that will follow",
       type:"Addition",
       question:"What is (Red + Yellow) balls?",
       answer:12,
       balls:3,
       ltime:46,
       ball_colors:
       [
         "#FF0800","#7CFC00","#FFFF00"
       ],
       ball_count:
       [
         8,12,4
       ]
     },

  "Level 2":
      {
        instruction:"In this level you will see red,yellow and green coloured balls and you will have to keep the count of red and yellow balls to solve the addition problem that will follow!! Be ready for more balls!!",
        type:"Addition-Complex",
        question:"What is (Red + Yellow) balls?",
        answer:20,
        balls:3,
        ltime:64,
        ball_colors:
        [
           "#FF0800","#7CFC00","#FFFF00"
        ],
        ball_count:
        [
          11,15,9
        ]
      },

  "Level 3":
      {
        instruction:"In this level you will see red,yellow and green coloured balls and you will have to keep the count of red and yellow balls to solve the subtraction problem that will follow",
        type:"Subtraction",
        question:"What is (Red - Yellow) balls?",
        answer:5,
        balls:3,
        ltime:46,
        ball_colors:
        [
           "#FF0800","#7CFC00","#FFFF00"
        ],
        ball_count:
        [
          9,11,4
        ]
      },

   "Level 4":
     {
       instruction:"In this level you will see red,yellow and green coloured balls and you will have to keep the count of red and yellow balls to solve the addition problem that will follow",
       type:"Subtraction-Complex",
       question:"What is (Red - Yellow) balls?",
       answer:6,
       balls:3,
       ltime:68,
       ball_colors:
       [
          "#FF0800","#7CFC00","#FFFF00"
       ],
       ball_count:
       [
         13,17,7
       ]
     },


   "Level 5":
     {
       instruction:"In this level you will see red,yellow and green coloured balls and you will have to keep the count of red and yellow balls to solve the multiplication problem that will follow",
       type:"Multiplication",
       question:"What is (Red * Yellow) balls?",
       answer:36,
       balls:3,
       ltime:50,
       ball_colors:
       [
          "#FF0800","#7CFC00","#FFFF00"
       ],
       ball_count:
       [
         9,13,4
       ]
     },

    "Level 6":
     {
       instruction:"In this level you will see red,yellow and green coloured balls and you will have to keep the count of red and yellow balls to solve the addition problem that will follow",
       type:"Multiplication-Complex",
       question:"What is (Red * Yellow) balls? ?",
       answer:98,
       balls:3,
       ltime:68,
       ball_colors:
       [
          "#FF0800","#7CFC00","#FFFF00"
       ],
       ball_count:
       [
         14,16,7
       ]
     },

    "Level 7":
     {
       instruction:"In this level you will see red,yellow,green and blue coloured balls and you will have to keep the count of red, green and yellow balls",
       type:"Addition-Subtraction",
       question:"What is (red+yellow)-green?",
       answer:13,
       balls:4,
       ltime:71,
       ball_colors:
       [
          "#FF0800","#7CFC00","#00BFFF","#FFFF00"
       ],
       ball_count:
       [
         11,7,12,9
       ]
     },

    "Level 8":
     {
       instruction:"In this level you will see red,yellow,green and blue coloured balls and you will have to keep the count of red, green and yellow balls",
       type:"Multiplication-Division",
       question:"What is (red*yellow)/green?",
       answer:7,
       balls:4,
       ltime:86,
       ball_colors:
       [
         "#FF0800","#00BFFF","#7CFC00","#FFFF00"
       ],
       ball_count:
       [
         14,10,16,8
       ]
     },

     "Level 9":
     {
       instruction:"In this level you will see red,yellow,green and blue coloured balls and you will have to keep the count of red, green and yellow balls",
       type:"Addition-Subtraction-Multiplication",
       question:"What is (red+yellow)-(red*green)?",
       answer:4,
       balls:4,
       ltime:83,
       ball_colors:
       [
         "#FF0800","#7CFC00","#00BFFF","#FFFF00"
       ],
       ball_count:
       [
         13,2,14,17
       ]
     },

     "Level 10":
     {
       instruction:"In this level you will see red,yellow,green and blue coloured balls and you will have to keep the count of red, green and yellow balls",
       type:"Addition-Subtraction-Division",
       question:"What is (red+yellow)/(yellow-green)?",
       answer:4,
       balls:4,
       ltime:96,
       ball_colors:
       [
         "#FF0800","#7CFC00","#00BFFF","#FFFF00"
       ],
       ball_count:
       [
         11,10,16,17
       ]
     },

     "Level 11":
     {
       instruction:"In this level you will see red,yellow,green and blue coloured balls and you will have to keep the count of red, green and yellow balls",
       type:"Subtraction-Multiplication-Division",
       question:"What is (red*green)/(red-yellow)?",
       answer:18,
       balls:4,
       ltime:74,
       ball_colors:
       [
         "#FF0800","#00BFFF","#7CFC00","#FFFF00"
       ],
       ball_count:
       [
         9,17,12,3
       ]
     },

     "Level 12":
     {
       instruction:"In this level you will see red,yellow,green and blue coloured balls and you will have to keep the count of red, green and yellow balls",
       type:"Addition-Subtraction-Multiplication-Division",
       question:"What is ((red+yellow)+(red*green))/(red-yellow) ?",
       answer:90,
       balls:4,
       ltime:92,
       ball_colors:
       [
         "#FF0800","#7CFC00","#00BFFF","#FFFF00"
       ],
       ball_count:
       [
         13,12,16,11
       ]
     },

     "Level 13":
     {
       instruction:"In this level you will see red,yellow,green,blue and pink coloured balls and you will have to keep the count of red, green ,yellow and blue balls",
       type:"Bonus Mastery Level",
       question:"What is ((red+green-yellow)*(green+yellow-blue))/(58-(red+green+yellow+blue)) ?",
       answer:25,
       balls:5,
       ltime:116,
       ball_colors:
       [
         "#FF0800","#7CFC00","#FFC0CB","#FFFF00","#00BFFF"
       ],
       ball_count:
       [
         20,12,18,7,9
       ]
    }

   };
