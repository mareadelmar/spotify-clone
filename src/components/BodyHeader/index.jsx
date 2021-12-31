import React from "react";
import "./BodyHeader.css";
import { useUserData } from "../../context/UserContext";
import { Avatar } from "@material-ui/core";

const BodyHeader = () => {
	const [{ user }] = useUserData();

	return (
		<header className='header-container'>
			<div className='header-avatar flex align-center justify-center'>
				<Avatar
					src={user?.images[0]?.url}
					alt={user?.display_name}
					className='avatar'
				/>
				<p>
					<strong>{user?.display_name}</strong>
				</p>
			</div>
		</header>
	);
};

export default BodyHeader;
