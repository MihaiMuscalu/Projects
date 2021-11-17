var timeleft = 3;
let count = 0;
let ai = 0;
let aic = "";
let player = 0;




document.getElementById("start").addEventListener("click", function() {
    count++;
    if (count == 1) {
        StartGame();
    }
})




function StartGame() {

    document.getElementById("scissors").addEventListener("click", function() {
        player = 1;
        console.log(player);
    });
    document.getElementById("rock").addEventListener("click", function() {
        player = 2;
        console.log(player);

    });
    document.getElementById("paper").addEventListener("click", function() {
        player = 3;
        console.log(player);
    });

    ai = Math.floor(Math.random() * 3) + 1;
    Timer();
    console.log(ai);


}


function Game() {

    switch (ai) {
        case 1:
            aic = "Scissors";
            break;
        case 2:
            aic = "Rock";
            break;
        case 3:
            aic = "Paper";
            break;
    }
    console.log(aic);

    if (player == 1 && ai == 1 && timeleft <= 0 || player == 2 && ai == 2 && timeleft <= 0 || player == 3 && ai == 3 && timeleft <= 0) {
        document.getElementById("result").innerHTML = "Tie! Computer chose: " + aic;
    }
    if (player == 1 && ai == 2 && timeleft <= 0 || player == 2 && ai == 3 && timeleft <= 0 || player == 3 && ai == 1 && timeleft <= 0) {
        document.getElementById("result").innerHTML = "Lost! Computer chose: " + aic;
    }
    if (player == 2 && ai == 1 && timeleft <= 0 || player == 3 && ai == 2 && timeleft <= 0 || player == 1 && ai == 3 && timeleft <= 0) {
        document.getElementById("result").innerHTML = "Won! Computer chose: " + aic;
    }
    if (timeleft <= 0 && player == 0) {
        document.getElementById("result").innerHTML = "<div id='animation'>Too late! Click a button!</div>";
    }

}

function Timer() {

    // setTimeout(function() {
    //     console.log("eins");
    //     setTimeout(function() {
    //         console.log("zwei");
    //         setTimeout(function() {
    //             console.log("drei");
    //             // prüfen wer sieger
    //             // ausgabe
    //             // 
    //         }, 500)
    //     }, 500)
    // }, 500);
    var downloadtimer = setInterval(function() {

        timeleft--;
        document.getElementById("countdown").textContent = timeleft;
        if (timeleft <= 0) {
            Game();
            Reset();
            clearInterval(downloadtimer);
        }
    }, 1000);
}

function Reset() {
    document.getElementById("countdown").textContent = "3";
    timeleft = 3;
    count = 0;
    player = 0;
    console.log(count);
}