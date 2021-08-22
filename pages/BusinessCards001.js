import React from 'react'
import { Link } from 'react-router-dom'
import n001 from '../assets/img/screens/bc/001.jpg'

function BusinessCards001() {
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
								Creative Business Card
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className='container text-center'>
				<div className='single'>
					<h2 className='title--single'>Creative Business Card</h2>
					<img src={n001} alt='Creative Business Card' />
				</div>
			</div>
		</section>
	)
}

export default BusinessCards001
