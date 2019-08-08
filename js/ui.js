/*
This function is used to create HTML element paragraph and it accepts the text and
className to create the text node and append it to the element and add the
class if it is suppplied on function call. It return the element ready to be appended
It is called as createParagraph(text,className) for example createParagraph("hello","SIT")
call will create a paragraph with the text hello and class SIT which is returned to the calling area
which can be used as per the need, similarly any text and class can be supplied to create the required paragraphs
with the desired text and its associated class like createParagraph("bye") will create a paragraph with the text bye.
*/
function createParagraph(text,className)
{
  //Create the Element
  var element=document.createElement("p");
  //Append the text node
  var element_text=document.createTextNode(text);
  element.appendChild(element_text);

  //Add class is supplied
  if(typeof className !=='undefined')
  {
    element.classList.add(className);
  }

  //Return element
  return element;
}

/*
This function is used to create HTML element h1 and it accepts the text and
className to create the text node and append it to the element and add the
class if it is suppplied on function call. It return the element ready to be appended
It is called as createH1(text,className) for example createH1("hello","SIT1")
call will create a h1 heading with the text hello and class SIT1 which is returned to the calling area
which can be used as per the need, similarly any text and class can be supplied to create the required h1
with the desired text and its associated class like createH1("Mobile") will create a h1 with the text Mobile.
*/
function createH1(text,className)
{
  //Create the Element
  var element=document.createElement("h1");
  //Append the text node
  var element_text=document.createTextNode(text);
  element.appendChild(element_text);

  //Add class is supplied
  if(typeof className !=='undefined')
  {
    element.classList.add(className);
  }
  //Return element
  return element;
}


/*
This function is used to compex UI element in form of a div having a
heading, image and paragraph within which forms the header part of most of the learning module components.
It does return a div element ready for appending and it accepts div element text and class, image source, width, height
and id and paragraph element text and class and apply the proper classes to create the required UI element fpr appending.
It can be called as createComplexDiv("","class","demo","demo","one.jpg","100px","200px","one","hello","tow")
which create a div with class class which encloses within it a heading element titled demo with class demo, an image one.jpg with id one and widht 100 and height 200px
and and paragraph element with class two and text hello

Similarly,createComplexDiv("","class1","demo1","demo1","four.jpg","100px","200px","four","Bye","three")
which create a div with class class1 which encloses within it a heading element titled demo1 with class demo1, an image four.jpg with id four and widht 100 and height 200px
and and paragraph element with class three and text Bye
*/
function createComplexDiv(divText,divClass,headingText,headingClass,imageSource,imageWidth,imageHeight,imageId,paragraphText,paragraphClass)
{
  //Create the element
  var divelement=document.createElement("div");
  var divelementtext=document.createTextNode(divText);
  divelement.appendChild(divelementtext);

  //Append Class
  if(typeof divClass !=='undefined')
  {
    divelement.classList.add(divClass);
  }

  //Create the element
  var headingelement=document.createElement("h1");
  var headingelementtext=document.createTextNode(headingText);
  headingelement.appendChild(headingelementtext);

  //Append Class
  if(typeof headingClass !=='undefined')
  {
    headingelement.classList.add(headingClass);
  }

  //Create the element
  var imageelement=document.createElement("img");

  imageelement.setAttribute("src",imageSource);
  imageelement.setAttribute("width",imageWidth);
  imageelement.setAttribute("height",imageHeight);

  //Append Class
  if(typeof divClass !=='undefined')
  {
    imageelement.setAttribute("id",imageId);
  }

  //Create the element
  var paragraphelement=document.createElement("paragraph");
  var paragraphelementtext=document.createTextNode(paragraphText);
  paragraphelement.appendChild(paragraphelementtext);

  //Append Class
  if(typeof paragraphClass !=='undefined')
  {
    paragraphelement.classList.add(paragraphClass);
  }

  //Append Elements
  divelement.appendChild(headingelement);
  divelement.appendChild(imageelement);
  divelement.appendChild(paragraphelement);

  return divelement;

}


