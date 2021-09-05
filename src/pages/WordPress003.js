import React from 'react'
import { Link } from 'react-router-dom'
import w003 from '../assets/img/screens/wp/003.jpg'

function WordPress003() {
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
								Kathreen WordPress Theme
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className='container text-center'>
				<div className='single'>
					<h2 className='title--single'>Kathreen WordPress Theme</h2>
					<img src={w003} alt='Kathreen WordPress Theme' />
				</div>
			</div>
		</section>
	)
}

export default WordPress003
