import React from 'react'
import { Link } from 'react-router-dom'
import n001 from '../assets/img/screens/bc/001.jpg'
import n002 from '../assets/img/screens/bc/002.jpg'

function BusinessCards() {
	return (
		<section className='page' id='category_business_cards'>
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
							<p className='page__link page__link--active'>Business Cards</p>
						</div>
					</div>
				</div>
			</div>
			<div className='category'>
				<h2 className='title--single'>Business Cards</h2>
				<div className='category__items'>
					<Link to='/creative-business-card' className='product__image'>
						<img src={n001} alt='Creative Business Card' />
					</Link>
					<Link to='/deluxe-business-card' className='product__image'>
						<img src={n002} alt='Deluxe Business Card' />
					</Link>
				</div>
			</div>
		</section>
	)
}

export default BusinessCards
