import React from 'react'
import { Link } from 'react-router-dom'
import h007 from '../assets/img/screens/html/007.jpg'

function HtmlWebsites007() {
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
								VSBrothers Website
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className='container text-center'>
				<div className='single'>
					<h2 className='title--single'>VSBrothers Website</h2>
					<img src={h007} alt='VSBrothers Website' />
				</div>
			</div>
		</section>
	)
}

export default HtmlWebsites007
