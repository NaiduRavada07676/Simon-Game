

//simon game:
let gameSeq = [];
let userSeq = [];

let btns = ["yellow","red","purple","green"];
let started = false;
let level = 0;

let h2 =document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started == false){
        console.log("game is started");
        started = true;

        levelup();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}

function levelup(){
    userSeq = [];
    level++;
    h2.innerText = `level ${level}`;
    
    let randIdx = Math.floor(Math.random() * 3);
    randcolor = btns[randIdx];
    randBtn = document.querySelector(`.${randcolor}`);
    gameSeq.push(randcolor);
    console.log(gameSeq);
     gameFlash(randBtn);

}

function checkAns(idx){
    // let idx = level-1;

    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq[idx] === gameSeq[idx]){
            setTimeout(levelup,1000);
        }
        console.log("same value");
    }else{
        h2.innerHTML = `gameover! your score was <b>${level} </b> press any key to start.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }
}

function btnpress(){
    // console.log(this);
    let btn = this;
    userflash(btn);

    usercolor = btn.getAttribute("id");
    userSeq.push(usercolor);

    checkAns(userSeq.length-1);

}

let allBtns =document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnpress)
}

function reset(){
    started =false;
    gameSeq = [];
    userSeq = [];
    level =0;
}