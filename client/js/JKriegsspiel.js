
import React from "react";

import Background from './component/Background';
import PieceFrameContainer from './component/PieceFrameContainer';
import PieceContainer from './component/PieceContainer';

import style from '../css/style.css';

export default class JKriegsspiel extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
    }

    render() {
        return (
            <div id="jkriegsspiel" className={style.jkriegsspiel}>
                <div className={style.wrapper}>
                    <div className={style.container}>
                        <Background />
                        <PieceFrameContainer/>
                        <PieceContainer/>
                    </div>
                </div>
            </div>
        );
    }
}