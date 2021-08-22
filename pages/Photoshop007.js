import React from 'react'
import { Link } from 'react-router-dom'
import p007 from '../assets/img/screens/psd/007.jpg'

function Photoshop007() {
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
							<p className='page__link page__link--active'>Kelly Dark UI Kit</p>
						</div>
					</div>
				</div>
			</div>
			<div className='container text-center'>
				<div className='single'>
					<h2 className='title--single'>Kelly Dark UI Kit</h2>
					<img src={p007} alt='Kelly Dark UI Kit' />
				</div>
			</div>
		</section>
	)
}

export default Photoshop007
