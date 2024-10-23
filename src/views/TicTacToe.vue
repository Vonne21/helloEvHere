
<style>
	body {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
		background-color: #f0f0f0;
	}
	.board {
		display: grid;
		grid-template-columns: repeat(3, 100px);
		gap: 5px;
	}
	.cell {
		width: 100px;
		height: 100px;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 2rem;
		background-color: white;
		border: 1px solid #ccc;
		cursor: pointer;
	}
	.cell:hover {
		background-color: #e0e0e0;
	}
	.message {
		margin-top: 20px;
		font-size: 1.5rem;
	}
</style>
<template>
	<div id="app">
    <div class="board">
        <div v-for="(cell, index) in cells" :key="index" 
             class="cell" 
             @click="makeMove(index)">
            {{ cell }}
        </div>
    </div>
    <div class="message">{{ message }}</div>
    <button @click="resetGame">Reset Game</button>
</div>
</template>


<script>
    new Vue({
        el: '#app',
        data: function() {
return {
            cells: Array(9).fill(null),
            currentPlayer: 'X',
            message: 'Player X\'s turn'
        };
},
        methods: {
            makeMove(index) {
                if (!this.cells[index] && !this.checkWinner()) {
                    this.$set(this.cells, index, this.currentPlayer);
                    if (this.checkWinner()) {
                        this.message = `Player ${this.currentPlayer} wins!`;
                    } else if (this.cells.every(cell => cell)) {
                        this.message = 'It\'s a draw!';
                    } else {
                        this.currentPlayer = 'O'; // Computer's turn
                        this.computerMove();
                    }
                }
            },
            computerMove() {
                const availableCells = this.cells.map((cell, index) => cell === null ? index : null).filter(x => x !== null);
                const randomIndex = availableCells[Math.floor(Math.random() * availableCells.length)];
                this.$set(this.cells, randomIndex, this.currentPlayer);
                if (this.checkWinner()) {
                    this.message = `Player ${this.currentPlayer} wins!`;
                } else if (this.cells.every(cell => cell)) {
                    this.message = 'It\'s a draw!';
                } else {
                    this.currentPlayer = 'X'; // Player's turn
                    this.message = `Player ${this.currentPlayer}'s turn`;
                }
            },
            checkWinner() {
                const winPatterns = [
                    [0, 1, 2],
                    [3, 4, 5],
                    [6, 7, 8],
                    [0, 3, 6],
                    [1, 4, 7],
                    [2, 5, 8],
                    [0, 4, 8],
                    [2, 4, 6]
                ];
                for (const pattern of winPatterns) {
                    const [a, b, c] = pattern;
                    if (this.cells[a] && this.cells[a] === this.cells[b] && this.cells[a] === this.cells[c]) {
                        return true;
                    }
                }
                return false;
            },
            resetGame() {
                this.cells = Array(9).fill(null);
                this.currentPlayer = 'X';
                this.message = 'Player X\'s turn';
            }
        }
    });
</script>
