const randomNum = [];
const chosenNum = [];
const correctbut = [false, false, false, false];
const correct = [false, false, false, false];
const ranCor = [false,false,false,false];
var r = 0;
var tel = 0;

function answerChecker9001() {
  for (let i = 0; i < 4; i++) {
    if (randomNum[i] == chosenNum[i]) {
      correct[i] = true;
      ranCor[i] = true;
    }
  }

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (randomNum[i] == chosenNum[j] && !correct[j] && !correctbut[j] && !ranCor[i]) {
        correctbut[j] = true;
        ranCor[i] = true;
      }
    }
  }

  for (let i = 0; i < 4; i++) {
    if (correct[i]) {
      document.getElementById("answer" + i).style.color = "black";
    } else if (correctbut[i]) {
      document.getElementById("answer" + i).style.color = "white";
    } else {
      document.getElementById("answer" + i).style.color = "red";
    }
  }
}

document.addEventListener("click", function numberChooser2000(event) {
  if (tel < 4) {
    for (let i = 1; i <= 9; i++) {
      if (event.target.id == "num" + i) {
        chosenNum[tel] = i;
        tel++;
      }
    }

    if (tel == 1) {
      document.getElementById("chosen-num").innerHTML =
        "Your chosen numbers are [" + chosenNum[0] + "] [ ] [ ] [ ]";
    }
    if (tel == 2) {
      document.getElementById("chosen-num").innerHTML =
        "Your chosen numbers are [" +
        chosenNum[0] +
        "] [" +
        chosenNum[1] +
        "] [ ] [ ]";
    }
    if (tel == 3) {
      document.getElementById("chosen-num").innerHTML =
        "Your chosen numbers are [" +
        chosenNum[0] +
        "] [" +
        chosenNum[1] +
        "] [" +
        chosenNum[2] +
        "] [ ]";
    }
    if (tel == 4) {
      document.getElementById("chosen-num").innerHTML =
        "Your chosen numbers are [" +
        chosenNum[0] +
        "] [" +
        chosenNum[1] +
        "] [" +
        chosenNum[2] +
        "] [" +
        chosenNum[3] +
        "]";
      for (let i = 0; i < 4; i++) {
        document.getElementById("answer" + i).innerHTML = chosenNum[i];
        correct[i] = false;
        correctbut[i] = false;
        ranCor[i] = false;
      }
      answerChecker9001();
      tel = 0;
      console.log(randomNum + " random");
      console.log(chosenNum + " chosen");
    }
  }



  if(correct[0] == true && correct[1] == true && correct[2] == true && correct[3] == true){
    alert("Je hebt gewonnen :D. klik restart om weer te spelen.")
    document.getElementById("chosen-num").innerHTML = "Your chosen numbers are [ ] [ ] [ ] [ ]"
      for(let i = 0 ;i < 4;i++){
        document.getElementById("answer" + i).innerHTML = ""
        correct[(i)] = false;
        correctbut[(i)] = false;
        ranCor[(i)] = false;
      }
    tel = 0;
    r = 0;
    randomNum.splice(0,randomNum.length);
    chosenNum.splice(0,chosenNum.length);
    randominator2000()
  }
})

function randominator2000() {
  while (randomNum.length < 4) {
    r = Math.floor(Math.random() * 9) + 1;
    if (randomNum.indexOf(r) === -1) {
      randomNum.push(r);
    }
  }
}

onload = randominator2000();
