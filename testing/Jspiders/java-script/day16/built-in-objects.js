/* there are diiferent built- in objects in javascript
    * Date
    * String
    * Math
    * RegEx
    * JSON
*/

// The built-in JavaScript object 'Date' allows us to work with dates and times displayed as part of the web page. It can be instantiated wherever required using one of the many constructors available
let dateObject1 = new Date();
console.log("Date is: " + dateObject1);
//OUTPUT: Date is: Thu Jun 18, 2020, 22:17:36 GMT+0530 (India Standard Time) 

let dataObject2 = new Date(2020, 5, 18, 22, 20, 23, 0000);
console.log("Date is: "+dataObject2);
//OUTPUT: Date is: Thu Jun 18, 2020, 22:20:23 GMT+0530 (India Standard Time) 

/*
The below table is about the getter methods available on object Date

METHOD	            DESCRIPTION 
getDate() 	        Return the numeric day of the month. The value ranges from 1 to 31. 
getDay() 	        Returns numeric day of week. Value ranges from 0 to 6. 
getFullYear() 	    Return four digit year (YYYY). 
getHours() 	        Returns numeric hour. Value ranges from  0 to 23. 
getMonth() 	        Returns numeric month. Value ranges from 0 to 11. 
getMilliseconds() 	Returns numeric milliseconds. Value ranges from 0 to 999.
getTime() 	        Returns number of milliseconds since 1/1/1970 at 12 a.m. 
*/


let dateObject3 = new Date(); 
console.log("Date is: " + dateObject3.getDate()); 
console.log("Day is: " + dateObject3.getDay()); 
console.log("Year is: " + dateObject3.getYear()); 
console.log("Horrs: " + dateObject3.getHours()); 
console.log("Month is: " + dateObject3.getMonth()); 
console.log("Time is: " + dateObject3.getTime()); 
console.log("Millisecond: " + dateObject3.getMilliseconds()); 
/* 
OUTPUT: 
Date is: 18 
Day is: 4 
Year is: 120 
Horrs: 22 
Month is: 5 
Time is: 1592499518512 
Millisecond: 512 
*/ 


/*
Setter methods available on object Date are listed below: 

METHOD	            DESCRIPTION 
setDate()           Sets the numeric day of the month. Value range from 1 to 31. 
setFullYear() 	    Sets four-digit year (YYYY). 
setHours() 	        Sets numeric hour. The value ranges from 0 to 23. 
setMonth() 	        Sets numeric month.  The value ranges from  0 to 11. 
setMilliseconds() 	Sets numeric milliseconds. The value ranges from 0 to 999. 
setTime() 	        Sets the number of milliseconds from 1/1/1970  at 12 a.m
*/


let dateObject4 = new Date(); 
dateObject4.setDate(3); 
dateObject4.setYear(1996); 
dateObject4.setHours(8); 
dateObject4.setMonth(7); 
dateObject4.setMilliseconds(2000); 
 
