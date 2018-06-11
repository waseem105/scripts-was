//Style lI items
const myList = document.getElementsByTagName('li');

for (let i = 0; i < myList.length; i += 1) {
  myList[i].style.color = 'purple';
}

const errorNotPurple = document.getElementsByClassName('error-not-purple');

for (let i = 0; i < errorNotPurple.length; i += 1) {
  errorNotPurple[i].style.color = 'red';
}


// add class panel to newParagraph
  newParagraph.className = "panel";
  div.appendChild(newParagraph);

//Click event on heading
const myHeading = document.getElementById('myHeading');
const myButton = document.getElementById('myButton');
const myTextInput = document.getElementById('myTextInput');

myButton.addEventListener('click', () => {
  myHeading.style.color = myTextInput.value;
});


document.getElementsByTagName('body')[0];



//Show hide js
const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
const listUl = listDiv.querySelector('ul');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');

listUl.addEventListener('click', (event) => {
  if (event.target.tagName == 'BUTTON') {
    if (event.target.className == 'remove') {
      let li = event.target.parentNode;
      let ul = li.parentNode;
      ul.removeChild(li);
    }
    if (event.target.className == 'up') {
      let li = event.target.parentNode;
      let prevLi = li.previousElementSibling;
      let ul = li.parentNode;
      if (prevLi) {
        ul.insertBefore(li, prevLi);
      }
    }                        
  }
});

toggleList.addEventListener('click', () => {
  if (listDiv.style.display == 'none') {
    toggleList.textContent = 'Hide list';
    listDiv.style.display = 'block';
  } else {
    toggleList.textContent = 'Show list';                        
    listDiv.style.display = 'none';
  }                         
});

descriptionButton.addEventListener('click', () => {
  descriptionP.innerHTML = descriptionInput.value + ':';
  descriptionInput.value = '';
});

addItemButton.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.createElement('li');
  li.textContent = addItemInput.value;
  ul.appendChild(li);
  addItemInput.value = '';
});
  
  
  
  
//show hide div
toggleList.addEventListener('click', () => {
  if (listDiv.style.display == 'none') {
    toggleList.textContent = 'Hide list';
    listDiv.style.display = 'block';
  } else {
    toggleList.textContent = 'Show list';                        
    listDiv.style.display = 'none';
  }                         
});


//add input value to page
descriptionButton.addEventListener('click', () => {
  descriptionP.innerHTML = descriptionInput.value + ':';
  descriptionInput.value = '';
});

//Add LI to UL list
addItemButton.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.createElement('li');
  li.textContent = addItemInput.value;
  ul.appendChild(li);
  addItemInput.value = '';
});
  
 //remove item  
removeItemButton.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.querySelector('li:last-child');
  ul.removeChild(li);
});

///end show hide 




//Student Search
var message = '';
var student;
var search;

function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

function getStudentReport( student ) {
  var report = '<h2>Student: ' + student.name + '</h2>';
  report += '<p>Track: ' + student.track + '</p>';
  report += '<p>Points: ' + student.points + '</p>';
  report += '<p>Achievements: ' + student.achievements + '</p>';
  return report;
}

while (true) {
  search = prompt('Search student records: type a name [Jody] (or type "quit" to end)');
  if (search === null || search.toLowerCase() === 'quit') {
    break;
  }
  for (var i = 0; i < students.length; i += 1) {
    student = students[i];
    if ( student.name === search ) {
      message = getStudentReport( student );
      print(message);
    }
  }
}

//QUIZ JS 1 & 2

// quiz begins, no answers correct
var correct = 0;

// ask questions
var answer1 = prompt("Name a programming language that's also a gem");
if ( answer1.toUpperCase() === 'RUBY' ) {
 correct += 1; 
}
var answer2 = prompt("Name a programming language that's also a snake");
if ( answer2.toUpperCase() === 'PYTHON' ) {
 correct += 1; 
}
var answer3 = prompt("What language do you use to style web pages?");
if ( answer3.toUpperCase() === 'CSS' ) {
 correct += 1; 
}
var answer4 = prompt("What language do you use to build the structure of web pages?");
if ( answer4.toUpperCase() === 'HTML' ) {
 correct += 1; 
}
var answer5 = prompt("What language do you use to add interactivity to a web page?");
if ( answer5.toUpperCase() === 'JAVASCRIPT' ) {
 correct += 1; 
}

// output results
document.write("<p>You got " + correct + " out of 5 questions correct.<p>");

// output rank
if ( correct === 5 ) {
  document.write("<p><strong>You earned a gold crown!</strong></p>");  
} else if (correct >= 3) {
  document.write("<p><strong>You earned a silver crown.</strong></p>");  
} else if (correct >= 2) {
  document.write("<p><strong>You earned a bronze crown.</strong></p>");  
} else {
  document.write("<p><strong>No crown for you. You need to study.</strong></p>");
}


///2 Quiz

var questions = [
  ['How many states are in the United States?', 50],
  ['How many continents are there?', 7],
  ['How many legs does an insect have?', 6]
];
var correctAnswers = 0;
var question;
var answer;
var response;

function print(message) {
  //document.write(message);
  document.getElementById('output1').innerHTML = message;
}

