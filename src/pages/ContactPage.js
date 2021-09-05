import React from 'react'
import Form from '../components/Form'
import { Link } from 'react-router-dom'

function ContactPage() {
	return (
		<section className='page' id='about_page'>
			<div className='page__header'>
				<div className='container'>
					<div className='page__navigation'>
						<Link to='/works' className='page__link'>
							Works
						</Link>
						<div className='page__pagination'>
							<Link to='/' className='page__link'>
								Home
							</Link>
							<p className='page__link page__link--row'>&rsaquo;</p>
							<p className='page__link page__link--active'>Contact</p>
						</div>
					</div>
				</div>
			</div>
			<div className='category'>
				<h2 className='title--single'>Get in touch</h2>
				<div className='category__items'>
					<Form />
				</div>
			</div>
		</section>
	);
}

export default ContactPage