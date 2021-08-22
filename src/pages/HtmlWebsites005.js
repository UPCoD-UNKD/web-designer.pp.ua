import React from 'react'
import { Link } from 'react-router-dom'
import h005 from '../assets/img/screens/html/005.jpg'

function HtmlWebsites005() {
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
								Guest Ready Arbnb Managment Tool
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className='container text-center'>
				<div className='single'>
					<h2 className='title--single'>Guest Ready Arbnb Managment Tool</h2>
					<img src={h005} alt='Guest Ready Arbnb Managment Tool' />
				</div>
			</div>
		</section>
	)
}

export default HtmlWebsites005
