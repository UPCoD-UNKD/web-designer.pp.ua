import React from 'react'
import { Link } from 'react-router-dom'
import r002 from '../assets/img/screens/print/002.jpg'

function Print002() {
	return (
		<section className='page'>
			<div className='page__header'>
				<div className='container'>
					<div className='page__navigation'>
						<Link to='/print' className='page__link'>
							Print
						</Link>
						<div className='page__pagination'>
							<Link to='/' className='page__link'>
								Home
							</Link>
							<Link to='/works' className='page__link'>
								Works
							</Link>
							<p className='page__link page__link--row'>&rsaquo;</p>
							<p className='page__link page__link--active'>
								Flower Wedding Template
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className='container text-center'>
				<div className='single'>
					<h2 className='title--single'>Flower Wedding Template</h2>
					<img src={r002} alt='Flower Wedding Template' />
				</div>
			</div>
		</section>
	)
}

export default Print002
