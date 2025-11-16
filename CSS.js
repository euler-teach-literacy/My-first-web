let i = 1;
let number = 0;
number = prompt("Please guess a number! \n (the number is always random)");
let random = Math.floor(Math.random() * (10 - 1 + 1)) + 1;


while (number != random) { 
    if (number == random) {
        window.open("loop.html", "_self");
        break;
    } else{
        number = prompt("wrong answer! Please try again.\nYou guessed: "+i+"times")
        i = i+1;
        random = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    }
}
