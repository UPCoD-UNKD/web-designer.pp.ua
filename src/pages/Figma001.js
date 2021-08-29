import React from 'react'
import { Link } from 'react-router-dom'
import f001 from '../assets/img/screens/figma/001.jpg'

function Figma001() {
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
								Главная
							</Link>
							<p className='page__link page__link--row'>&rsaquo;</p>
							<Link to='/works' className='page__link'>
								Работы
							</Link>
							<p className='page__link page__link--row'>&rsaquo;</p>
							<p className='page__link page__link--active'>Uny Chat</p>
						</div>
					</div>
				</div>
			</div>
			<div className='container text-center'>
				<div className='single'>
					<h2 className='title--single'>Uny Chat</h2>
					<img src={f001} alt='Uny Chat' />
				</div>
			</div>
		</section>
	)
}

export default Figma001