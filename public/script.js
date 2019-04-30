'use strict';

//Hides two divs for editing display/project:
document.querySelector('#displayOptions').style.display = 'none';
document.querySelector('#projectOptions').style.display = 'none';

//Colour scheme arrays:
//Array format: [Header, Nav, Body]
const defaultScheme = ['#FFCF79', 'green', 'lightgreen'];
const greyScheme = ['lightgrey', 'black', 'grey'];
const pinkScheme = ['pink', 'purple', 'pink'];
const blueScheme = ['lightblue', 'blue', 'lightblue'];
const university = ['#5B33A2', '#3C023C', 'white'];


//Buttons to change what is displayed to the user:
//Displays the program information:
document.querySelector('#informationButton').addEventListener('click', function(){
  document.querySelector('#displayOptions').style.display = 'none';
  document.querySelector('#projectOptions').style.display = 'none';
  document.querySelector('#information').style.display = 'block';
});

//Displays options for changing GUI settings:
document.querySelector('#displayOptionsButton').addEventListener('click', function(){
  document.querySelector('#information').style.display = 'none';
  document.querySelector('#projectOptions').style.display = 'none';
  document.querySelector('#displayOptions').style.display = 'block';
});

//Displays options for entering project information:
document.querySelector('#projectOptionsButton').addEventListener('click', function(){
  document.querySelector('#information').style.display = 'none';
  document.querySelector('#displayOptions').style.display = 'none';
  document.querySelector('#projectOptions').style.display = 'block';
});

//Opens, in a new tab, the unattended display:
document.querySelector('#displayProjectButton').addEventListener('click', function(){
  window.open('index.html');
});


//Changes the font via drop down box:
document.querySelector('#fontSelection').addEventListener('change', function(){
  let fontSelection = document.querySelector('#fontSelection').value;
  document.querySelector('body').style.fontFamily = fontSelection;
});

//Changes the colour scheme via drop down box:
document.querySelector('#colourSelection').addEventListener('change', function(){
  let currentArray = defaultScheme
  let currentSelection = document.querySelector('#colourSelection').value;
  if(currentSelection == 'grey'){
    currentArray = greyScheme
  } else if(currentSelection == 'pink'){
    currentArray = pinkScheme
  } else if(currentSelection == 'blue'){
    currentArray = blueScheme
  } else if(currentSelection == 'university') {
    currentArray = university;
  }
  document.querySelector('header').style.backgroundColor = currentArray[0];
  document.querySelector('nav').style.backgroundColor = currentArray[1];
  document.querySelector('body').style.backgroundColor = currentArray[2];
});

//Script to change the font size via a slider:
document.querySelector('#fontRange').addEventListener('input', function(){
  let sliderValue = document.querySelector('#fontRange').value;
  document.querySelector('header').style.fontSize = sliderValue/40 + 'vh';
  document.querySelector('nav').style.fontSize = sliderValue/50 + 'vh';
  document.querySelector('div').style.fontSize = sliderValue/50 + 'vh';
});


//Event listeners for hovering over help buttons:
//Font help button click event:
document.querySelector('#fontHelp').addEventListener('click', function(){
  let fontInformation = document.querySelector('#fontInformation');
  fontInformation.style.display === 'block' ? fontInformation.style.display = 'none' : fontInformation.style.display = 'block';
});

//Colour help button click event:
document.querySelector('#colourHelp').addEventListener('click', function(){
  let colourInformation = document.querySelector('#colourInformation');
  colourInformation.style.display === 'block' ? colourInformation.style.display = 'none' : colourInformation.style.display = 'block';
});

//Size help button click event:
document.querySelector('#sizeHelp').addEventListener('click', function(){
  let sizeInformation = document.querySelector('#sizeInformation');
  sizeInformation.style.display === 'block' ? sizeInformation.style.display = 'none' : sizeInformation.style.display = 'block';
});

//Project help button click event:
document.querySelector('#displayHelp').addEventListener('click', function(){
  let projectHelp = document.querySelector('#projectHelp');
  projectHelp.style.display === 'block' ? projectHelp.style.display = 'none' : projectHelp.style.display = 'block';
});

//Validation for submitting project information:
let nameInput = document.querySelector('#projectName').value;
let clientInput = document.querySelector('#projectClient').value;
let teamInput = document.querySelector('#teamMembers').value;
let dayInput = document.querySelector('#dayDeadline').value;
let monthInput = document.querySelector('#monthDeadline').value;
let yearInput = document.querySelector('#yearDeadline').value;
let languageInput = document.querySelector('#projectLanguages').value;

document.getElementsByName('input').addEventListener('input', function(){
  console.log('hello');
});


document.querySelector('#submitBtn').addEventListener('click', function(){
  window.open('settings.html');
});



























































//
