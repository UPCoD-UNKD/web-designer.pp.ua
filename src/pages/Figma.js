import React from 'react'
import { Link } from 'react-router-dom'
import f001 from '../assets/img/screens/figma/001.jpg'
import f002 from '../assets/img/screens/figma/002.jpg'
import f003 from '../assets/img/screens/figma/003.jpg'
import f004 from '../assets/img/screens/figma/004.jpg'
import f005 from '../assets/img/screens/figma/005.jpg'

function Figma() {
	return (
		<section className='page' id='category_figma'>
			<div className='page__header'>
				<div className='container'>
					<div className='page__navigation'>
						<Link to='/works' className='page__link'>
							Works
						</Link>
						<div className='page__pagination'>
							<Link to='/' className='page__link'>
								Home
							</Link>
							<p className='page__link page__link--row'>&rsaquo;</p>
							<p className='page__link page__link--active'>Uny Chat</p>
						</div>
					</div>
				</div>
			</div>
			<div className='category'>
				<h2 className='title--single'>Figma</h2>
				<div className='category__items'>
					<Link to='/uni-chat-ui' className='product__image'>
						<img src={f001} alt='Uny Chat' />
					</Link>
					<Link to='/skaya-notes-app' className='product__image'>
						<img src={f002} alt='Skaya Notes App' />
					</Link>
					<Link to='/adspro-website' className='product__image'>
						<img src={f003} alt='Adspro Website' />
					</Link>
					<Link to='/sportmaster' className='product__image'>
						<img src={f004} alt='Sportmaster' />
					</Link>
					<Link to='/water-app' className='product__image'>
						<img src={f005} alt='Water App' />
					</Link>
				</div>
			</div>
		</section>
	)
}

export default Figma
