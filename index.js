document.querySelector(".text").style.display = "none";
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

    // if (event.path[0] == userChoice[0]) {
    //     console.log(userChoice[0].id);
    //     console.log("h1");
    //     startGame(userChoice[0]);
    // }
    // else if (event.path[0] == userChoice[1].id) {
    //     console.log(userChoice[1]);
    //     console.log("h2");
    //     startGame(userChoice[1]);

    // }
    // else if (event.path[0] == userChoice[2]) {
    //     console.log(userChoice[2].id);
    //     console.log("h3");
    //     startGame(userChoice[2]);

    // }

    var value = event.path[0].id;

    startGame(value);

}));

// userChoice.addEventListener("click", function () {

//     startGame(userChoice[0]);
// });


function startGame(value) {
    var choice;

    // step-1
    document.querySelector(".text").style.display = "block";
    // console.log("step1");
    userPicked(value);

    // step-2
    // console.log("step2");
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
        document.querySelectorAll(".icon-img")[i].classList.add("icon-img-2");
    }
    document.querySelector("#mid-area").classList.remove("step1");
    document.querySelector("#mid-area").classList.add("step-2");


    userChoice[0].classList.remove("paper-pos");
    userChoice[1].classList.remove("scissor-pos");
    userChoice[2].classList.remove("rock-pos");

    document.querySelector("#" + value).classList.remove("disabled");
    document.querySelector("#" + value).classList.add("step-2-left");
    document.querySelector("#" + value).classList.add("circle-size-2");

    document.querySelector(".dark-cir").classList.remove("disabled");
}

function comPicked() {

    document.querySelector(".dark-cir").classList.add("disabled");
    document.querySelector(".text").classList.add("text-2");

    var num = Math.floor(Math.random() * 3);

    comChoice[num].classList.remove("disabled");
    comChoice[num].classList.add("step-3-right");

    // console.log(box[num]);
    return box[num];
}

function checkWinner(value1, value2) {
    document.querySelector("#mid-area").classList.remove("step-2");
    document.querySelector("#mid-area").classList.add("step-3");

    document.querySelector(".you-text").classList.add("text-3");
    document.querySelector(".house-text").classList.add("text-3");

    document.querySelector("#text-win-lose").style.display = "block";

    document.querySelector("#" + value1).classList.remove("step-2-left");
    document.querySelector("#" + value1).classList.add("step-3-left");

    document.querySelector("#" + value2 + "-c").classList.remove("step-2-right");
    document.querySelector("#" + value2 + "-c").classList.add("step-3-right");

    if ((value1 === "paper" && value2 == "rock") || (value1 === "rock" && value2 == "scissor") || (value1 === "scissor" && value2 == "paper")) {
        console.log("you win");
        document.querySelector(".win-text").classList.remove("disabled");
        return;
    }
    else if (value1 === value2) {
        document.querySelector(".win-text").classList.remove("disabled");
        document.querySelector(".win-text").innerHTML = "DRAW";

    }
    else {
        console.log("you lose");
        document.querySelector(".lose-text").classList.toggle("disabled");
        return;
    }
}