/*
This function is used to create HTML element h2 and it accepts the text and
className to create the text node and append it to the element and add the
class if it is suppplied on function call. It return the element ready to be appended
It is called as createH2(text,className) for example createH2("hello","SIT1")
call will create a h2 heading with the text hello and class SIT1 which is returned to the calling area
which can be used as per the need, similarly any text and class can be supplied to create the required h2
with the desired text and its associated class like createH2("Mobile") will create a h2 with the text Mobile.
*/
function createH2(text,className)
{
  //Create the Element
  var element=document.createElement("h2");
  //Append the text node
  var element_text=document.createTextNode(text);
  element.appendChild(element_text);

  //Add class is supplied
  if(typeof className !=='undefined')
  {
    element.classList.add(className);
  }
  //Return element
  return element;
}


/*
This function is used to create HTML element table and it accepts
className to add it to the class if it is suppplied on function call.
It return the element ready to be appended, It is called as createtable(className)
for example createtable("SIT708") call will create a table with the class SIT708 which is returned to the calling area
which can be used as per the need
*/
function createtable(className)
{
  //Create the Element
  var element=document.createElement("table");

  //Add class is supplied
  if(typeof className !=='undefined')
  {
    element.classList.add(className);
  }
  //Return element
  return element;
}

/*
This function is used to create HTML element tr (table row) and it accepts
className to add it to the class if it is suppplied on function call.
It return the element ready to be appended, It is called as createtr(className)
for example createtr("SIT708") call will create a table row with the class SIT708 which is returned to the calling area
which can be used as per the need
*/
function createtr(className)
{
  //Create the Element
  var element=document.createElement("tr");

  //Add class is supplied
  if(typeof className !=='undefined')
  {
    element.classList.add(className);
  }
  //Return element
  return element;
}

/*
This function is used to create HTML element th and it accepts the text and
className to create the text node and append it to the element and add the
class if it is suppplied on function call. It return the element ready to be appended
It is called as createth(text,className) for example createth("hello","SIT1")
call will create a th (table header) with the text hello and class SIT1 which is returned to the calling area
which can be used as per the need ready to be appended onto the tr of the table,
similarly any text and class can be supplied to create the required th value that can be inserted in tr
with the desired text and its associated class like createth("Mobile") will create a th with the text Mobile.
*/
function createth(text,className)
{
  //Create the Element
  var element=document.createElement("th");
  //Append the text node
  var element_text=document.createTextNode(text);
  element.appendChild(element_text);

  //Add class is supplied
  if(typeof className !=='undefined')
  {
    element.classList.add(className);
  }
  //Return element
  return element;
}

/*
This function is used to create HTML element td and it accepts the text and
className to create the text node and append it to the element and add the
class if it is suppplied on function call. It return the element ready to be appended
It is called as createtd(text,className) for example createtd("hello","SIT1")
call will create a td (table data) with the text hello and class SIT1 which is returned to the calling area
which can be used as per the need ready to be appended onto tr (table row),
similarly any text and class can be supplied to create the required td value that can be inserted in tr
with the desired text and its associated class like createtd("Mobile") will create a td with the text Mobile.

*/
function createtd(text,className)
{
  //Create the Element
  var element=document.createElement("td");
  //Append the text node
  var element_text=document.createTextNode(text);
  element.appendChild(element_text);

  //Add class is supplied
  if(typeof className !=='undefined')
  {
    element.classList.add(className);
  }
  //Return element
  return element;
}

