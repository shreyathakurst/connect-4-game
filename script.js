const dots = document.querySelectorAll('.dot');
const timer = document.querySelector('.timer');

let turn = 0;
let played = false;
dots.forEach((dot,index)=>{
 
  dot.addEventListener('click', ()=>{
    if(!played){
    if(turn == 0){
      dot.classList.add("active-player1");
    }else{
      dot.classList.add("active-player2");
    } 
    played = true;
  } 
  });

});



setInterval(()=>{
  let time = parseInt(timer.innerText);
  time = time-1;
  timer.innerText = time;
  if(time === 0){
    if(turn == 0){
      turn = 1;
    }else{
      turn = 0;
    }

    played = false;
    timer.innerText = 30;
    calcPoint();
  }
}, 1000)


function calcPoint (){
  let list = Array.from(dots);
  const player1 = list.filter((dot,index) => {
    if(dot.classList.contains('active-player1')){
      
    }
  
  })
  const player2 = dots.filter((dot,index) => dot.classList.contains('active-player2'));
  
   

}