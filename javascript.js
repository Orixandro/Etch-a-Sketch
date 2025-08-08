function createGrid(container, size) {
    for (let i = 0; i < (size * size); i++) {
        let square = document.createElement("div")
        square.addEventListener("mouseover", () => square.classList.add("active"))
        container.appendChild(square)
    }
}

const container = document.querySelector("#gridContainer")
const size = 16

createGrid(container, size)