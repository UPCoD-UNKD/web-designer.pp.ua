import React from 'react'
import { Link } from 'react-router-dom'
import p010 from '../assets/img/screens/psd/010.jpg'

function Photoshop010() {
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
								Colorful Abstract Waves
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className='container text-center'>
				<div className='single'>
					<h2 className='title--single'>Colorful Abstract Waves</h2>
					<img src={p010} alt='Colorful Abstract Waves' />
				</div>
			</div>
		</section>
	)
}

export default Photoshop010
