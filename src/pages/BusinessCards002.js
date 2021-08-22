import React from 'react'
import { Link } from 'react-router-dom'
import n002 from '../assets/img/screens/bc/002.jpg'

function BusinessCards002() {
	return (
		<section className='page'>
			<div className='page__header'>
				<div className='container'>
					<div className='page__navigation'>
						<Link to='/bc' className='page__link'>
							BusinessCards
						</Link>
						<div className='page__pagination'>
							<Link to='/' className='page__link'>
								Главная
							</Link>
							<p className='page__link page__link--row'>&rsaquo;</p>
							<Link to='/works' className='page__link'>
								Работы
							</Link>
							<p className='page__link page__link--row'>&rsaquo;</p>
							<p className='page__link page__link--active'>
								Deluxe Business Card
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className='container text-center'>
				<div className='single'>
					<h2 className='title--single'>Deluxe Business Card</h2>
					<img src={n002} alt='Deluxe Business Card' />
				</div>
			</div>
		</section>
	)
}

export default BusinessCards002
