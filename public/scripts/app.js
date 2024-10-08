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
let selectColors = ["black", "red", "green", "blue", "yellow", "grey", "cyan", "magenta", "brown", "white"]
let grid = true
let small = true

const container = document.querySelector(".flex-container")
const newContainer = document.querySelector("#new-container")
const colorSelect = document.querySelector("#color-select")
const colorInput = document.querySelector("#colorArray")
const bigButton = document.querySelector("#grid-size")
const selectSpan = document.querySelector("#selected-color")
const palette = document.querySelector("#palette")

let cells
let autoclick


function makeGrid() {
    if (newContainer){
        newContainer.innerHTML = " "
        for(let i = 0; i < 64; i++){
            let div = document.createElement("div")
            div.classList.add("flex-item")
            div.setAttribute("id",`cell`+ i)
            newContainer.appendChild(div)
        }
    }
}

function makeGrid256(){
    newContainer.innerHTML = " "
    for(let i = 0; i < 256; i++){
        let div = document.createElement("div")
        div.classList.add("flex-item")
        div.classList.add("f256")
        div.setAttribute("id",`cell`+ i)
        newContainer.appendChild(div)
    }
}

function gridSize(){
    if (small){
        makeGrid256()
        bigButton.innerText = "Grid size 16x16"
        small = !small
    } else {
        makeGrid()
        bigButton.innerText = "Grid size 8x8"
        small = !small
    }
}

function makePalette(){
    selectColors.forEach(c =>{
        let div = document.createElement("div")
        div.style.color = c
        div.style.backgroundColor = c
        div.classList.add("palette-color")
        div.innerText = "■"
        palette.appendChild(div)
    })
}

function fill(){
    cells = document.querySelectorAll(".flex-item")
    cells.forEach((cell)=>{
        cell.style.backgroundColor = currentColor
    })
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

function colorClick(e) {
    // console.log(e.target)
    // if  (e.target.className == "flex-item" && e.target.style.backgroundColor != currentColor) {
        e.target.style.backgroundColor = currentColor   
    // }
    // console.log(e.target.id, e.target.className)
    // console.log(e.target.style.backgroundColor)
    collectColors()
}

function handleChange(e){
    currentColor = e.target.value
    selectSpan.style.backgroundColor = currentColor
    selectSpan.style.color = currentColor

    // console.log(currentColor)
}

function paletteChange(e){
    currentColor = e.target.style.color
    selectSpan.style.backgroundColor = currentColor
    selectSpan.style.color = currentColor

    colorSelect.value = currentColor
    
}

makePalette()
makeColorSelect()
makeGrid()
// makeGrid256()

container.addEventListener("mousedown",(e)=>{
    colorClick(e)
    cells = document.querySelectorAll(".flex-item")
    cells.forEach((cell)=>{
        cell.addEventListener("mouseover", colorClick)
        })
    })

container.addEventListener("mouseup", ()=>{
    cells = document.querySelectorAll(".flex-item")
    cells.forEach((cell)=>{
        cell.removeEventListener("mouseover", colorClick
        )
    })
})

container.addEventListener("mouseleave", ()=>{
    cells = document.querySelectorAll(".flex-item")
    cells.forEach((cell)=>{
        cell.removeEventListener("mouseover", colorClick
        )
    })
})

colorSelect.addEventListener("change",handleChange)
palette.addEventListener("click", paletteChange)



//adds color array as an hidden input to form
let form =  document.querySelector('#art-form')
form.addEventListener("submit",()=>{
    collectColors()
    colorInput.value=JSON.stringify(colorArray)

})

