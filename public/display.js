'use strict';

getProjectInfo();
getStyleInfo();

setInterval(function(){
  getProjectInfo();
  getStyleInfo();
}, 1000);

function getProjectInfo(){
  let projectRequest = new XMLHttpRequest();
  projectRequest.open('GET', './data.json');

  projectRequest.onload = function() {
    let projectData = JSON.parse(projectRequest.responseText);
    document.querySelector('#projectNameDisplay').textContent = 'Project Name: ' + projectData.pName;
    document.querySelector('#projectClientDisplay').textContent = 'Project Client: ' + projectData.pClient;
    document.querySelector('#teamMembersDisplay').textContent = 'Team Members: ' + projectData.teamMembers;
    document.querySelector('#timeDisplay').textContent = 'Project Deadline: ' + projectData.deadLine;
    document.querySelector('#languagesDisplay').textContent = 'Project Languages: ' + projectData.pLanguages;
  };

  projectRequest.send();

}

function getStyleInfo(){
  let styleRequest = new XMLHttpRequest();
  styleRequest.open('GET', './style.json');

  styleRequest.onload = function(){
    let styleData = JSON.parse(styleRequest.responseText);
    console.log(styleRequest.fontSelect);
    document.querySelector('body').style.fontFamily = styleData.fontSelect;
  };

  styleRequest.send();

}
