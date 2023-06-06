console.log(window)
console.log(typeof window)
console.log(window.screen)
// type casting

    //implicit type casting
    console.log(5+5);//10
    console.log(5+'5');//55 number converted to string data type
    console.log(5+'k');//5k number converted to string data type
    console.log(5-'5');//0 string converted to number data type
    console.log(5-'l');// Nan(not a number, but it's a number) BCZ string can't be converted to number
    console.log(typeof NaN);//number
    console.log((NaN) ? true:false);//false
    
    //explicit type casting
    console.log(Number('5')+5);//10 string is explicitly converted to number by Number function
    console.log(typeof Number);// function
    console.log(String(5)+5);//55 number is converted into string data type
    