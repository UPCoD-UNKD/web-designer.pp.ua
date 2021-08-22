import React from 'react'
import { Link } from 'react-router-dom'
import w004 from '../assets/img/screens/wp/004.jpg'

function WordPress004() {
	return (
		<section className='page'>
			<div className='page__header'>
				<div className='container'>
					<div className='page__navigation'>
						<Link to='/wp' className='page__link'>
							WordPress
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
								Velvet WordPress Theme
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className='container text-center'>
				<div className='single'>
					<h2 className='title--single'>Velvet WordPress Theme</h2>
					<img src={w004} alt='Velvet WordPress Theme' />
				</div>
			</div>
		</section>
	)
}

export default WordPress004
