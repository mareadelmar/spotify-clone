import React from "react";
import "./Login.css";
import { loginURL } from "../../config/spotify";

const Login = () => {
	return (
		<div className='login-container'>
			<img
				src='https://media.idownloadblog.com/wp-content/uploads/2016/06/Spotify_logo_horizontal_black.jpg'
				alt='spotify logo'
			/>
			<a href={loginURL}>LOGIN WITH SPOTIFY</a>
		</div>
	);
};

export default Login;
