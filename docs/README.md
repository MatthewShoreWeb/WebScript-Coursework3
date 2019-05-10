# Readme File

Program Explanation:
-------------------
The purpose of my application is to display information about a programming project to a team of programmers. The idea is that, for example there would be a team of programmers all working in the same room in an office and there would be a monitor on the wall running the unattended display so that at a glance they can view useful information such as the people involved in the project, the client and the project deadline.

Additionally, the program also can display an array of messages that the user would like to be displayed on the project board. The message board will load a new message every 5 seconds without having to refresh the page using AJAX get requests to access the JSON file in which they are stored.

How to use the program:
-----------------------

#### The program has four basic components:
1. Default Information: This is the default text information that describes the application to the user.
2. Display Options: Here the user can edit style options for the unattended display.
3. Project Options: Here you can edit the project information to be displayed on the unattended display.
4. Message Options: Here you can edit the message information to be displayed on the unattended display.
5. Show Display: This will show the unattended display in a new tab.

All of these components can be accessed by clicking the relevant component of the navigation bar at the top of the page. With the exception, however, of the message options which must be accessed via going to "Project Options" and clicking on the messages button. You can then return to "Project Options" by clicking the "Back" button.

The validation for entering project information and message information is fully automatic. This means that the buttons to submit the data to the server will only become enabled if the user has entered correct information.

Unattended Display:
-----------------------

The unattended display can be accessed by going to localhost:8080. The display will show the project information and the messages alternating.


Additional Information
----------------------

The program has been designed to be accessible for a wide audience, you can adjust components of the system such as the font-size, font-type, and colour scheme. The idea behind these is to allow for people with visual impairments to be able to use the system better.

In addition to this there are help icons beside each component of the system to explain to the user what each component does and provides sample input for the user as an example of what to enter.
