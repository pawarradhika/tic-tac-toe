let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; // Start with player O's turn

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];


const resetGame  =()=>{
  turnO= true;
  enableBoxes();
  msgContainer.classList.add("hide");
}


boxes.forEach((box) => {
  box.addEventListener("click", () => {
    
    if (turnO) {
      // Player O
      box.innerText = "O";
      turnO = false; // Correctly set to false
    } else {
      // Player X
      box.innerText = "X";
      turnO = true; // Correctly set to true
    }
    // Disable the box
    box.disabled = true; // Correctly set to boolean true

    checkWinner();
  });
});

const disabledBoxes = ()=>{

  for (let box of boxes){
    box.disabled= true;
  }
};

const enableBoxes = ()=>{
  
  for (let box of boxes){
    box.disabled= false;
    box.innerText="";
  }
};

const showWinner = (winner) => {
  msg.innerText = `Congratulations, winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disabledBoxes();
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        
        showWinner(pos1Val); // Display the winning player
        return; // Stop checking after a winner is found
      }
    }
  }
};

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);