import React from 'react';
import './ReviewCard.css';

function ReviewCard() {
	return (
		<div className="review-card">
			<div className="review-card__stars">
				<i className="fa-solid fa-star"></i>
				<i className="fa-solid fa-star"></i>
				<i className="fa-solid fa-star"></i>
				<i className="fa-solid fa-star"></i>
				<i className="fa-solid fa-star"></i>
			</div>
			<p className="review-card__review">
				"Proident commodo Lorem consectetur deserunt veniam eu id. Id
				reprehenderit dolore commodo nisi commodo aliqua labore sint do
				qui elit ea occaecat. Elit ut ad velit dolor occaecat tempor.
				Enim magna nisi do exercitation minim do laboris Lorem pariatur
				est."
			</p>
			<p className="review-card__reviewer">- John Doe</p>
		</div>
	);
}

export default ReviewCard;
