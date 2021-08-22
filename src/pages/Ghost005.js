import React from 'react'
import { Link } from 'react-router-dom'
import g005 from '../assets/img/screens/ghost/005.jpg'

function Ghost005() {
	return (
		<section className='page'>
			<div className='page__header'>
				<div className='container'>
					<div className='page__navigation'>
						<Link to='/ghost' className='page__link'>
							Ghost
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
							<p className='page__link page__link--active'>Virgo Ghost Theme</p>
						</div>
					</div>
				</div>
			</div>
			<div className='container text-center'>
				<div className='single'>
					<h2 className='title--single'>Virgo Ghost Theme</h2>
					<img src={g005} alt='Virgo Ghost Theme' />
				</div>
			</div>
		</section>
	)
}

export default Ghost005
