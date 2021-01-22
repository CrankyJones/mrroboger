# *Mr.Roboger's Neighborhood*
by Geof Rosenmund   
A demonstration of JavaScript and JQuery using loops and arrays with styling using CSS with Bootstrap.

### **Technologies Used**
* HTML
* JavaScript
* JQuery
* CSS
* Bootstrap

### **Description**
This project is a web page that takes a number enterd by the user and returns a greeting from Mr. Roboger. It displays all numbers from 0 to the number entered. It uses regular expressions to find numbers that are or contain a 3, 2, or 1, and it replaces them with text.


### **Setup/Installation**
* Clone the repository to your desktop from GitHub
* Navigate to the top level of the directory
* Open the index.html file in a browser

### **GitHub Link**
Repository: https://github.com/CrankyJones/mrroboger

### **Known Bugs**
There are no known bugs at this time.


### **Testing**

#### *Test 1*

Describe: roboger()   
Test: When user inputs a number it will display a list of numbers from 0 to that number.   
Expect roboger(4).toEqual(0,1,2,3,4)   

#### *Test 2*
Describe: roboger()   
Test: If there are any 3s in the data that is to be output, change them to "Won't you be my neigh-bot?"   
Expect roboger(3).toEqual (0,1,2,Won't you be my neigh-bot?)   

#### *Test 3*
Describe: roboger()   
Test: When a user enters any number that contains a 2, change them to "Boop!" (with less priority than 3).   
Expect roboger(3).toEqual (0,1,Boop!, Won't you be my neigh-bot?)

#### *Test 4*
Describe: roboger()   
Test: When a user entered number containsa  1 replace that number with "Beep!" (with less priority than 2 and 3.)  
Expect roboger(3).toEqual(0,Boop!,Boop!, Won't you be my neigh-bot?)  

#### *Test 5*
Describe: roboger(nameInput,numberInput)   
Test: When the user enters there name it will appear at the end on Won't you be my neigh-bot, [name]?   
Expect roboger(name,3).toEqual((0,Boop!,Boop!, Won't you be my neigh-bot, [name]?))

#### *Test 6*
Describe: inputCheck(element, form)
Test: To check whether or not the correct input type was received
Expect inputCheck(Fred).toEqual(true)


### **License**
[MIT](https://opensource.org/licenses/MIT)
Copyright (c) [2021] [Geof Rosenmund]

### **Contact Information**
Geof Rosenmund (geof.rosenmunds.email@gmail.com)