/*
This function is used to create HTML element h3 and it accepts the text and
className to create the text node and append it to the element and add the
class if it is suppplied on function call. It return the element ready to be appended
It is called as createH3(text,className) for example createH3("hello","SIT1")
call will create a h3 heading with the text hello and class SIT1 which is returned to the calling area
which can be used as per the need, similarly any text and class can be supplied to create the required h3
with the desired text and its associated class like createH3("Mobile") will create a h3 with the text Mobile.
*/
function createH3(text,className)
{
  //Create the Element
  var element=document.createElement("h3");
  //Append the text node
  var element_text=document.createTextNode(text);
  element.appendChild(element_text);

  //Add class is supplied
  if(typeof className !=='undefined')
  {
    element.classList.add(className);
  }
  //Return element
  return element;
}

/*
This function is used to create HTML element button and it accepts the text and
className to create the text node and append it to the element and add the
class if it is suppplied on function call. It return the element ready to be appended
It is called as createButton(text,className) for example createButton("hello","SIT1")
call will create a button with the text hello and class SIT1 which is returned to the calling area
which can be used as per the need,similarly any text and class can be supplied to create the required th value that can be inserted in button
with the desired text and its associated class like createButton("Mobile") will create a button with the text Mobile.

*/
function createButton(text,className)
{
  //Create the Element
  var element=document.createElement("button");
  //Append the text node
  var element_text=document.createTextNode(text);
  element.appendChild(element_text);

  //Add class is supplied
  if(typeof className !=='undefined')
  {
    element.classList.add(className);
  }
  //Return element
  return element;
}

/*
This function is used to create HTML element span and it accepts the text and
className to create the text node and append it to the element and add the
class if it is suppplied on function call. It return the element ready to be appended
It is called as createSpan(text,className) for example createSpan("hello","SIT1")
call will create a span with the text hello and class SIT1 which is returned to the calling area
which can be used as per the need,
similarly any text and class can be supplied to create the required Span value that can be inserted in Span
with the desired text and its associated class like createSpan("Mobile") will create a Span with the text Mobile.
*/
function createSpan(text,className)
{
  //Create the Element
  var element=document.createElement("span");
  //Append the text node
  var element_text=document.createTextNode(text);
  element.appendChild(element_text);

  //Add class is supplied
  if(typeof className !=='undefined')
  {
    element.classList.add(className);
  }
  //Return element
  return element;
}

/*
This function is used to create HTML element div and it accepts the text and
className to create the text node and append it to the element and add the
class if it is suppplied on function call. It return the element ready to be appended
It is called as creatediv(text,className) for example creatediv("hello","SIT1")
call will create a div with the text hello and class SIT1 which is returned to the calling area
which can be used as per the need,
similarly any text and class can be supplied to create the required div value that can be inserted in div
with the desired text and its associated class like creatediv("Mobile") will create a div with the text Mobile.

*/
function creatediv(text,className)
{
  //Create the Element
  var element=document.createElement("div");
  //Append the text node
  var element_text=document.createTextNode(text);
  element.appendChild(element_text);

  //Add class is supplied
  if(typeof className !=='undefined')
  {
    element.setAttribute("class",className);
  }
  //Return element
  return element;
}

/*
This function is used to create HTML element input (usually type text) and it accepts the text and
className to create the text node and append it to the element and add the
class if it is suppplied on function call. It return the element ready to be appended
It is called as createtextArea(text,className) for example createtextArea("hello","SIT1")
call will create a input with the text hello and class SIT1 which is returned to the calling area
which can be used as per the need,
similarly any text and class can be supplied to create the required input value that can be inserted in input
with the desired text and its associated class like createtextArea("Mobile") will create a input with the value Mobile.

*/
function createtextArea(text,className)
{
  //Create the Element
  var element=document.createElement("input");
  //Append the text node
  var element_text=document.createTextNode(text);
  element.appendChild(element_text);

  //Add class is supplied
  if(typeof className !=='undefined')
  {
    element.classList.add(className);
  }
  //Return element
  return element;
}


/*
This function is used to create HTML element ul (unordered list) and it accepts
className to add it to the class if it is suppplied on function call.
It return the element ready to be appended, It is called as createul(className)
for example createul("SIT708") call will create a ul with the class SIT708 which is returned to the calling area
which can be used as per the need
*/
function createul(className)
{
  //Create the Element
  var element=document.createElement("ul");

  //Add class is supplied
  if(typeof className !=='undefined')
  {
    element.classList.add(className);
  }
  //Return element
  return element;
}

