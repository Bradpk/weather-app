Weather App Project

Description

For this project, we will be using an external API to retrieve weather data to create a webpage that prompts users to enter a zip code, then displays current weather information for that location or a friendly error message if the zip code is not found.

Step by step. 
Functions are when something “happens” 
So what’s happening?


BEGIN

User goes to the page

The page will initially contain:
    A title (Weather App)
    An input box (For inputting the zip code) 
    A button (For retrieving the data) 

The user will enter a zip code into the input box.

The user will click the “Get Weather” button. 
(Event Handler)(Function) 

It will check if what the user entered is a valid zip code or not, if not an error message will occur.
(Function, could maybe be combined with the function underneath?)

If what the user entered is a valid zip code then the following will happen:
    The input will be used as the parameter for a data retrieve Function. 
    Data will be retrieved using an API request. 
(Function that contains an API request)

The data will be passed to an object and stored as key value pairs
(Object)

The data will be used in another function and assigned to html elements so that the data will be visible to the user.
(Function) 

 A heading “City” will appear displaying the city of the zip code entered. 
 A heading “Temperature” will appear displaying the current temperature of the zip code in Kelvins, Fahrenheit and Celsius
 A heading “Condition” will display the current weather condition of the zip code. e.g cloudy, rainy, sunny etc 
 A heading “Other Info” will display a picture associated with the condition. e.g If condition is rainy, display a rain symbol etc.
 
END


INIT - Variables/Functions/Event-Handlers/API Requests/Objects


Variables:

The HTML tags that will be used in JavaScript (document.getElementById)

1. ZipCode 
2. Get Weather Button 
3. City 
4. City Info 
5. Temperature 
6. Kelvin
7. Fahrenheit 
8. Celsius 
9. Condition 
10. Condition Info 
11. Other Info 
12. Image 

13. The API Key
14. The API URL 


Functions:

verifyZipcode
(Function to check whether the user entered a valid zip code)
	// Zipcode must be exactly five integers with no other characters
	// Display some kind of error message if entered incorrectly


retrieveData 
(Function to receive the data based off the entered zip code, make an API call based off that zip code and store the data in an object as key value pairs)
	//Takes the verified zip code input 
	//Puts it into the API  .get request
	//The received data is stored as properties in an object as key value pairs


displayData 
(Function to change the content of the html elements based off the data in the object. Most of the html elements should be hidden until the user clicks the button)
	//Updates the text content of the html variables based off the appropriate key value pair stored in the object. 

Event Handlers:
(addEventListener to set off the whole process) 
	//addEventListener attached to the “getWeatherButton” variable. When clicked it will trigger the verifyZipcode function which sets off a domino effect triggering the retrieveData function and the displayData function



