function countdownTimer() {
    var timer = 50;

    //starts at 50 sec
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = timer;
        timer = timer - 5;
    }, 0000);

    //Change to 45 sec
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = timer;
        timer = timer - 5;
    }, 5000);

    //40 sec
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = timer;
        timer = timer - 5;
    }, 10000);

    //35 sec
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = timer;
        timer = timer - 1;
    }, 15000);

    //34 sec
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = timer;
        timer = timer - 1;
    }, 16000);

    //33 sec
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = timer;
        timer = timer - 1;
    }, 17000);

    //32 sec
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = timer;
        timer = timer - 1;
    }, 18000);

    //31 sec
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = timer;
        timer = timer - 1;
    }, 19000);

    //30 sec
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = timer;
        timer = timer - 1;
    }, 20000);

    //29 sec
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = timer;
        timer = timer - 1;
    }, 21000);

    //28 sec
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = timer;
        timer = timer - 1;
    }, 22000);

    //27 sec
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = timer;
        timer = timer - 1;
    }, 23000);

    //26 sec
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = timer;
        timer = timer - 1;
    }, 24000);

    //25 sec
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = timer;
        timer = timer - 1;
    }, 25000);

    //24 sec
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = timer;
        timer = timer - 1;
    }, 26000);

    //23 sec
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = timer;
        timer = timer - 1;
    }, 27000);

    //22 sec
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = timer;
        timer = timer - 1;
    }, 28000);

    //21 sec
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = timer;
        timer = timer - 1;
    }, 29000);

    //20 sec
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = timer;
        timer = timer - 1;
    }, 30000);

    //19 sec
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = timer;
        timer = timer - 1;
    }, 31000);

    //18 sec
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = timer;
        timer = timer - 1;
    }, 32000);

    //17 sec
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = timer;
        timer = timer - 1;
    }, 33000);

    //16 sec
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = timer;
        timer = timer - 1;
    }, 34000);

    //15 sec
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = timer;
        timer = timer - 1;
    }, 35000);

    //14 sec
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = timer;
        timer = timer - 1;
    }, 36000);

    //13 sec
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = timer;
        timer = timer - 1;
    }, 37000);

    //12 sec
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = timer;
        timer = timer - 1;
    }, 38000);

    //11 sec
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = timer;
        timer = timer - 1;
    }, 39000);

    //10 sec
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = timer;
        timer = timer - 1;
    }, 40000);

    //9 sec
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = timer;
        timer = timer - 1;
    }, 41000);

    //8 sec
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = timer;
        timer = timer - 1;
    }, 42000);

    //7 sec
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = timer;
        timer = timer - 1;
    }, 43000);

    //6 sec
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = timer;
        timer = timer - 1;
    }, 44000);

    //5 sec
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = timer;
        timer = timer - 1;
    }, 45000);

    //4 sec
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = timer;
        timer = timer - 1;
    }, 46000);

    //3 sec
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = timer;
        timer = timer - 1;
    }, 47000);

    //2 sec
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = timer;
        timer = timer - 1;
    }, 48000);

    //1 sec
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = timer;
        timer = timer - 1;
    }, 49000);

    //0 sec, Blast Off!
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = "Blast Off!";
        alert("Blast Off!")
    }, 50000);



}

function ranNumGen() {
    var numb = Math.ceil(Math.random()*7);
    document.getElementById("RndNum").innerHTML = numb;

}

//play craps function from https://synchronic.uat.edu/courses/3843/assignments/137165?return_to=https%3A%2F%2Fsynchronic.uat.edu%2Fcalendar%23view_name%3Dmonth%26view_start%3D2021-01-01
function play() {
    //creates a die1 variable and assigns it from 1 through 6
    var die1 = Math.ceil(Math.random() * 6);

    //creates a die2 variable and assigns it from 1 through 6
    var die2 = Math.ceil(Math.random() * 6);


    //adds die1 and die2 to create a sum
    var sum = die1 + die2;
    //tells what number die1 is
    document.write("Die 1 = " + die1);
    //does a return by adding a new line
    document.write("<br/>");
    //displays die2
    document.write("Die 2 = " + die2);
    //adds a new line
    document.write("<br/>");
    //displays the sum
    document.write("Sum = " + sum);
    //adds a new line
    document.write("<br/>");
    //an if statement that assigns a sum of 7 or 11 as "craps - you lose"
    if (sum == 7 || sum == 11) {
        document.write("CRAPS - you lose");
        document.write("<br/>")
    }
    //if die1 and die2 are doubles and if die 1 modulus 2 = 0, will be even
    else if (die1 == die2 && die1 % 2 == 0) {
        document.write("DOUBLES - you win");
        document.write("<br/>");
    }
    //if you don't win or lose it will end in "push, please try again"
    else {
        document.write("push, please try again")
        document.write("<br/>");
    }
}