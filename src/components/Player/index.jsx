import React from "react";
import "./Player.css";
import { Icon } from "@iconify/react";

const Player = () => {
	return (
		<section className='player-container'>
			<div className='player-album'>album</div>
			<div className='player-controls'>
				<Icon icon='bi:shuffle' />
				<Icon icon='bi:skip-start-fill' />
				<Icon icon='bi:play-circle' id='play-icon' />
				<Icon icon='bi:skip-end-fill' />
				<Icon icon='bi:arrow-repeat' />
			</div>
			<div className='player-volume'>volume</div>
		</section>
	);
};
export default Player;
