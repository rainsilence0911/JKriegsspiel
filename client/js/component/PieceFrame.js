
import React from 'react';

import style from '../../css/style.css';

export default class PieceFrame extends React.Component {

    constructor(props) {

        super();

        var info = props.info;
        this.state = {
            id: info.id,
            serverId: info.serverId,
            left: info.left,
            top: info.top,
            isRefuge: info.isRefuge,
            isHeadquarters: info.isHeadquarters,
            horizontalType: info.horizontalType
        };
    }

    render() {

        var state = this.state;
        var runtimeStyle = {
            left: state.left + "px",
            top: state.top + "px"
        };

        if (state.horizontalType === "left") {
            runtimeStyle.transform = "rotate(-90deg)";
        } else if (state.horizontalType === "right") {
            runtimeStyle.transform = "rotate(90deg)";
        }

        if (state.isRefuge) {
            runtimeStyle.borderColor = "yellow";
        } else if (state.isHeadquarters) {
            runtimeStyle.borderColor = "green";
        }

        return (
            <div id={"piece-frame-" + state.id} style={runtimeStyle} className={style["piece-frame"]}>
                {state.serverId ? state.serverId.join("-") : ""}
            </div>
        );
        /*return (
            <div id={"piece-frame-" + state.id} style={runtimeStyle} className={style["piece-frame"]}>
                {state.id}
            </div>
        );*/
    }

}