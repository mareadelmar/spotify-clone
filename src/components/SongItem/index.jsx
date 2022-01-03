import React from "react";
import "./SongItem.css";

const SongItem = ({ track }) => {
	return (
		<div className='song-container flex align-center'>
			<img
				className='song-img'
				src={track.album?.images[0]?.url}
				alt={track.album.name}
			/>
			<div className='song-details'>
				<h3>{track.name}</h3>
				<p>
					{track.artists.map(item => item.name).join(", ")} -{" "}
					{track.album.name}
				</p>
			</div>
		</div>
	);
};

export default SongItem;
