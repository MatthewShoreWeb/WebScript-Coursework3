# UP879148 Reflection 

### Node JS:

1. Express: I decided to use the express module for my application because it means that creating a HTTP server in Node JS was significantly easier. It also made simplifying the handling of post requests easier.
2. Body-Parser: I decided to user the body parser module also for my application. All this application does is act as middleware to format data into the specified format (JSON). This makes the system simpler and easier to understand.
3. File System: I used the Node File System module in my application in order to read and write to the JSON file. This is how the user data would be updated.

### POST and GET requests:

This coursework I learned a lot about implementing POST and GET requests in Node Javascript. Prior to this coursework I had some limited experience at doing POST and GET request such as in previous courseworks and some work in my own time. However, this coursework developed my skills in sending and manipulating data that has been posted to the server. For example, I had not implemented a JSON database previously meaning I had never really send data to a JSON file from the server and recieved data on the clients end from a JSON file.

AJAX is also a technology which I had previously not really used that much. Previously, I had use location.reload() to reload an entire web page, however, using AJAX has improved the quality of my system by enabling background refresh. A couple of improvements that I could have made to my system however, would have been to only execute the AJAX requests when a POST button is pressed (to eliminate the need for a refresh rate) and to have used AJAX for post requests to prevent the page redirecting. However, due to limited time I was unable to implement these two features.

### Javascript development:

This coursework has helped my Javascript improve a lot. I tried to make my Javascript code as efficient as it could possibly be. Example of how I attempted to do this would include:
1. Ternary Operator, I used a ternary operator for each one of my help buttons. This method of conditional programming was great as it allowed me to get simple if statements down to a single line of code, improving the overall efficiency of my program.
2. Functions, while this may seem obvious I did use many functions to avoid repeated code. Examples of this include the code for displaying different containers when buttons on the navigation bar is clicked and also in the code for the changing of colour schemes.

My knowledge of using Javascript to manipulate DOM elements also increased significantly during the span of this coursework. Throughout this application I take full advantage of hiding and showing DOM elements to display relevant information to the user when they click a particular input. I found this to be great as prior to this coursework I would have multiple HTML pages for this task. 

### CSS development:

This coursework allowed me to improve the quality of my CSS from previous projects and work that I have done. The improvements that I have done to my CSS include:
1. Using media querys to have different style options for devices below a certain screen size. This allows for improved scalability on smaller devices such as mobile phones.
2. Seperating styling by common attribute. In this coursework I ,for the first time, grouped HTML elements with the same properties together using commas. Then I could add any unique style options later. While this is not particularly advanced, it was nevertheless something which was unknown to me and has contributed to the development of my CSS skills in this project, greatly improving the CSS quality.
3. A small but useful 

### Usability Improvements/Considerations:

In this program I took care to consider usability. For every event in the program there is a help icon which, when pressed, will display to the user information about how to use a particular component of the application. This I feel will be very useful if the user gets stuck.

Another usability consideration that was made was to disable all buttons for input until the user has entered a valid input. Meaning that the user cannot even press the button until they have entered a valid input. This provides a very clear way for the user to get feedback on their input in essentially real time. If they ever get stuck they can also click one of the help icons mentioned above.

The program is also 100% scalable and works on all mobile and desktop devices. This is true for both the settings page and the unattened display. This allows the application to be used by a more diverse audience and gives the user choice as to how they wish to use the application.

### Accessibility Improvements/Considerations:

In this program there are several accessibility considerations which the user can take advantage of if they desire:
1. The user is able to change the font of the unattended display. This is useful if the user finds a particular font hard to read or if they simply prefer another font.
2. The user can change the colour scheme of the application, this is great for users who might find a particular colour scheme harder to read or if they simply prefer another colour scheme. All colour schemes have had colour blindness taken into account when they were chosen.
3. The user can take advantage of the slider which will change the size of the text on the unattended display. This is good for people who may find the font too big or too small or simply have difficulty reading a particular size of font. It also gives the user more choice.

## File Design:

1. For my application I decided to have a single JSON file in which to store all of my information about my unattended display. The reasoning behind this is because it is a reasonably easy way to implement a database. The reason I wanted a permenant store of data which can be changed by the user is incase there is a network failure for example, all of the users data and choices will not be lost.
2. I decided to have two Javascript files. One for the Unattended Display and another for the Settings Page. The reasoning behind this is to seperate the code for each component of the system. This will make maintaining each component much easier as a programmer can easily isolate the two sections of code from eachother as they are in different files.
3. I also decided to put all of my documentation inside of a "docs" folder. This is so that it is easily accessible to someone wishing to find and read it.
4. I decided to put all of my program files within a "public" folder. The reason for this is because it makes them easier to find for someone wanting to access them. Also it means in my server I can tell the server to simply server all the files inside of the public folder in one line.

## Conclusion

Overall, I have learnt a significant amount from undertaking this coursework. It has taught me a significant amount about both client-side and server-side programming. It has made me think more about how I layout and design the a system as well as made technologys such as Node JS and AJAX a lot clearer to me than they were previously. Overall, this has been a great development oppertunity for me in web programming.
