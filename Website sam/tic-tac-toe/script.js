const pressed = [false, false, false, false, false, false, false, false, false];
const played = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
var turn = 0;
var won = false
var check = 0;

document.addEventListener("click", function Chooser2000(event) {

  for(let i = 0;i < 9;i++){
    if(event.target.id == ("box" + i) && !pressed[i] && turn == 0 && won == false){
      document.getElementById("text" + i).textContent = "x"
      document.getElementById("nextTurnTXT").textContent = "o"
      played[i] = "x"
      turn++
      pressed[i] = true
    }else if(event.target.id == ("box" + i) && !pressed[i] && turn == 1 && won == false){
      document.getElementById("text" + i).textContent = "o"
      document.getElementById("nextTurnTXT").textContent = "x"
      played[i] = "o"
      turn--
      pressed[i] = true
    }
  }

  if(won == false){
    Checker3000()
  }
})

function Checker3000(){

  for(let i = 0;i < 3;i++){
    if(played[i] == played[(i + 3)] && played[(i + 3)] == played[(i + 6)]){
      won = true
      restarter4000()
    }
  }

  for(let i = 0;i < 9;i+= 3){
    if(played[i] == played[(i + 1)] && played[(i + 1)] == played[(i + 2)]){
      won = true
      restarter4000()
    }
  }

  if(played[0] == played[4] && played[4] == played[8]){
    won = true
    restarter4000()
  }else if(played[2] == played[4] && played[4] == played[6]){
    won = true
    restarter4000()
  }

  for(var i = 0; i < 9;i++){
    if(pressed[i] == true){
      check++
    }
  }

  if(check == 9){
    turn = 2
    restarter4000()
  }else{
    check = 0;
  }

}

function restarter4000(){

  if(turn == 1){
    setTimeout(function(){alert("Player x has won!")},10)
  }else if(turn == 0){
    setTimeout(function(){alert("Player o has won!")},10)
  }else if(turn == 2){
    setTimeout(function(){alert("Nobody won.")},10)
  }

  setTimeout(function(){
    turn = 0;
    won = false
    document.querySelector("#nextTurnTXT").innerHTML = "x"
    for(let i = 0;i < 9;i++){
      document.querySelector("#text" + i).innerHTML = ""
      pressed[i] = false
      played[i] = i
    }
  },2000)

}