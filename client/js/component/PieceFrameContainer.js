
import React from 'react';

import PieceFrame from './PieceFrame';

import meta from '../constant/meta';

import style from '../../css/style.css';

export default class PieceFrameContainer extends React.Component {

    render() {

        return (
            <div className={style["piece-frame-container"]}>
            {
                meta.pieceFrames.map(function(frameInfo, index) {
                    return <PieceFrame key={"frame-" + index} info={frameInfo}/>
                })
            }
            </div>
        );
    }
}