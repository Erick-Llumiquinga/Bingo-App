var doneArray = new Array();
var maxNum = 75;
var showLetters = true;

function newNumber() {
  document.getElementById("nextBtn").disabled = true;

  if (doneArray.length == maxNum) {
    document.getElementById("number").innerHTML = "DONE";
    return true;
  }

  let newNum = getNewNum();
  newNum = ("0" + newNum).slice(-2);
  if (!doneArray.includes(newNum)) {
    numberAnimation(newNum);
  } else {
    newNumber();
  }

  document.getElementById("done").innerHTML = doneArray
    .sort((a, b) => a - b)
    .toString()
    .split(",")
    .join(" - ");
}

function getNewNum() {
  return Math.floor(Math.random() * maxNum) + 1;
}

function reset() {
  doneArray = [];
  document.getElementById("number").innerHTML = "00";
  document.getElementById("done").innerHTML = "";
  document.getElementById("nextBtn").disabled = false;
}

function numberAnimation(newNum) {
  let x = setInterval(function() {
    let num = Math.floor(Math.random() * maxNum) + 1;
    num = ("0" + num).slice(-2);
    document.getElementById("number").innerHTML = makeBingoNum(num);
  }, 75);

  setTimeout(function() {
    clearInterval(x);

    if (newNum == 69) {
      document.getElementById("nice").style.display = "block";
      setTimeout(function() {
        document.getElementById("nice").style.display = "none";
      }, 1500);
    }

    document.getElementById("number").innerHTML = makeBingoNum(newNum);
    doneArray.push(newNum);
    document.getElementById("nextBtn").disabled = false;
  }, 1000);
}

function makeBingoNum(num) {
  if (showLetters) {
    if (num <= 15) {
      num = "<span id='green'>B</span>" + num;
    } else if (num > 15 && num <= 30) {
      num = "<span id='pink'>I</span>" + num;
    } else if (num > 30 && num <= 45) {
      num = "<span id='orange'>N</span>" + num;
    } else if (num > 45 && num <= 60) {
      num = "<span id='blue'>G</span>" + num;
    } else if (num > 60 && num <= 75) {
      num = "<span id='yellow'>O</span>" + num;
    }
  }
  return num;
}

function letters(_this) {
  showLetters = _this.checked;
}
function results(_this) {
  let done = document.getElementById("done");
  done.style.display = _this.checked ? "block" : "none";
}
