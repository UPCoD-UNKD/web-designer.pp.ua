import React from 'react'
import { Link } from 'react-router-dom'
import h008 from '../assets/img/screens/html/008.jpg'

function HtmlWebsites008() {
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
							<p className='page__link page__link--active'>
								Uppointment Website
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className='container text-center'>
				<div className='single'>
					<h2 className='title--single'>Uppointment Website</h2>
					<img src={h008} alt='Uppointment Website' />
				</div>
			</div>
		</section>
	)
}

export default HtmlWebsites008
