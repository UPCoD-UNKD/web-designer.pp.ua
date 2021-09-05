import React from 'react'
import { Link } from 'react-router-dom'
import p008 from '../assets/img/screens/psd/008.jpg'

function Photoshop008() {
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
								Photoshop Text Graphic Styles
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className='container text-center'>
				<div className='single'>
					<h2 className='title--single'>Photoshop Text Graphic Styles</h2>
					<img src={p008} alt='Photoshop Text Graphic Styles' />
				</div>
			</div>
		</section>
	)
}

export default Photoshop008
