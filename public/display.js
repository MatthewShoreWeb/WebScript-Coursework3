'use strict';

//Loads content immediately on loading the page:
getProjectInfo();
getMessages();

//Reloads the project/style information every 10 seconds:
setInterval(function(){
  getProjectInfo();
}, 1000);

//Reloads the messages every 10 seconds:
setInterval(function(){
  getMessages();
}, 5000);

//AJAX GET request function for recieving the project/style information to be displayed:
function getProjectInfo(){
  let projectRequest = new XMLHttpRequest();
  projectRequest.open('GET', './data.json');

  projectRequest.onload = function() {
    let projectData = JSON.parse(projectRequest.responseText);

    //Gets and uses project information from JSON array:
    document.querySelector('#projectNameDisplay').textContent = 'Project Name: ' + projectData.projectInfo[0];
    document.querySelector('#projectClientDisplay').textContent = 'Project Client: ' + projectData.projectInfo[1];
    document.querySelector('#teamMembersDisplay').textContent = 'Team Members: ' + projectData.projectInfo[2];
    document.querySelector('#timeDisplay').textContent = 'Project Deadline: ' + projectData.projectInfo[3];
    document.querySelector('#languagesDisplay').textContent = 'Project Languages: ' + projectData.projectInfo[4];


    //Gets and uses style information from JSON array:
    document.querySelector('body').style.fontFamily = projectData.projectStyle[0];
  }
  projectRequest.send();
}

//Counter to keep track of which message is displayed:
let counter = 0;

//AJAX GET request function for recieving the messages to be displayed:
function getMessages(){
  let messageRequest = new XMLHttpRequest();
  messageRequest.open('GET', './data.json');
  messageRequest.onload = function() {
    let messageData = JSON.parse(messageRequest.responseText);


    //Gets and uses message information from JSON array:
    document.querySelector('#messageText').textContent = messageData.projectMessages[counter];
    counter = counter + 1;

    //Resets the counter if it's value exceeds the length of the message list:
    if (counter > (messageData.projectMessages.length - 1)){
      counter = 0;
    }
  }
  messageRequest.send();
}
