import React from 'react';
import './Reviews.css';
import UnderlinedHeading from './ui/UnderlinedHeading';
import ReviewCard from './ui/ReviewCard';

function Reviews() {
	return (
		<div id="reviews" className="container">
			<div className="row">
				<div className="col">
					<UnderlinedHeading>Reviews</UnderlinedHeading>
				</div>
			</div>
			<div className="row">
				<div className="col-lg-4">
					<ReviewCard />
				</div>
				<div className="col-lg-4">
					<ReviewCard />
				</div>
				<div className="col-lg-4">
					<ReviewCard />
				</div>
			</div>
		</div>
	);
}

export default Reviews;
