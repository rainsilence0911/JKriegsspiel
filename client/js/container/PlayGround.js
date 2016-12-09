
import React from "react";

import Background from '../component/Background';
import PieceFrameContainer from '../component/PieceFrameContainer';
import PieceContainer from '../component/PieceContainer';

import style from '../../css/style.css';

export default class PlayGround extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
    }

    render() {
        return (
            <div className={style.container}>
                <Background />
                <PieceFrameContainer/>
                <PieceContainer/>
            </div>
        );
    }
}