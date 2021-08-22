import React from 'react'
import { Link } from 'react-router-dom'
import f002 from '../assets/img/screens/figma/002.jpg'

function Figma002() {
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
							<p className='page__link page__link--active'>Skaya Notes App</p>
						</div>
					</div>
				</div>
			</div>
			<div className='container text-center'>
				<div className='single'>
					<h2 className='title--single'>Skaya Notes App</h2>
					<img src={f002} alt='Skaya Notes App' />
				</div>
			</div>
		</section>
	)
}

export default Figma002
