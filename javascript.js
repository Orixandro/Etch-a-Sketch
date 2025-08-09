function createGrid(container, size) {
    for (let i = 0; i < size; i++) {
        let subDivision = document.createElement("div")
        for (let j = 0; j < size; j++) {
            let square = document.createElement("div")
            square.addEventListener("mouseover", (e) => {
                if (e.ctrlKey) {
                    switch (mode) {
                        case "normal":
                            square.classList.remove("isShadow")
                            square.style.opacity = 1
                            square.style.backgroundColor = "black"
                            break
                        case "shadow":
                            if (!(square.classList.contains("isShadow"))) {
                                square.style.opacity = 0
                                square.classList.add("isShadow")
                            }
                            square.style.backgroundColor = "black"
                            square.style.opacity = Number(square.style.getPropertyValue("opacity")) + 0.1
                            break
                        case "rgb":
                            square.classList.remove("isShadow")
                            square.style.opacity = 1
                            square.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`
                            break
                    }
                } else if (e.shiftKey) {
                    square.style.backgroundColor = "white"
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
let mode = "normal"

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

const normalMode = document.querySelector("#normalButton")
normalMode.classList.add("selectedButton")
const shadowMode = document.querySelector("#shadowButton")
const rgbMode = document.querySelector("#rgbButton")

normalMode.addEventListener("click", () => {
    mode = "normal"
    normalMode.classList.add("selectedButton")
    shadowMode.classList.remove("selectedButton")
    rgbMode.classList.remove("selectedButton")
})

shadowMode.addEventListener("click", () => {
    mode = "shadow"
    normalMode.classList.remove("selectedButton")
    shadowMode.classList.add("selectedButton")
    rgbMode.classList.remove("selectedButton")
})

rgbMode.addEventListener("click", () => {
    mode = "rgb"
    normalMode.classList.remove("selectedButton")
    shadowMode.classList.remove("selectedButton")
    rgbMode.classList.add("selectedButton")
})