import React from 'react'
import { Link } from 'react-router-dom'
import g001 from '../assets/img/screens/ghost/001.jpg'

function Ghost001() {
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
								Главная
							</Link>
							<p className='page__link page__link--row'>&rsaquo;</p>
							<Link to='/works' className='page__link'>
								Работы
							</Link>
							<p className='page__link page__link--row'>&rsaquo;</p>
							<p className='page__link page__link--active'>
								Unique Ghost Theme
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className='container text-center'>
				<div className='single'>
					<h2 className='title--single'>Unique Ghost Theme</h2>
					<img src={g001} alt='Unique Ghost Theme' />
				</div>
			</div>
		</section>
	)
}

export default Ghost001
