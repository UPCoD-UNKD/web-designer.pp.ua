import React from 'react'
import { Link } from 'react-router-dom'
import f005 from '../assets/img/screens/figma/005.jpg'

function Figma005() {
	return (
		<section className='page'>
			<div className='page__header'>
				<div className='container'>
					<div className='page__navigation'>
						<Link to='/figma' className='page__link'>
							Figma
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
							<p className='page__link page__link--active'>Water App</p>
						</div>
					</div>
				</div>
			</div>
			<div className='container text-center'>
				<div className='single'>
					<h2 className='title--single'>Water App</h2>
					<img src={f005} alt='Water App' />
				</div>
			</div>
		</section>
	)
}

export default Figma005
