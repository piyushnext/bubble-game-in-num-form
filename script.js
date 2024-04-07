var timer = 60;
var score = 0;
var knockrn = 0;

function increaseScore(){
    score += 1 ;
    document.querySelector("#scoreval").textContent = score ;
}

function getNewKnock(){
    knockrn = Math.floor(Math.random()*10);
    document.querySelector("#knockval").textContent = knockrn ;
}

function makeBubble(){
    var clutter = "";

for(var i = 1; i<=112; i++){
    var rn = Math.floor(Math.random()*10)
    clutter += `<div class="bubble">${rn}</div>`;
}

document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer(){
    var timerint = setInterval(function(){ 
        if (timer > 0 ) {
            timer--;
            document.querySelector("#timerval").textContent = timer;

        }
        else{
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML = `<h1> Dear Game is Over ! </h1>`;
        }
        
       
    } , 1000);

}

document.querySelector("#pbtm").addEventListener("click" , function(dets){
    // alert("chal raha he brohh");

    var clickednum = Number(dets.target.textContent);
    if(clickednum === knockrn){
        increaseScore();
        makeBubble();
        getNewKnock();
    }


}

);


runTimer();

makeBubble();

getNewKnock();

// increaseScore();
