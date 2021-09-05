import React from 'react'
import { Link } from 'react-router-dom'
import w001 from '../assets/img/screens/wp/001.jpg'
import w002 from '../assets/img/screens/wp/002.jpg'
import w003 from '../assets/img/screens/wp/003.jpg'
import w004 from '../assets/img/screens/wp/004.jpg'
import w005 from '../assets/img/screens/wp/005.jpg'

function WordPress() {
	return (
		<section className='page' id='category_wordpress'>
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
							<p className='page__link page__link--active'>WordPress</p>
						</div>
					</div>
				</div>
			</div>
			<div className='category'>
				<h2 className='title--single'>WordPress</h2>
				<div className='category__items'>
					<Link to='/modena-wordpress-theme' className='product__image'>
						<img src={w001} alt='Modena WordPress Theme' />
					</Link>
					<Link to='/kyoto-wordpress-theme' className='product__image'>
						<img src={w002} alt='Kyoto WordPress Theme' />
					</Link>
					<Link to='/kathreen-wordpress-theme' className='product__image'>
						<img src={w003} alt='Kathreen WordPress Theme' />
					</Link>
					<Link to='/velvet-wordpress-theme' className='product__image'>
						<img src={w004} alt='Velvet WordPress Theme' />
					</Link>
					<Link to='/virtue-wordpress-theme' className='product__image'>
						<img src={w005} alt='Virtue WordPress Theme' />
					</Link>
				</div>
			</div>
		</section>
	)
}

export default WordPress
