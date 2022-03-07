import React from 'react';
import './ContactUs.css';
import ContactUsForm from './ui/ContactUsForm';

function ContactUs() {
	return (
		<div id="contact-us" className="contact-us">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-12 col-lg-8">
						<ContactUsForm />
					</div>
				</div>
			</div>
		</div>
	);
}

export default ContactUs;
