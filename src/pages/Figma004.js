import React from 'react'
import { Link } from 'react-router-dom'
import f004 from '../assets/img/screens/figma/004.jpg'

function Figma004() {
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
							<p className='page__link page__link--active'>Sportmaster</p>
						</div>
					</div>
				</div>
			</div>
			<div className='container text-center'>
				<div className='single'>
					<h2 className='title--single'>Sportmaster</h2>
					<img src={f004} alt='Sportmaster' />
				</div>
			</div>
		</section>
	)
}

export default Figma004
