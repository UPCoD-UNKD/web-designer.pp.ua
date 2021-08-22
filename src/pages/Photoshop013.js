import React from 'react'
import { Link } from 'react-router-dom'
import p013 from '../assets/img/screens/psd/013.jpg'

function Photoshop013() {
	return (
		<section className='page'>
			<div className='page__header'>
				<div className='container'>
					<div className='page__navigation'>
						<Link to='/psd' className='page__link'>
							Photoshop
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
							<p className='page__link page__link--active'>
								Wooden Logo Mockups
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className='container text-center'>
				<div className='single'>
					<h2 className='title--single'>Wooden Logo Mockups</h2>
					<img src={p013} alt='Wooden Logo Mockups' />
				</div>
			</div>
		</section>
	)
}

export default Photoshop013
