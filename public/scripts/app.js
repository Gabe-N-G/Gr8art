console.log("hello world")

/* <option value="black">Black</option>
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="yellow">Yellow</option>
                <option value="grey">Grey</option>
                <option value="cyan">Cyan</option>
                <option value="magenta">Magenta</option>
                <option value="brown">Brown</option>
                <option value="white">White</option> */

let currentColor = "black"
let colorArray = []
let selectColors = ["Black", "Red", "Green", "Blue", "Yellow", "Grey", "Cyan", "Magenta", "Brown", "White"]
let grid = true

const container = document.querySelector(".flex-container")
const newContainer = document.querySelector("#new-container")
const colorSelect = document.querySelector("#color-select")
const colorInput = document.querySelector("#colorArray")
let cells


function makeGrid() {
    for(let i = 0; i < 64; i++){
        let div = document.createElement("div")
        div.classList.add("flex-item")
        div.setAttribute("id",`cell`+ i)
        newContainer.appendChild(div)
    }
}

function makeGrid256(){
    for(let i = 0; i < 256; i++){
        let div = document.createElement("div")
        div.classList.add("flex-item-256")
        div.setAttribute("id",`cell`+ i)
        newContainer.appendChild(div)
    }
}

function gridToggle(){
    cells = document.querySelectorAll(".flex-item")
    console.log(cells[0])
    if (grid){
        cells.forEach((cell)=>{
            cell.style.border = "none"
        })
        grid = !grid
    } else {
        cells.forEach((cell)=>{
            cell.style.border = "2px dashed black"
        }) 
        grid = !grid
    }
}

function makeColorSelect(){
    for(let i =0; i < selectColors.length; i++){
        let option =  document.createElement("option")
        option.value = selectColors[i]
        option.text = selectColors[i]
        colorSelect.add(option)
    }
}

function collectColors() {
    cells = document.querySelectorAll(".flex-item")
    colorArray = []
    cells.forEach(cell => {
        colorArray.push(cell.style.backgroundColor)
    });
    console.log(colorArray)
}

function handleClick(e) {
    // console.log(`you've clicked ${e.target.id}`)
    if  (e.target.className === "flex-item" || "flex-item-256") {
        
        e.target.style.backgroundColor = currentColor   
    }
    // console.log(e.target.id, e.target.className)
    // console.log(e.target.style.backgroundColor)
    collectColors()
}

function handleChange(e){
    currentColor = e.target.value
    // console.log(currentColor)
}

makeGrid()
// makeGrid256()
makeColorSelect()

container.addEventListener("click",handleClick)
colorSelect.addEventListener("change",handleChange)

//adds color array as an hidden input to form
let form =  document.querySelector('#art-form')
form.addEventListener("submit",()=>{
    collectColors()
    colorInput.value=JSON.stringify(colorArray)

})

