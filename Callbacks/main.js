//Callbaks
//ex1
const push = function () {
    console.log("pushing it!")
}
  
  const pull = function () {
    console.log("pulling it!")
}
  
function pushPull(func)
{
    func()
}

pushPull(push) //should print "pushing it!"
pushPull(pull) //should print "pulling it!"

//ex2
const returnTime = function (time) {
    console.log('The current time is: ' + time)
}

function getTime(ReturnTime) {
    const time = new Date()
    returnTime(time)
}

getTime(returnTime)


//ex3
function logData(data){
    console.log(data)
}
const displayData = function (alertDataFunc, logDataFunc, data) {
    //alertDataFunc(data);
    logDataFunc(data);
};
 
displayData(alert, logData, "I like to party")
  
//ex4 
const add = (x, y, z) => x + y + z
// b= add (1 , 2, 3)
// console.log(b)

//ex5

const capitalize = (strr) =>{
    return (strr[0].toUpperCase()+(strr.toLowerCase()).slice(1,strr.length))
}

console.log(capitalize("bOb") )// returns Bob
console.log(capitalize("TAYLOR")) // returns Taylor
console.log(capitalize("feliSHIA")) // returns Felishia

//ex6
const determineWeather = temp => {
    if(temp > 25){
      return "hot"
    }
    return "cold"
  }
const commentOnWeather = (temp) =>{return ("It's "+determineWeather(temp))}
  
console.log(commentOnWeather(30)) //returns "It's hot"
commentOnWeather(22) //returns "It's cold"

//ex7
const explode = (lightFunc, soundFunc, sound) => {
    window.onload= function(){
        
    lightFunc()
    soundFunc(sound)
    }
}
      
const shineLight = () => document.getElementById("box").style.backgroundColor = "yellow"
      
const makeSound = sound => alert(sound)
      
explode(shineLight, makeSound, "BOOM")
  
  