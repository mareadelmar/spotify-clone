import React from "react";
import "./Body.css";
import BodyHeader from "../BodyHeader";

const Body = () => {
	return (
		<section className='body-container'>
			<BodyHeader />

			<div className='body-discover flex'>
				<img
					src='https://i.scdn.co/image/ab67616d0000b2739e569e2250c16f6089a61cca'
					alt=''
					className='discover-img'
				/>
				<div className='discover-text flex flex-column'>
					<p>
						<strong>PLAYLISTS</strong>
					</p>
					<h3>Discover Weekly</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing
						elit. Ad voluptatibus suscipit fuga nesciunt. Possimus
						tenetur reiciendis nisi.
					</p>
				</div>
			</div>
		</section>
	);
};

export default Body;
