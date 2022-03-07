import React from 'react';
import './About.css';
import UnderlinedHeading from './ui/UnderlinedHeading';

function About() {
	return (
		<div id="about" className="container">
			<div className="row">
				<div className="col">
					<UnderlinedHeading>About</UnderlinedHeading>
					<p>
						Incididunt et amet adipisicing amet dolore aliqua qui
						deserunt veniam sunt eu magna enim. Ut voluptate minim
						consectetur consequat enim voluptate tempor aute
						consectetur ex pariatur duis. Ex eiusmod proident
						voluptate in anim et deserunt minim consectetur
						deserunt. Proident in velit laboris aute incididunt duis
						commodo nisi anim. Fugiat fugiat sint labore duis et
						elit. Cillum officia cupidatat labore magna et. Et sint
						veniam dolor velit est do nostrud ut cillum amet
						exercitation irure cillum veniam.
					</p>
				</div>
			</div>
			<div className="row align-items-center">
				<div className="col-md-3">
					<img
						className="about__image"
						src="images/About-Brian-Headshot.png"
						alt="Brian Farmer Headshot"
					/>
				</div>
				<div className="col-md-3">
					<h5 className="about__name">Brian Farmer</h5>
					<p>
						Quis minim cillum culpa ut sint sunt sint nostrud velit
						fugiat magna veniam ea non. Duis cupidatat ad ut fugiat
						tempor proident. Id dolor culpa incididunt aute
						exercitation. Sint sunt occaecat voluptate sit ut magna
						ipsum.
					</p>
				</div>
				<div className="col-md-3">
					<img
						className="about__image"
						src="images/About-Justin-Headshot.png"
						alt="Justin Farmer Headshot"
					/>
				</div>
				<div className="col-md-3">
					<h5 className="about__name">Justin Farmer</h5>
					<p>
						Quis minim cillum culpa ut sint sunt sint nostrud velit
						fugiat magna veniam ea non. Duis cupidatat ad ut fugiat
						tempor proident. Id dolor culpa incididunt aute
						exercitation. Sint sunt occaecat voluptate sit ut magna
						ipsum.
					</p>
				</div>
			</div>
		</div>
	);
}

export default About;
