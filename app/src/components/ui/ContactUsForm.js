import React from 'react';
import './ContactUsForm.css';
import UnderlinedHeading from '../ui/UnderlinedHeading';

function ContactUsForm() {
	return (
		<div className="contact-us-form">
			<UnderlinedHeading>Contact Us</UnderlinedHeading>
			<form className="contact-us-form__form">
				<input type="text" placeholder="Name" />
				<input type="text" placeholder="Email" />
				<textarea placeholder="Message"></textarea>
				<button type="submit">Submit</button>
			</form>
		</div>
	);
}

export default ContactUsForm;
