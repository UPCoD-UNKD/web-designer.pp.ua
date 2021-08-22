import React from 'react'
import { Link } from 'react-router-dom'
import r001 from '../assets/img/screens/print/001.jpg'
import r002 from '../assets/img/screens/print/002.jpg'

function Print() {
	return (
		<section className='page' id='category_print'>
			<div className='page__header'>
				<div className='container'>
					<div className='page__navigation'>
						<Link to='/works' className='page__link'>
							Работы
						</Link>
						<div className='page__pagination'>
							<Link to='/' className='page__link'>
								Главная
							</Link>
							<p className='page__link page__link--row'>&rsaquo;</p>
							<p className='page__link page__link--active'>Принт</p>
						</div>
					</div>
				</div>
			</div>
			<div className='category'>
				<h2 className='title--single'>Print</h2>
				<div className='category__items'>
					<Link to='/explore-luxury-magazine' className='product__image'>
						<img src={r001} alt='Explore Luxury Magazine' />
					</Link>
					<Link to='/flower-wedding-template' className='product__image'>
						<img src={r002} alt='Flower Wedding Template' />
					</Link>
				</div>
			</div>
		</section>
	)
}

export default Print
