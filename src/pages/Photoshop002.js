import React from 'react'
import { Link } from 'react-router-dom'
import p002 from '../assets/img/screens/psd/002.jpg'

function Photoshop002() {
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
								HotSpot Portfolio Presentation
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className='container text-center'>
				<div className='single'>
					<h2 className='title--single'>HotSpot Portfolio Presentation</h2>
					<img src={p002} alt='HotSpot Portfolio Presentation' />
				</div>
			</div>
		</section>
	)
}

export default Photoshop002
