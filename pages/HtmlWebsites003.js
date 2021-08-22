import React from 'react'
import { Link } from 'react-router-dom'
import h003 from '../assets/img/screens/html/003.jpg'

function HtmlWebsites003() {
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
								Главная
							</Link>
							<p className='page__link page__link--row'>&rsaquo;</p>
							<Link to='/works' className='page__link'>
								Работы
							</Link>
							<p className='page__link page__link--row'>&rsaquo;</p>
							<p className='page__link page__link--active'>
								Creators HTML Template
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className='container text-center'>
				<div className='single'>
					<h2 className='title--single'>Creators HTML Template</h2>
					<img src={h003} alt='Creators HTML Template' />
				</div>
			</div>
		</section>
	)
}

export default HtmlWebsites003
