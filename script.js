const container = document.querySelector('#container')
const input = document.querySelector('#gridInput')
const button = document.querySelector('#reset')

function createGrid(gridSize) {
    container.innerHTML = '';
    for (let i = 0; i < gridSize * gridSize; i++) {
        const gridBox = document.createElement('div')
        gridBox.classList.add('grid-square');
        gridBox.style.height = `${100 / gridSize}%`;
        gridBox.style.width = `${100 / gridSize}%`;
        let hue = Math.floor(Math.random() * 360)
        let lightness = 100;

        gridBox.addEventListener('mouseenter', () => {
            if (lightness > 0) {
                lightness -= 10;
                gridBox.style.backgroundColor = `hsl(${hue}, 100%, ${lightness}%)`
            }
        })

        container.appendChild(gridBox);
    }
}

button.addEventListener('click', () => {
    let size = input.value;

    if (size > 0 && size <= 100) {
        createGrid(size);
    }else {
        alert("Grid size cannot be over 100 and less than 1")
    }
})


createGrid(16);