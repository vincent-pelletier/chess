import React from 'react'
import Game from '../model/game'

class ChessGame extends React.Component {
    state = {
        gameState: new Game(props.isWhite),
        whiteKingInCheck: false,
        blackKingInCheck: false
    }

    render() {
        return (
            /**
             * <div background = chessboard>
             *  <stage>
             *      <layer for loop model and renders it>
             * </div>
             */
        )
    }

    move(selectedId, finalPosition) {
        // use pythagore to calculate the distance between final position and current square, and assign the piece 
    }
}

export default ChessGame