import React from 'react'
import { Link } from 'react-router-dom'
import b001 from '../assets/img/screens/banners/001.jpg'

function Banners001() {
	return (
		<section className='page'>
			<div className='page__header'>
				<div className='container'>
					<div className='page__navigation'>
						<Link to='/banners' className='page__link'>
							Banners
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
								Web Banner Ad Template
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className='container text-center'>
				<div className='single'>
					<h2 className='title--single'>Web Banner Ad Template</h2>
					<img src={b001} alt='Web Banner Ad Template' />
				</div>
			</div>
		</section>
	)
}

export default Banners001
