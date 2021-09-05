import React from 'react'
import { Link } from 'react-router-dom'
import p012 from '../assets/img/screens/psd/012.jpg'

function Photoshop012() {
	return (
		<section className='page'>
			<div className='page__header'>
				<div className='container'>
					<div className='page__navigation'>
						<Link to='/photoshop' className='page__link'>
							Photoshop
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
								Leather Logo Mockups
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className='container text-center'>
				<div className='single'>
					<h2 className='title--single'>Leather Logo Mockups</h2>
					<img src={p012} alt='Leather Logo Mockups' />
				</div>
			</div>
		</section>
	)
}

export default Photoshop012