/*
This function is used to create HTML element li and it accepts the text and
className to create the text node and append it to the element and add the
class if it is suppplied on function call. It return the element ready to be appended
It is called as createli(text,className) for example createli("hello","SIT1")
call will create a li with the text hello and class SIT1 which is returned to the calling area
which can be used as per the need and can be appended to ul or ol,
similarly any text and class can be supplied to create the required li value that can be inserted in li
with the desired text and its associated class like createli("Mobile") will create a li with the text Mobile.

*/
function createli(text,className)
{
  //Create the Element
  var element=document.createElement("li");
  //Append the text node
  var elementtext=document.createTextNode(text);
  element.appendChild(elementtext);

  //Add class is supplied
  if(typeof className !=='undefined')
  {
    element.classList.add(className);
  }
  //Return element
  return element;
}


/*
This function creates a div elemeent with a image and paragraph which is used to create the box element displaying the icons and instruction in instruction screen
and icon and question in question screen. Thus, this return the complext element by accepting div text, div class, image source with its widht, height and id and
paragraph text and class and returning the required element. It can be called as imageParagraph("","one","one.jpg","100px","200px","one","hello","two")
which wull create a div element class one enclosing an image one.jpg and a paragraph element with class two and text hello,
Similarly, imageParagraph("","three","four.jpg","100px","200px","four","Hello","five") creates a three class div element within containing four.jpg with class
four, width 100px and height 200px and a paragraph element with text Hello with class five.
*/
function imageParagraph(divText,divClass,imageSource,width,height,imageid,paragraphText,paragraphClass)
{
  //Create the element
  var element=document.createElement("div");
  var elementText=document.createTextNode(divText);

  //Append Class
  if(typeof divClass !=='undefined')
  {
    element.classList.add(divClass)
  }

  //Create the element
  var imageelement=document.createElement("img");

  imageelement.setAttribute("src",imageSource);
  imageelement.setAttribute("width",width);
  imageelement.setAttribute("height",height);

  //Append Class
  if(typeof divClass !=='undefined')
  {
    imageelement.setAttribute("id",imageid);
  }

  //Create the element
  var paragraphelement=document.createElement("paragraph");
  var paragraphelementtext=document.createTextNode(paragraphText);
  paragraphelement.appendChild(paragraphelementtext);

  //Append Class
  if(typeof paragraphClass !=='undefined')
  {
    paragraphelement.classList.add(paragraphClass);
  }

  //Append Elements
  element.appendChild(imageelement);
  element.appendChild(paragraphelement);

  return element;


}

/*
This function is used to create HTML element a(anchor tag) and it accepts the text and
className to create the text node and append it to the element and add the
class if it is suppplied on function call. It return the element ready to be appended
It is called as createa(text,className) for example createa("hello","SIT1")
call will create a anchor tag with the text hello and class SIT1 which is returned to the calling area
which can be used as per the need,
similarly any text and class can be supplied to create the required th value that can be inserted in a
with the desired text and its associated class like createa("Mobile") will create a "a" with the text Mobile.

*/
function createa(text,className)
{
  //Create the Element
  var element=document.createElement("a");
  //Append the text node
  var elementtext=document.createTextNode(text);
  element.appendChild(elementtext);

  //Add class is supplied
  if(typeof className !=='undefined')
  {
    element.classList.add(className);
  }
  //Return element
  return element;
}

