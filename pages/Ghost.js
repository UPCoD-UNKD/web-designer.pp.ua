import React from 'react'
import { Link } from 'react-router-dom'
import g001 from '../assets/img/screens/ghost/001.jpg'
import g002 from '../assets/img/screens/ghost/002.jpg'
import g003 from '../assets/img/screens/ghost/003.jpg'
import g004 from '../assets/img/screens/ghost/004.jpg'
import g005 from '../assets/img/screens/ghost/005.jpg'

function Ghost() {
	return (
		<section className='page' id='category_ghost'>
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
							<p className='page__link page__link--active'>Ghost</p>
						</div>
					</div>
				</div>
			</div>
			<div className='category'>
				<h2 className='title--single'>Ghost</h2>
				<div className='category__items'>
					<Link to='/unique-ghost-theme' className='product__image'>
						<img src={g001} alt='Unique Ghost Theme' />
					</Link>
					<Link to='/brandy-ghost-theme' className='product__image'>
						<img src={g002} alt='Brandy Ghost Theme' />
					</Link>
					<Link to='/kathreen-ghost-theme' className='product__image'>
						<img src={g003} alt='Kathreen Ghost Theme' />
					</Link>
					<Link to='/silestia-ghost-theme' className='product__image'>
						<img src={g004} alt='Silestia Ghost Theme' />
					</Link>
					<Link to='/virgo-ghost-theme' className='product__image'>
						<img src={g005} alt='Virgo Ghost Theme' />
					</Link>
				</div>
			</div>
		</section>
	)
}

export default Ghost
