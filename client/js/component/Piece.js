
import React from 'react';

import ExecutorService from '../util/ExecutorService';
import Task from '../util/Task';

import style from '../../css/style.css';

export default class Piece extends React.Component {
    constructor() {
        super();

        this.initStatus = {

            isReverse: true,

            runtimeStyle: {
                opacity: 1
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
                opacity: opacity
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
            <div style={this.state.runtimeStyle} className={style.piece} onClick={this.onPieceClick.bind(this)}></div>
        );
    }
}