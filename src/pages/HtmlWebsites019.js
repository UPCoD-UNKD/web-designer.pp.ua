import React from 'react'
import { Link } from 'react-router-dom'
import h019 from '../assets/img/screens/html/019.jpg'

function HtmlWebsites019() {
	return (
		<section className='page'>
			<div className='page__header'>
				<div className='container'>
					<div className='page__navigation'>
						<Link to='/html' className='page__link'>
							HTML
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
							<p className='page__link page__link--active'>Proof</p>
						</div>
					</div>
				</div>
			</div>
			<div className='container text-center'>
				<div className='single'>
					<h2 className='title--single'>Proof</h2>
					<img src={h019} alt='Proof' />
				</div>
			</div>
		</section>
	)
}

export default HtmlWebsites019
