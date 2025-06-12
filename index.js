const convertToCelsius = (farenheight) => {
    return (farenheight - 32) * 5/9;
}

const describeTemperature = (farenheight) => {
    if (convertToCelsius(farenheight) < 0) {
        str = "very cold";
    } else if (convertToCelsius(farenheight) < 20) {
        str = "cold";        
    } else if (convertToCelsius(farenheight) < 30) {
        str = "warm";        
    } else if (convertToCelsius(farenheight) < 40) {
        str = "hot";
    } else if (convertToCelsius(farenheight) >= 40) { 
        str = "very hot";
    }
    return str;
}


const userInput = prompt(
  "Please enter a temperature in farenheight. It will then be converted to celsius.",
  ""
);

let farenheight = userInput;


window.alert(`The temperature you entered is equivalent to ${convertToCelsius(farenheight)} degrees celsius. It would feel ${describeTemperature(farenheight)}.`);
