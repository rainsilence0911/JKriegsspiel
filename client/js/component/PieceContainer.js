
import React from 'react';

import Piece from './Piece';

import meta from '../constant/meta';
import style from '../../css/style.css';

export default class PieceContainer extends React.Component {

    render() {

        let pieceLayoutMapper = meta.defaultPieceLayoutMapper;

        return (
            <div className={style["piece-container"]}>
            {
                meta.pieceFrames.map(function(frameInfo, index) {
                    return <Piece key={"piece-" + index} frame={frameInfo}/>;
                })
            }
            </div>
        );
    }
}