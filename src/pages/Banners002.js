import React from 'react'
import { Link } from 'react-router-dom'
import b002 from '../assets/img/screens/banners/002.jpg'

function Banners002() {
	return (
		<section className='page'>
			<div className='page__header'>
				<div className='container'>
					<div className='page__navigation'>
						<Link to='/banners' className='page__link'>
							Banners
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
							<p className='page__link page__link--active'>Rus Food</p>
						</div>
					</div>
				</div>
			</div>
			<div className='container text-center'>
				<div className='single'>
					<h2 className='title--single'>Rus Food</h2>
					<img src={b002} alt='Rus Food' />
				</div>
			</div>
		</section>
	)
}

export default Banners002
