import React from 'react'
import { Link } from 'react-router-dom'
import p001 from '../assets/img/screens/psd/001.jpg'

function Photoshop001() {
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
								Delicious Application
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className='container text-center'>
				<div className='single'>
					<h2 className='title--single'>Delicious Application</h2>
					<img src={p001} alt='Delicious Application' />
				</div>
			</div>
		</section>
	)
}

export default Photoshop001
