import React from 'react';
import { Image } from 'react-konva';
import useImage from 'use-image';


const Piece = (props) => {
    const choiceOfColor = props.isWhite ? 0 : 1
    const [image] = useImage(props.imgurls[choiceOfColor]); // does not work with local images
    const isDragged = props.id === props.draggedPieceTargetId;

    const canThisPieceBeMoved = props.isWhite === props.thisPlayerIsWhite;
    const isItThatPlayersTurn = props.playerTurnToMoveIsWhite === props.thisPlayerIsWhite;

    const thisWhiteKingInCheck = props.id === "wk1" && props.whiteKingInCheck;
    const thisBlackKingInCheck = props.id === "bk1" && props.blackKingInCheck;

    return <Image
        image={image}
        x = {props.x - 90}
        y = {props.y - 90}
        draggable = {canThisPieceBeMoved && isItThatPlayersTurn}
        width = {isDragged ? 75 : 60}
        height = {isDragged ? 75 : 60}
        onDragStart = {props.onDragStart}
        onDragEnd = {props.onDragEnd}
        fill = {(thisWhiteKingInCheck || thisBlackKingInCheck) ? "red" : ""}
        id = {props.id}
    />;
}

export default Piece;