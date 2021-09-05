import React from 'react'
import { Link } from 'react-router-dom'
import g003 from '../assets/img/screens/ghost/003.jpg'

function Ghost003() {
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
								Home
							</Link>
							<p className='page__link page__link--row'>&rsaquo;</p>
							<Link to='/works' className='page__link'>
								Works
							</Link>
							<p className='page__link page__link--row'>&rsaquo;</p>
							<p className='page__link page__link--active'>
								Kathreen Ghost Theme
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className='container text-center'>
				<div className='single'>
					<h2 className='title--single'>Kathreen Ghost Theme</h2>
					<img src={g003} alt='Kathreen Ghost Theme' />
				</div>
			</div>
		</section>
	)
}

export default Ghost003
