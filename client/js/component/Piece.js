
import React from 'react';

import ExecutorService from '../util/ExecutorService';
import Task from '../util/Task';

import style from '../../css/style.css';
import pieceStyle from '../../css/piece.css';
import meta from '../constant/meta';

export default class Piece extends React.Component {
    constructor(props) {
        super();
        let frameInfo = props.frame;
        let pieceLayoutMapper = meta.defaultPieceLayoutMapper;
        let positionImageMapper = meta.positionImageMapper;

        this.initStatus = {

            isReverse: true,

            pieceStyle: pieceStyle[positionImageMapper[frameInfo.serverId[0]] + "-" + pieceLayoutMapper[frameInfo.serverId[1]]],

            runtimeStyle: {
                opacity: 1,
                left: frameInfo.left + 'px',
                top: frameInfo.top + 'px'
            }
        };

        this.state = this.initStatus;
    }

    onTwinkle(elapse) {

        let state = this.state;

        var isReverse = state.isReverse;
        var factor = isReverse ? -1.4 : 1.4;

        var opacity = state.runtimeStyle.opacity + elapse * factor;

        if (opacity > 1) {
            opacity = 1;
            isReverse = true;
        } else if (opacity < 0) {
            opacity = 0;
            isReverse = false;
        }

        this.setState({
            isReverse: isReverse,

            runtimeStyle: {
                opacity: opacity,
                left: state.runtimeStyle.left,
                top: state.runtimeStyle.top
            }
        });
    }

    onTwinkleComplete() {
        this.setState(this.initStatus);
    }

    onPieceClick() {

        if (this.currentTask) {
            this.currentTask.done();
            this.currentTask = null;
        } else {
            this.currentTask = new Task(this.onTwinkle.bind(this));
            this.currentTask.addCompleteListener(this.onTwinkleComplete.bind(this));
            ExecutorService.submit(this.currentTask);
        }
    }

    render() {
        return (
            <div style={this.state.runtimeStyle} className={style["base-piece"] + " " + this.state.pieceStyle} onClick={this.onPieceClick.bind(this)}></div>
        );
    }
}