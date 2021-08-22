import React from 'react'
import { Link } from 'react-router-dom'
import r001 from '../assets/img/screens/print/001.jpg'

function Print001() {
	return (
		<section className='page'>
			<div className='page__header'>
				<div className='container'>
					<div className='page__navigation'>
						<Link to='/print' className='page__link'>
							Print
						</Link>
						<div className='page__pagination'>
							<Link to='/' className='page__link'>
								Home
							</Link>
							<Link to='/works' className='page__link'>
								Works
							</Link>
							<p className='page__link page__link--row'>&rsaquo;</p>
							<p className='page__link page__link--active'>
								Explore Luxury Magazine
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className='container text-center'>
				<div className='single'>
					<h2 className='title--single'>Explore Luxury Magazine</h2>
					<img src={r001} alt='Explore Luxury Magazine' />
				</div>
			</div>
		</section>
	)
}

export default Print001
