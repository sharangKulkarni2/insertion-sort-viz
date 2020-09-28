const squares = []
const emptySquares = []
const grid = document.querySelector('.grid')
const grid2 = document.querySelector('.grid2')
let timeOut = 1000

for (let i = 0; i < 10; i++) {
    let square = document.createElement('div')
    square.innerHTML = 10 - i
    grid.append(square)
    squares.push(square)
}
for (let i = 0; i < 10; i++) {
    let emptySquare = document.createElement('div')
    grid2.append(emptySquare)
    emptySquares.push(emptySquare)
}

function selectionSort() {
    for (let i = 0; i < squares.length - 1; i++) {
        for (let j = i + 1; j < squares.length; j++) {
            setTimeout(() => {
                if (parseInt(squares[j].innerHTML) < parseInt(squares[i].innerHTML)) {
                    emptySquares[i].classList.remove('visible')
                    emptySquares[j - 1].classList.remove('visible')
                    emptySquares[j].style.visibility = "visible"
                    emptySquares[j].style.visibility = "visible"
                    squares[i].classList.remove('exchange')
                    squares[j-1].classList.remove('exchange')
                    squares[j].classList.add('exchange')
                    squares[i].classList.add('exchange')
                    setTimeout(() => {
                        let temp = squares[j].innerHTML
                        squares[j].innerHTML = squares[i].innerHTML
                        squares[i].innerHTML = temp

                    }, 500)
                    setTimeout(() => {
                        if (j === squares.length - 1) {
                            squares[i].classList.remove('exchange')
                            squares[j].classList.remove('exchange')
                            emptySquares[i].classList.remove('visible')
                            emptySquares[j - 1].classList.remove('visible')
                        }
                    },500)
                   
                   
            }}, timeOut)

            timeOut += 1000

           
        }
    }
}

selectionSort()
