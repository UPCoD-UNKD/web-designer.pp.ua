import React from 'react'
import { Link } from 'react-router-dom'
import w001 from '../assets/img/screens/wp/001.jpg'

function WordPress001() {
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
								Modena WordPress Theme
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className='container text-center'>
				<div className='single'>
					<h2 className='title--single'>Modena WordPress Theme</h2>
					<img src={w001} alt='Modena WordPress Theme' />
				</div>
			</div>
		</section>
	)
}

export default WordPress001
