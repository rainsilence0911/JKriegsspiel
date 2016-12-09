
import React from "react";

import style from '../../css/style.css';

export default class App extends React.Component {

    render() {
        return (
            <div id="jkriegsspiel" className={style.jkriegsspiel}>
                <div className={style.wrapper}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}