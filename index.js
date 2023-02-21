var box = ["paper", "scissor", "rock"];
var userChoice = document.querySelectorAll(".forUser");
var comChoice = document.querySelectorAll(".forCom");
var userChoice1 = document.querySelectorAll(".icon-img");

var score = 0;

var started = false;
// for pop up 
document.querySelector("#rule").addEventListener("click", function () {

    document.querySelector(".model").classList.toggle("active");
    document.querySelector("#overlayer").classList.toggle("active");
});

// for pop down
document.querySelector("#close-btn").addEventListener("click", function () {

    document.querySelector(".model").classList.remove("active");
    document.querySelector("#overlayer").classList.remove("active");
});

document.querySelector("#overlayer").addEventListener("click", function () {

    document.querySelector(".model").classList.remove("active");
    document.querySelector("#overlayer").classList.remove("active");
});


document.querySelector("#text-win-lose .btn").addEventListener("click", function () {

    document.querySelector("#mid-area").classList.remove("step-3");
    document.querySelector("#mid-area").classList.add("step-1");
    for (let i = 0; i < 3; i++) {
        userChoice[i].classList.remove("disabled");
        userChoice[i].classList.remove("circle-size-2");
        document.querySelectorAll(".icon-img")[i].classList.remove("icon-img-2");

        userChoice[i].classList.add("circle-size-1");
        userChoice[i].classList.add(box[i] + "-pos");

        comChoice[i].classList.add("disabled");
    }

    document.querySelector(".svg-bg").style.display = "block";
    document.querySelector("#text-win-lose").classList.add("disabled");
    document.querySelector(".who-picked").classList.add("disabled");
    started = false;

});

function startGame(value) {
    if (!started) {

        started = false;
        var choice;

        // step-1
        userPicked(value);

        // step-2
        setTimeout(function () {
            choice = comPicked();

        }, 1000);

        // step-3
        setTimeout(function () {
            console.log("step3->" + value + " " + choice);
            checkWinner(value, choice);

        }, 1000);
        started = true;
    }
}

function userPicked(value) {

    for (let i = 0; i < 3; i++) {
        userChoice[i].classList.add("disabled");
        userChoice[i].classList.remove("circle-size-1");
        userChoice[i].classList.remove(box[i] + "-pos");
        document.querySelectorAll(".icon-img")[i].classList.add("icon-img-2");
    }
    document.querySelector(".svg-bg").style.display = "none";


    document.querySelector("#mid-area").classList.remove("step-1");
    document.querySelector("#mid-area").classList.add("step-2");

    document.querySelector(".who-picked").classList.remove("disabled");
    document.querySelector("#" + value).classList.remove("disabled");
    document.querySelector("#" + value).classList.add("circle-size-2");

    document.querySelector(".dark-cir").classList.remove("disabled");
}

function comPicked() {

    document.querySelector(".dark-cir").classList.add("disabled");

    var num = Math.floor(Math.random() * 3);

    comChoice[num].classList.remove("disabled");

    return box[num];
}

function checkWinner(value1, value2) {

    setTimeout(function () {
        document.querySelector("#mid-area").classList.remove("step-2");
        document.querySelector(".who-picked").style.width = "80%";
        document.querySelector("#mid-area").classList.add("step-3");

        document.querySelector("#text-win-lose").classList.remove("disabled");

        if ((value1 === "paper" && value2 == "rock") || (value1 === "rock" && value2 == "scissor") || (value1 === "scissor" && value2 == "paper")) {
            console.log("you win");
            playSound("wow");
            score++;
            document.querySelector(".result-text").innerHTML = "YOU WIN";
            document.querySelector("#score").innerHTML = score;

        }
        else if (value1 === value2) {
            document.querySelector(".result-text").innerHTML = "DRAW";

        }
        else {
            console.log("you lose");
            playSound("lose");
            document.querySelector(".result-text").innerHTML = "YOU LOSE";
        }
    }, 1500);
}

function playSound(name) {
    var sound = new Audio("Sounds/" + name + ".mp3");
    sound.play();
}