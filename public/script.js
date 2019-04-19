'use strict';
$('#displayOptions').hide();
$('#projectOptions').hide();

//Colour scheme arrays:
//Array format: Header, Nav, Body, Font
const defaultScheme = ['#FFCF79', 'green', 'lightgreen', 'white'];
const greyScheme = ['lightgrey', 'black', 'grey', 'red'];
const redScheme = ['pink', 'purple', 'pink', 'black'];
const blueScheme = ['lightblue', 'blue', 'lightblue', 'black'];


// Buttons script to change what is displayed to the user:
$('#informationButton').click(function(){
  $('#displayOptions').hide();
  $('#projectOptions').hide();
  $('#information').show();
});

$('#displayOptionsButton').click(function(){
  $('#information').hide();
  $('#projectOptions').hide();
  $('#displayOptions').show();
});

$('#projectOptionsButton').click(function(){
  $('#information').hide();
  $('#displayOptions').hide();
  $('#projectOptions').show();
});

$('#displayProjectButton').click(function(){
  window.open('index.html');
});

//Script to change the font via drop down box:
$('#fontSelection').change(function(){
   $('body').css("font-family", $('#fontSelection').val());
});

//Script to change the colour scheme via drop down box:
$('#colourSelection').change(function(){

  if($('#colourSelection').val() == 'grey'){
    $('header').css("background-color", greyScheme[0]);
    $('nav').css("background-color", greyScheme[1]);
    $('body').css("background-color", greyScheme[2]);
  } else if($('#colourSelection').val() == 'pink'){
    $('header').css("background-color", redScheme[0]);
    $('nav').css("background-color", redScheme[1]);
    $('body').css("background-color", redScheme[2]);
  } else if($('#colourSelection').val() == 'blue'){
    $('header').css("background-color", blueScheme[0]);
    $('nav').css("background-color", blueScheme[1]);
    $('body').css("background-color", blueScheme[2]);
  } else {
    $('header').css("background-color", defaultScheme[0]);
    $('nav').css("background-color", defaultScheme[1]);
    $('body').css("background-color", defaultScheme[2]);
  }

});

//Event listeners for hovering over help buttons:
//Font help button hover:
$('#fontHelp').hover(function(){
  $('#fontInformation').show();
}, function(){
  $('#fontInformation').hide();
});

//Colour help button hover:
$('#colourHelp').hover(function(){
  $('#sizeInformation').show();
}, function(){
  $('#sizeInformation').hide();
});

//Size help button hover:
$('#sizeHelp').hover(function(){
  $('#sizeInformation').show();
}, function(){
  $('#sizeInformation').hide();
});

//Project help button hover
$('#displayHelp').hover(function(){
  $('#projectHelp').show();
}, function(){
  $('#projectHelp').hide();
});


//Script to recieve the information:
$('#submitBtn').click(function(){
  //Variables to recieve the user input:
  let pName = $('#projectName').val();
  let pClient = $('#projectClient').val();
  let teamMembers = $('#teamMembers').val();
  let deadLine = $('#dayDeadline').val() + '/' + $('#monthDeadline').val() + '/' + $('#yearDeadline').val();
  let pLanguages = $('#projectLanguages').val();
  userInputValidation(pName, pClient, teamMembers, deadLine, pLanguages);
  let dataObject = JSON.parse({"pName":pName, "pClient":pClient, "teamMembers": teamMembers, "deadLine": deadLine, "pLanguages": pLanguages});
  alert(JSON.stringify(dataObject));
});

//Function to ensure the user enters valid information:
function userInputValidation(pName, pClient, tMembers, dInput, pLanguages){
  //Checks existance of input first:
  if(pName == '' || pClient == '' || tMembers == '' || dInput == '' || pLanguages == ''){
    alert('undefined');
    //Validates the dates, ensures numerical input:
  } else if(isNaN($('#dayDeadline').val()) || isNaN($('#monthDeadline').val()) || isNaN($('#yearDeadline').val())){
      alert('Dates must contain only integer values.');
    } else if($('#dayDeadline').val() > 31 || $('#monthDeadline').val() > 12 || $('#yearDeadline').val() < 2019 || $('#yearDeadline').val() > 2035){
      alert('input error');
  }
}