/*
This function creates a div elemeent with a image and paragraph which is used to create the box element displaying the top bar information in level and
question screen. It return the complex UI element and it accepts various parameters. For example, a function call commonHeader("","one","score","two","Level","three")
will create a div enclosing two spans displaying Score and Level which are then CSS styled to display them side by side. Thus, similarly a similar function call
with modified spanText to One and Two will create a div enclosing two spans with texts One and Two with thier associated classes two and three respectively.
*/
function commonHeader(divText,divClass,span1Text,span1Class,span2Text,span2Class)
{
  //Create the element
  var element=document.createElement("div");
  var elementText=document.createTextNode(divText);

  //Append Classes
  if(typeof divClass !=='undefined')
  {
    element.classList.add(divClass)
  }


  //Create the Element
  var span1element=document.createElement("span");
  //Append the text node
  var span1elementtext=document.createTextNode(span1Text);
  span1element.appendChild(span1elementtext);

  //Add class is supplied
  if(typeof span1Class !=='undefined')
  {
    span1element.classList.add(span1Class);
  }


  //Create the Element
  var span2element=document.createElement("span");
  //Append the text node
  var span2elementtext=document.createTextNode(span2Text);
  span2element.appendChild(span2elementtext);

  //Add class is supplied
  if(typeof span2Class !=='undefined')
  {
    span2element.classList.add(span2Class);
  }

   //Append Elements
  element.appendChild(span1element);
  element.appendChild(span2element);


  return element;

}

/*create image accepts the parameter then creates the image and
append it to the body with width and height settings,
Also has a anonymous function call
*/
function createimage(imageSource,width,height,id)
{
  //Create the element
  var img=document.createElement("img");

  //Append Class
  if(typeof id !=='undefined')
  {
    img.setAttribute("id",id);
  }

  img.setAttribute("src",imageSource);
  img.setAttribute("width",width);
  img.setAttribute("height",height);

  return img;
}

/*
This function is used to create the div element enclosing a table with header thus, a table creation with 2 header values specification that can be CSS positioned
based on the enclosing div element.It is used to create the cntent of the learning modules being created the screen nad make proper modifications. For exmaple,
it accepts multiple paramter and returns the complex element as a call reusableTable("","one","table1","row1","head","head1","hmean","head2")
will create a div that encloses a table element with class table1 and insert into it a table row basically a header row which has two columns namely
head1 and headmean with their classes head1 and head2 and inserting it into the table and returning it. So it accpets all the associated paramters and returns the table
Similarly, a similar function call reusableTable("","two","table2","row2","SymboL"."symbol","Meaning","meaning"); will create a row with class row2 and columns
Symbol (class symbol) and Meaning (class meaning) and append it into a table with class table2 enclosed within the div which has a class two.
*/
function reusableTable(divText,divClass,tableClass,trClass,th1Text,th1Class,th2Text,th2Class)
{
  //Create the element
  var element=document.createElement("div");
  var elementText=document.createTextNode(divText);

  //Append Class
  if(typeof divClass !=='undefined')
  {
    element.classList.add(divClass)
  }

  //Create the Element
  var tableelement=document.createElement("table");

  //Add class is supplied
  if(typeof tableClass !=='undefined')
  {
    tableelement.classList.add(tableClass);
  }

  //Create the element
  var trrow=document.createElement("tr");

  //Append Class
  if(typeof trClass !== 'undefined')
  {
    trrow.classList.add(trClass);
  }

  //Create the Element
  var th1element=document.createElement("th");
  //Append the text node
  var th1elementtext=document.createTextNode(th1Text);
  th1element.appendChild(th1elementtext);

  //Add class is supplied
  if(typeof th1Class !=='undefined')
  {
    th1element.classList.add(th1Class);
  }


  //Create the Element
  var th2element=document.createElement("th");
  //Append the text node
  var th2elementtext=document.createTextNode(th2Text);
  th2element.appendChild(th2elementtext);

  //Add class is supplied
  if(typeof th2Class !=='undefined')
  {
    th2element.classList.add(th2Class);
  }

  //Append the Elmenents
  trrow.appendChild(th1element);
  trrow.appendChild(th2element);

  tableelement.appendChild(trrow);
  element.appendChild(tableelement);
  return element;



}
