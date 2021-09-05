import React from 'react'
import { Link } from 'react-router-dom'
import h013 from '../assets/img/screens/html/013.jpg'

function HtmlWebsites013() {
	return (
		<section className='page'>
			<div className='page__header'>
				<div className='container'>
					<div className='page__navigation'>
						<Link to='/html' className='page__link'>
							HTML
						</Link>
						<div className='page__pagination'>
							<Link to='/' className='page__link'>
								Home
							</Link>
							<p className='page__link page__link--row'>&rsaquo;</p>
							<Link to='/works' className='page__link'>
								Works
							</Link>
							<p className='page__link page__link--row'>&rsaquo;</p>
							<p className='page__link page__link--active'>Han HTML Template</p>
						</div>
					</div>
				</div>
			</div>
			<div className='container text-center'>
				<div className='single'>
					<h2 className='title--single'>Han HTML Template</h2>
					<img src={h013} alt='Han HTML Template' />
				</div>
			</div>
		</section>
	)
}

export default HtmlWebsites013
