import React from "react";
import "./Player.css";
import { Icon } from "@iconify/react";
import { Grid, Slider } from "@material-ui/core";

const Player = () => {
	return (
		<section className='player-container flex'>
			<div className='player-album flex'>
				<img
					src='https://www.posta.fm/wp-content/uploads/2020/10/hostrasnoche-portada-768x768.jpg'
					alt=''
				/>
				<div className='flex justify-center flex-column'>
					<h3>La pachamama es más mala que Jason</h3>
					<p>Hoy Trasnoche</p>
				</div>
			</div>
			<div className='player-controls flex align-center'>
				<Icon icon='bi:shuffle' />
				<Icon icon='bi:skip-start-fill' />
				<Icon icon='bi:play-circle' id='play-icon' />
				<Icon icon='bi:skip-end-fill' />
				<Icon icon='bi:arrow-repeat' />
			</div>
			<div className='player-volume'>
				<Grid container spacing={2} className='align-center'>
					<Grid item>
						<Icon icon='bi:music-note-list' />
					</Grid>
					<Grid item>
						<Icon icon='bi:volume-down' />
					</Grid>
					<Grid item xs>
						<Slider aria-labelledby='continuous-slider' />
					</Grid>
				</Grid>
			</div>
		</section>
	);
};
export default Player;
