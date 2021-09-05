import React from 'react'
import { Link } from 'react-router-dom'
import p009 from '../assets/img/screens/psd/009.jpg'

function Photoshop009() {
	return (
		<section className='page'>
			<div className='page__header'>
				<div className='container'>
					<div className='page__navigation'>
						<Link to='/photoshop' className='page__link'>
							Photoshop
						</Link>
						<div className='page__pagination'>
							<Link to='/' className='page__link'>
								Home
							</Link>
							<p className='page__link page__link--row'>&rsaquo;</p>
							<Link to='/works' className='page__link'>
								Works
							</Link>
							<p className='page__link page__link--row'>&rsaquo;</p>
							<p className='page__link page__link--active'>
								Flyer Labyrinth Of Love
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className='container text-center'>
				<div className='single'>
					<h2 className='title--single'>Flyer Labyrinth Of Love</h2>
					<img src={p009} alt='Flyer Labyrinth Of Love' />
				</div>
			</div>
		</section>
	)
}

export default Photoshop009
