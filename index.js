document.querySelector("#text-win-lose").style.display = "none";

var box = ["paper", "scissor", "rock"];
var userChoice = document.querySelectorAll(".forUser");
var comChoice = document.querySelectorAll(".forCom");

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


userChoice.forEach(element => element.addEventListener("click", function (event) {

    var value = event.path[0].id;

    startGame(value);

    console.log(value);
}));


function startGame(value) {
    var choice;

    // step-1
    userPicked(value);

    // step-2
    setTimeout(function () {
        choice = comPicked();

    }, 3000);

    // step-3
    setTimeout(function () {
        console.log("step3->" + value + " " + choice);
        checkWinner(value, choice);

    }, 3000);
    // console.log("step4");
    return;
}

function userPicked(value) {
    for (let i = 0; i < 3; i++) {
        userChoice[i].classList.add("disabled");
        userChoice[i].classList.remove("circle-size-1");
        userChoice[i].classList.remove(box[i] + "-pos");
        document.querySelectorAll(".icon-img")[i].classList.add("icon-img-2");
    }
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
    document.querySelector("#mid-area").classList.remove("step-2");
    document.querySelector(".who-picked").style.width = "80%";
    document.querySelector("#mid-area").classList.add("step-3");

    setTimeout(function () {
        document.querySelector("#text-win-lose").style.display = "block";

        if ((value1 === "paper" && value2 == "rock") || (value1 === "rock" && value2 == "scissor") || (value1 === "scissor" && value2 == "paper")) {
            console.log("you win");
            document.querySelector(".result-text").innerHTML = "YOU WIN";
        }
        else if (value1 === value2) {
            document.querySelector(".result-text").innerHTML = "DRAW";

        }
        else {
            console.log("you lose");
            document.querySelector(".result-text").innerHTML = "YOU LOSE";
        }
    }, 1500);
}