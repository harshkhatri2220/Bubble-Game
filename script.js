let randomHit;
let score=0;
let timer = 60;

const makeBubble = () =>{
    let bubble="";
    let randomInteger = 0;
    
    
    for(let i=0 ; i<98 ; i++)
    {
        randomInteger = Math.floor(Math.random()*10);
        bubble += `<div id="bub">${randomInteger}</div>`
         
    }
    document.querySelector('#bottom').innerHTML=bubble;
}
makeBubble();

const setTimer = () =>{
    let timerInterval = setInterval(() => {
        if(timer>0)
        {
            timer--;
            document.querySelector("#timer").textContent=timer;
        }
        else
        {

            clearInterval(timerInterval);
document.querySelector("#bottom").innerHTML = `<div class="bottomAfterGameOver">
<h1 style="color: white;">Score  : ${score} </h1>
  <h1 style="color: white;">Game Over</h1>
  <p style="color: white;">Click to play again</p>
  </div>
  `;


        }
    }, 1000);
}
setTimer();

const getNewHit = () =>{
    randomHit=Math.floor(Math.random()*10);
    document.querySelector("#randomHit").textContent=randomHit;
}
getNewHit();


document.querySelector("#bottom").addEventListener("click" , (details)=>{
    bubbleClicked = (Number(details.target.textContent));
    if(bubbleClicked == randomHit)
    {
    score+=1;
    document.querySelector("#score").textContent=score;
    }
    makeBubble();
    getNewHit();

    if(timer == 0)
    {
        timer=60;
        score=0;
    document.querySelector("#score").textContent=score;

        setTimer();
    }

})