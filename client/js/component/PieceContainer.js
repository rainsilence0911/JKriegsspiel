
import React from 'react';

import Piece from './Piece';

import style from '../../css/style.css';

export default class PieceContainer extends React.Component {

    render() {
        return (
            <div className={style["piece-container"]}>
                <Piece/>
            </div>
        );
    }
}