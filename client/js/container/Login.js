
import React from "react";

import Background from '../component/Background';
import PlayerSelector from '../component/PlayerSelector';

import style from '../../css/style.css';

export default class Login extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
        this.props.router.setRouteLeaveHook(
            this.props.route, 
            this.routerWillLeave
        )
    }

    routerWillLeave(nextLocation) {
        console.log("login leave");
    }

    render() {
        return (
            <div className={style.container}>
                <Background />
                <PlayerSelector/>
            </div>
        );
    }
}