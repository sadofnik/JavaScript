'use strict';
const settings = {
    rowCount: 9,
    colCount: 9,
    blackCellColor: '#000000'
}

const createChessBoard = {
    settings,
    containerElement: null,
    cellElements: null,

    init() {
        this.containerElement = document.getElementById('chessBoard');
        this.initCells();
        this.render();
    },

    initCells() {
        this.containerElement.innerHTML = '';
        this.cellElements = [];

        for (let row = 0; row < this.settings.rowCount; row++) {
            const trElem = document.createElement('tr');
            this.containerElement.appendChild(trElem);

            for (let col = 0; col < this.settings.colCount; col++) {
                const cell = document.createElement('td');
                trElem.appendChild(cell);

                this.cellElements.push(cell);
            }
        }
    },

    render() {
        const alphaChess = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
        const numChess = [1, 2, 3, 4, 5, 6, 7, 8];
        this.cellElements.forEach((cell, ind) => {
            if (ind >= 1 && ind <= 8) {
                cell.innerHTML = alphaChess.shift();
            } else if (ind % 9 === 0 && ind !== 0) {
                cell.innerHTML = numChess.pop();
            } else if (ind % 2 !== 0) {
                cell.style.backgroundColor = this.settings.blackCellColor;
            }
        })
    }
}

createChessBoard.init();