import React from 'react'
import { Link } from 'react-router-dom'
import w002 from '../assets/img/screens/wp/002.jpg'

function WordPress002() {
	return (
		<section className='page'>
			<div className='page__header'>
				<div className='container'>
					<div className='page__navigation'>
						<Link to='/wordpress' className='page__link'>
							WordPress
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
							<p className='page__link page__link--active'>
								Kyoto WordPress Theme
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className='container text-center'>
				<div className='single'>
					<h2 className='title--single'>Kyoto WordPress Theme</h2>
					<img src={w002} alt='Kyoto WordPress Theme' />
				</div>
			</div>
		</section>
	)
}

export default WordPress002
