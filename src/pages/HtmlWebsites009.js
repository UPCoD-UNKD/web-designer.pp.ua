import React from 'react'
import { Link } from 'react-router-dom'
import h009 from '../assets/img/screens/html/009.jpg'

function HtmlWebsites009() {
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
								Alton HTML Template
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className='container text-center'>
				<div className='single'>
					<h2 className='title--single'>Alton HTML Template</h2>
					<img src={h009} alt='Alton HTML Template' />
				</div>
			</div>
		</section>
	)
}

export default HtmlWebsites009
