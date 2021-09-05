import React from 'react'
import { Link } from 'react-router-dom'
import b001 from '../assets/img/screens/banners/001.jpg'
import b002 from '../assets/img/screens/banners/002.jpg'

function Banners() {
	return (
		<section className='page' id='category_banners'>
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
							<p className='page__link page__link--active'>Banners</p>
						</div>
					</div>
				</div>
			</div>
			<div className='category'>
				<h2 className='title--single'>Banners</h2>
				<div className='category__items'>
					<Link to='/web-banner-ad-template' className='product__image'>
						<img src={b001} alt='Web Banner Ad Template' />
					</Link>
					<Link to='/rus-food' className='product__image'>
						<img src={b002} alt='Rus Food' />
					</Link>
				</div>
			</div>
		</section>
	)
}

export default Banners
