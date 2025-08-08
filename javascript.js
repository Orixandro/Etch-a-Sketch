function createGrid(container, size) {
    for (let i = 0; i < size; i++) {
        let subDivision = document.createElement("div")
        for (let j = 0; j < size; j++) {
            let square = document.createElement("div")
            square.addEventListener("mouseover", (e) => {
                if (e.ctrlKey) {
                    square.classList.add("active")
                } else if (e.shiftKey) {
                    square.classList.remove("active")
                }
            })
            subDivision.appendChild(square)
        }
        container.appendChild(subDivision)
    }
}

function deleteGrid(container) {
    container.replaceChildren();
}

function resetGrid(container, size) {
    deleteGrid(container)
    createGrid(container, size)
}

const container = document.querySelector("#gridContainer")
let size = 120

createGrid(container, size)

const borderButton = document.querySelector("#borderButton")
borderButton.addEventListener("click", () => {
    const grid = document.querySelectorAll("#gridContainer > div > div")
    grid.forEach((square) => square.classList.toggle("border"))
})

const resetButton = document.querySelector("#resetButton")
resetButton.addEventListener("click", () => resetGrid(container, size))

const sizeList = document.querySelector("#sizeList")
const sizeButton = document.querySelector("#sizeButton")
sizeButton.addEventListener("click", () => {
    size = Number(sizeList.value)
    resetGrid(container, size)
})