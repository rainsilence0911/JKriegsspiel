import React from 'react';

import { browserHistory } from 'react-router';
import style from '../../css/style.css';

export default class PlayerSelector extends React.Component {

	onSelectorClick(e) {
		console.log(e.target.getAttribute("data"));
		browserHistory.push("/play");
	}


	render() {

		return (
			<div className={style["piece-container"]} onClick={this.onSelectorClick.bind(this)}>
				<div data="up" className={style["player-up-selector"]} ></div>
				<div data="right" className={style["player-right-selector"]} ></div>
				<div data="bottom" className={style["player-bottom-selector"]} ></div>
				<div data="left" className={style["player-left-selector"]} ></div>
				<div data="watcher" className={style["player-watcher-selector"]} ></div>
			</div>
		);

	}

}