document.addEventListener("DOMContentLoaded", () =>{
    createSquares();
    function createSquares(){
        const gameBoard = document.getElementById("board");

        for(let index = 0; index<30; index++){
            let Squares  = document.createElement("div");
            Squares.classList.add("Square");
            Squares.setAttribute("id", index+1);
            gameBoard.appendChild(Squares);

        }

    }
    
});