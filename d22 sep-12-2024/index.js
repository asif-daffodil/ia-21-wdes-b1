const city = "Narshindi";

if(city == "Noyakhali"){
    console.log("sorry noyakhaliia are not allowed to enter");
}else if(city == "Barishal"){
    console.log("sorry Barishalia are not allowed to enter");
}else if(city == "Bhrammonbaria"){
    console.log("sorry Bhrammonbaria are not allowed to enter");
}else{
    console.log("Welcome to our website");
}

if (city != "Barishal" && city != "Bhrammonbaria" && city != "Noyakhali") {
    if(city == "Narshindi"){
        console.log("Without Banana, you can't enter");
    }
}else{
    console.log("Welcome to our website");
}

const gender = "Others";
const age = 19;

if(gender == "Female") {
    if(age >= 18) {
        console.log("You are allowed to marry");
    }else{
        console.log("You are not allowed to marry");
    }
}else if (gender == "Male"){
    if(age >= 21) {
        console.log("You are allowed to marry");
    }else{
        console.log("You are not allowed to marry");
    }
}else{
    console.log("Tiktokers are not allowed to marry");
}

const day = "Friday";

switch(day){
    case "Saturday":
        console.log("Today is Saturday");
        break;
    case "Sunday":
        console.log("Today is Sunday");
        break;
    case "Monday":
        console.log("Today is Monday");
        break;
    case "Tuesday":
        console.log("Today is Tuesday");
        break;
    case "Wednesday":
        console.log("Today is Wednesday");
        break;
    case "Thursday":
        console.log("Today is Thursday");
        break;
    case "Friday":
        console.log("Today is Friday");
        break;
    default:
        console.log("Invalid Day");
}