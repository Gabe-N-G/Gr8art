console.log("hello world")

let currentColor = "white"
let colorArray = []

// const sampleGrid = ['yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'green', 'yellow', 'yellow', 'green', 'yellow', 'yellow', 'yellow', 'yellow', 'green', 'yellow', 'yellow', 'green', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'green', 'yellow', 'yellow', 'yellow', 'yellow', 'green', 'yellow', 'yellow', 'yellow', 'green', 'green', 'green', 'green', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow']

const container = document.querySelector(".flex-container")
const colorSelect = document.querySelector("#color-select")
let cells;


function makeGrid() {
    for(let i = 0; i < 64; i++){
        let div = document.createElement("div")
        div.classList.add("flex-item")
        div.setAttribute("id",`cell`+ i)
        // div.style.backgroundColor = sampleGrid[i]
        container.appendChild(div)
    }
    cells = document.querySelectorAll(".flex-item")
}


function collectColors() {
    colorArray = []
    cells.forEach(cell => {
        colorArray.push(cell.style.backgroundColor)
    });
    console.log(colorArray)
}

function handleClick(e) {
    // console.log(`you've clicked ${e.target.id}`)
    e.target.style.backgroundColor = currentColor
    // console.log(e.target)
    // console.log(e.target.style.backgroundColor)
    collectColors()
}

function handleChange(e){
    currentColor = e.target.value
    // console.log(currentColor)
}

container.addEventListener("click",handleClick)
colorSelect.addEventListener("change",handleChange)

makeGrid()
