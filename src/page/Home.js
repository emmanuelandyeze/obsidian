import React from 'react'
import Footer from '../components/Footer';
import './Style.css'

const Home = () => {
  return (
		<div>
			<div className="landing">
				<div className="landing-text">
					<h1>We are Obsidian</h1>
					<h3>
						At Obsidian Advisory, we are dedicated to
						professionalise the fashion industry in Nigeria
						and Africa at large.
					</h3>
				</div>
			</div>
			<div className="about">
				<div className="about-heading-video">
					{/* <img src="/flyer.jpg" alt="" /> */}
					<video src="/video.mp4" controls autoPlay />
				</div>
				{/* <div className="about-text">
					<p>
						Welcome to Obsidian Advisory Africa, where we
						turn dreams into realities.
					</p>
					<p>
						At Obsidian Advisory, we are dedicated to
						understanding the uniqueness of existing as well
						as potential clients and this helps us to tailor
						our work to their distictive needs.
					</p>
					<div>
						<a href="/" className="appointBtn">
							Who we are
						</a>
					</div>
				</div> */}
			</div>
			<div className="about2">
				<div className="about2-text">
					<p>
						Welcome to Obsidian Advisory Africa, where we
						turn dreams into realities.
					</p>
					<p>
						At Obsidian Advisory, we are dedicated to
						understanding the uniqueness of existing as well
						as potential clients and this helps us to tailor
						our work to their distictive needs.
					</p>
					<div>
						<a
							href="/"
							className="appointBtn"
							style={{ backgroundColor: '#FE0000' }}
						>
							Sign Up Now
						</a>
					</div>
				</div>
				<div className="about2-heading">
					<img src="/flyer2.png" alt="" />
				</div>
			</div>
			<div className="about">
				<div className="about-heading">
					<img src="/flyer.jpg" alt="" />
				</div>
				<div className="about-text">
					<p>
						Welcome to Obsidian Advisory Africa, where we
						turn dreams into realities.
					</p>
					<p>
						At Obsidian Advisory, we are dedicated to
						understanding the uniqueness of existing as well
						as potential clients and this helps us to tailor
						our work to their distictive needs.
					</p>
					<div>
						<a href="/" className="appointBtn">
							Who we are
						</a>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default Home