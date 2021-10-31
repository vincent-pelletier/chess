import React from 'react';
import { Image } from 'react-konva';
import useImage from 'use-image';


const Piece = (props) => {
    const choiceOfColor = props.isWhite ? '' : '1';
    const [image] = useImage(props.imageName + choiceOfColor + '.png');
    const isDragged = props.id === props.draggedPieceTargetId;

    const canThisPieceBeMoved = props.isWhite === props.thisPlayersColorIsWhite;
    const isItThatPlayersTurn = props.playerTurnToMoveIsWhite = props.thisPlayersColorIsWhite;

    const thiswhiteKindInCheck = props.id === "wk1" && props.whiteKingInCheck;
    const thisBlackKingInCheck = props.id === "bk1" && props.blackKingInCheck;
    // imageUrl
    // color
    // id
    // color of player
    // whether or not its your turn
    return <Image
        image={image}
        x = {props.x - 21}
        y = {props.y - 21}
        draggable = {canThisPieceBeMoved && isItThatPlayersTurn}
        width = {isDragged ? 50 : 42}
        height = {isDragged ? 50 : 42}
        onDragStart = {props.onDragStart}
        onDragEnd = {props.onDragEnd}
        fill = {(thiswhiteKindInCheck && "red") || (thisBlackKingInCheck && "red")}
        id = {props.id}
    />;
}

export default Piece;