console.log("Date is: " +dateObject4.getDate()); 
console.log("Year is: " +dateObject4.getYear()); 
console.log("Hours: " +dateObject4.getHours()); 
console.log("Month is: " +dateObject4.getMonth()); 
console.log("Millisecond: " +dateObject4.getMilliseconds()); 
/* 
OUTPUT: 
Date is: 3 
Year is: 96 
Hours: 8 
Month is: 7 
Millisecond: 0 
*/ 
//STRING OBJECT METHODS

    //charAt()
    let myString1 = "Hello World";
    console.log("Character at position 4 is : " + myString.charAt(3));
    //Returns: Character in position 4 is: l 

    // concat() 
    // It accepts an unlimited number of string arguments, joins them, and returns the combined result as a new string. 
    let myStr1 = "Hello";
    let myStr2 = " ";
    let myStr3 = "World";
    console.log("Concatenated string: "+myStr1.concat(myStr2,myStr3));
    //Returns: Concatenated string: Hello World 

    //indeOf()
    let myString2 = "Hello World";
    console.log("Index of character l is : "+myString.indexOf('l'));
    //Returns: Index of character l is : 2 

    //match()
    // It makes use of the regular expression to look for a specific string and returns all the strings that match. 
    let myStr = "Are you enjoying JavaScript?";
    console.log(myStr.match(/you/));
    /*Returns an array: 
    [ 
      'you', 
      index: 4, 
      input: 'Are you enjoying JavaScript?', 
      groups: undefined 
    ] 
    */
    console.log("string found at index position: "+myStr.match(/you/).index);
    /*Returns:  string found at index position: 4*/


    //replace()
    // It accepts the  substring or the regular expression.Also, accepts the string that will be used for the replacement string. The idea is to replace all matches with the replacement string and provide the modified string.
    let myStr5 = "Are you enjoying JavaScript?";
    myStr5 = myStr5.replace('you', 'they');
    console.log(myStr5);
    //Returns Are they enjoying JavaScript? 

    //search()
    // It searches for a match of regular expression in the given string and returns its position. If there is no match, it returns -1.
    let myString9 = "can you find it?";
    console.log("Occurrence of find in statement1: "+myString9.search('find'));
    let myString8 = "Or you can not?";
    console.log("Occurrence of find in statement2: "+myString8.search('find'));
    /*Returns:
     The Occurrence of find in statement1: 8, 
     The Occurrence of find in statement2: -1*/

    //split()
    // It splits the given string into the array of substrings where separator marks the index for split begin and end. Suppose, the string consists of a comma (,) then the given string in the argument will be split at every comma.
    let myString = "Hello World";
    console.log("Split string based on spaces: "+myString.split(" "));
    //Returns: Split of string based on spaces: Hello,World 

    //slice()
    /*
    It extracts and returns part of a string. The Second parameter is optional. 
    If only one parameter is passed, it is the index from which string will start slicing from till the end of this string. If two parameters are passed, the string between these 2 index values is sliced. 
    Index value passed as the first parameter is included whereas index value passed as the second parameter is excluded. 
    */
    let myString10 = "Hello World";
    console.log("Slicing using 2 parameters: "+myString10.slice(0,5));
    console.log("Slicing using 1 parameter: "+myString10.slice(5));
    /*Returns:  
    Slicing using 2 parameters: Hello, 
    Slicing using 1 parameter: World*/


    // substring() 
    // It extracts and returns part of a string. Compared to the slice() method, it can accept a negative parameter, meaning slicing should start from the end. 
    let myString12 = "Hello World";
    console.log("Substring using 2 parameters: "+myString12.substring(2,5));
    console.log("Substring using 1 parameter: "+myString12.substring(5));
    /*Returns: 
    Substring using 2 parameters: llo 
    Substring using 1 parameter: World*/

    //substr()
    /*
    It is like the substring() method. 
    The difference is, if the second parameter is provided, it takes the first parameter as start Index and second parameter as length for slicing string
    */
    let myString13 = "Hello World";
    console.log("Substr using 2 parameters: "+myString13.substr(2,5));
    console.log("Substr using 1 parameter: "+myString13.substr(5));
    /*Returns: 
    Substr using 2 parameters: llo W 
    Substr using 1 parameter: World*/
    

//REGULAR EXPRESSIONS
    /*
    The RegExp object can be constructed using either of the two ways: 
    1) using RegExp constructor 
    2) as a literal value by enclosing within forward-slash (/) 
    */
    let myPattern1 = new RegExp(pattern, modifiers);
    let myPattern2 = /pattern/modifiers
    /*Here, 
    pattern specifies the string for regular expression 
    modifiers are optional 
    */

    // to make sure that string has @ and .com 
    let emailPattern = new RegExp("(?=.@*)(?=.+.com)");
    //to make sure that given number has digits between 0-9 and max length of 10 digits 
    let phoneNumberPattern = new RegExp("(?= [0-9]{10})");
    //to make sure password has characters a to z, number 0-9 and special symbol @,#,$,%,!,^,&,*,+ or underscore
    let passworPattern = new RegExp("(?=.*[0-9])(a-zA-Z)(?=.*[@#$%!^&*+_])");



//HISTORY OBJECT
/*
If required, BOM also gives a specific object to target only one of the window properties. For example, if the concern is about the list of URLs that have been visited by the user and there is no need for any other information about the browser, BOM gives the 'history' object for this. It provides programmatic navigation to one of the URLs previously visited by the user. Following are the properties or methods that helps in doing so. 
Property:
length returns the number of elements in the History list. Usage: history.length; 

Methods: 

back() method, loads previous URL from history list. Usage: history.back(); 
forward() method, loads next URL from history list. Usage: history.forward(); 
go() method, loads previous URL present  at the  given number from the history list. 
*/







