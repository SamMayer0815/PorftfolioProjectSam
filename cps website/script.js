var time = 10.0;
var k = 1;
var clicks = 1;
var clicksPerSecond = 0

function timer(){
var timer = setInterval(function(){
  
   time -= 0.1
   var timeLeft = Math.round(time * 10) / 10;
   if(timeLeft == Math.round(timeLeft)){
     timeLeft += ".0";
   }
   if(time <= 0.1){
    clearInterval(timer)
  }
   document.getElementById("timer").innerHTML = timeLeft + " Seconds left"

   if(time <= 0.1){
    document.getElementById("cps").innerHTML = "Your cps is " + clicksPerSecond / 10
    document.getElementById("click-area").innerHTML = "Click to play again!"
    k = 0;
    time = 10.0
    clicks = 0;
    clicksPerSecond = 0;
  }
  },100)
};


document.getElementById("click-area").addEventListener("click", function cpsCounter(){   //roept het 1X aan
  k++
   if(k == 2){
     timer()
   }

});



document.getElementById("click-area").addEventListener("click", function cpsCounter(){  

  if(time >= 0.1){
    clicks += 1;
    clicksPerSecond = clicks - 1
    document.getElementById("click-area").innerHTML = "CLICK HERE!"
    document.getElementById("cps").innerHTML = "Your score " + clicksPerSecond 

  }
  
});