for (var i = 0; i < questions.length; i += 1) {
  question = questions[i][0];
  answer = questions[i][1];
  response = prompt(question);
  response = parseInt(response);
  if (response === answer) {
    correctAnswers += 1;
  } 
}

html = "You got " + correctAnswers + " question(s) right."
print(html);




//Function Declaration

function divide1(a, b) {
  return a / b; 
}

//Function Expression

const divide2 = function(a, b) {
  return a / b;
}

//Arrow Function Expression

const divide3 = (a, b) => {
  return a / b;
}

//Arrow Function Expression - cocise

const divide4 = (a, b) => a / b;





// Interpolation

function like(thing) {
  return 'I like ' + thing;
}

function love(thing) {
  return `I love ${thing}`;
}

const sentence = `<p>${like('apples')}, but ${love('oranges')}.</p>`;
document.querySelector('.interpolation').innerHTML = sentence;



//template literals

const fruitList = 
  "<ul>" +
    "<li>Kiwi</li>" +
    "<li>Lime</li>" +
    "<li>Pineapple</li>" +
  "</ul>";

const vegetableList = `
  <ul>
    <li>Potato</li>
    <li>Onion</li>
    <li>Broccoli</li>
  </ul>
`;

document.querySelector('.fruits').innerHTML = fruitList;
document.querySelector('.vegetables').innerHTML = vegetableList;



//text input elements are the only children that trigger style
let section = document.getElementsByTagName('section')[0];

section.addEventListener('click', (e) => {
  if (e.target.tagName != "INPUT") return;
  e.target.style.backgroundColor = 'rgb(255, 255, 0)';
});
  

  //parentNode remove on click
  listUl.addEventListener('click', (event) => {
  if (event.target.tagName == 'BUTTON') {
    let li = event.target.parentNode;
    let ul = li.parentNode;
    ul.removeChild(li);
  }
});


//Traverse to the parent element of removeMe
const removeMe = document.querySelector('.remove_me');
let parent = removeMe.parentNode;
parent.removeChild(removeMe);

// *>>>>>>>>>>>>>>>TEST DOME 

//function that converts user entered date formatted as M/D/YYYY to a format required by an API (YYYYMMDD). The parameter "userDate" and the return value are strings.
//For example, it should convert user entered date "12/31/2014" to "20141231" suitable for the API.
//Starting code:
function formatDate(userDate) {
  // format from M/D/YYYY to YYYYMMDD
}

console.log(formatDate("12/31/2014"));

//Solution 2
function formatDate(userDate) {
  userDate = new Date(userDate);
  y = userDate.getFullYear().toString();
  m = (userDate.getMonth() + 1).toString();
  d = userDate.getDate().toString();
  if (m.length == 1) m = '0' + m;
  if (d.length == 1) d = '0' + d;
  return y + m + d;

}

//image gallery is a set of images with corresponding remove buttons. This is the HTML code for a gallery with two images:
//Implement the setup function that registers a click event handler and implements the following logic: When the button of class remove is clicked, its parent
//element should be removed from the gallery.

//Starting code:

function setup () {
  // Write your code here.
}

// Example case.
// document.body.innerHTML = `
// <div class="image">
//   <img src="https://goo.gl/kjzfbE" alt="First">
//   <button class="remove">X</button>
// </div>
// <div class="image">
//   <img src="https://goo.gl/d2JncW" alt="Second">
//   <button class="remove">X</button>
// </div>`;

setup();

$(".remove").get(0).click();
console.log(document.body.innerHTML);

//Solution 3
function setup() {
  var els = document.getElementsByClassName('remove');

for (var i = 0; i < els.length; i++) {
  els[i].addEventListener('click', function () {
    this.parentNode.remove();
  });
 }
}

// Example case.
// document.body.innerHTML = `
// <div class="image">
//   <img src="https://goo.gl/kjzfbE" alt="First">
//   <button class="remove">X</button>
// </div>
// <div class="image">
//   <img src="https://goo.gl/d2JncW" alt="Second">
//   <button class="remove">X</button>
// </div>`;

// setup();

// $(".remove").get(0).click();
// console.log(document.body.innerHTML);


//The handler is targeting each button in the list. When any one of the buttons is clicked, 
//a class of highlight should be added to the paragraph element immediately preceding that button inside the parent list item element.

const list = document.getElementsByTagName('ul')[0];

list.addEventListener('click', function(e) {
  if (e.target.tagName === 'BUTTON') {
    if(e.target.textContent.toLowerCase() === 'highlight') {
      let li = e.target.parentNode; // Can be removed; not needed
      let p = e.target.previousElementSibling;
      let ul = li.parentNode; // Can be removed; not needed
      if (p.tagName === 'P') { // Just to be safe that we are highlighting a paragraph tag
        p.classList.add('highlight');
      }
    }

  }
});

// ***** ANGULAR JS

//Create a new angular app named foobar
angular.module("foobar", []);

//Attach a custom directive called 'customDirective' to the module.
//In the body of the directive's callback function, log this String: ""
angular.module('foobar', [])
.directive('customDirective', function() {
  console.log("This is a custom directive!");

});