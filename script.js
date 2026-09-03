let boxes = document.querySelectorAll(".box")
let turn0 = true
let winnerBox = document.querySelector(".winnerbox")
let msg = document.querySelector("#msg")
let resetbtn = document.querySelector("#reset")
let newGameBtn = document.querySelector("#new-game")
let count = 0 //for draw
let game = document.querySelector(".game")

let winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]
let reset = () => {
    winnerBox.classList.add("hidden")
    boxes.forEach((box) => {
        box.innerText = ""
        enablebox()
        game.classList.remove("opacity")
        count = 0

    })
}
let removeGame = ()=>{
    game.classList.add("opacity")
    resetbtn.classList.add("hidden")
}
let draw = ()=>{
    count = 0
    disablebox()
    msg.innerText = "The game was a draw"
    winnerBox.classList.remove("hidden")
}

let disablebox = () => {
    boxes.forEach((box) => {
        box.disabled = true
    
    })
}
let enablebox = () => {
    boxes.forEach((box) => {
        box.disabled = false
        turn0 = true
    
    })
}
let showWinner = (winner) => {
    msg.innerText = `The Winner is ${winner}`
    winnerBox.classList.remove("hidden")
    disablebox()
    removeGame()

}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0) {
            box.innerText = "O"
            turn0 = false
            box.style.color = "yellow"
        }
        else {
            box.innerText = "X"
            turn0 = true
            box.style.color = "Lightgreen"
        }
        // getWinner()
        count ++
        
        let iswinner = getWinner()
        if(count === 9 && !iswinner){
           draw()
           removeGame()
        }
      
    })
})

let getWinner = () => {
    for (let pattern of winPatterns) {
        console.log(pattern)
        let pos1val = boxes[pattern[0]].innerText
        let pos2val = boxes[pattern[1]].innerText
        let pos3val = boxes[pattern[2]].innerText

        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                console.log("Winner")
                showWinner(pos1val)
                disablebox()
                return true


            }
        }

    }
    return false
}
newGameBtn.addEventListener("click",reset)
newGameBtn.addEventListener("click",()=>{
     resetbtn.classList.remove("hidden")
}

)
resetbtn.addEventListener("click", reset )
