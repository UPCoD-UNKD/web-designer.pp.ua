import React from 'react'
import { Link } from 'react-router-dom'
import p001 from '../assets/img/screens/psd/001.jpg'
import p002 from '../assets/img/screens/psd/002.jpg'
import p003 from '../assets/img/screens/psd/003.jpg'
import p004 from '../assets/img/screens/psd/004.jpg'
import p005 from '../assets/img/screens/psd/005.jpg'
import p006 from '../assets/img/screens/psd/006.jpg'
import p007 from '../assets/img/screens/psd/007.jpg'
import p008 from '../assets/img/screens/psd/008.jpg'
import p009 from '../assets/img/screens/psd/009.jpg'
import p010 from '../assets/img/screens/psd/010.jpg'
import p011 from '../assets/img/screens/psd/011.jpg'
import p012 from '../assets/img/screens/psd/012.jpg'
import p013 from '../assets/img/screens/psd/013.jpg'
import p014 from '../assets/img/screens/psd/014.jpg'

function Photoshop() {
	return (
		<section className='page' id='category_photoshop'>
			<div className='page__header'>
				<div className='container'>
					<div className='page__navigation'>
						<Link to='/works' className='page__link'>
							Работы
						</Link>
						<div className='page__pagination'>
							<Link to='/' className='page__link'>
								Главная
							</Link>
							<p className='page__link page__link--row'>&rsaquo;</p>
							<p className='page__link page__link--active'>Photoshop</p>
						</div>
					</div>
				</div>
			</div>
			<div className='category'>
				<h2 className='title--single'>Photoshop</h2>
				<div className='category__items'>
					<Link to='/delicious-application' className='product__image'>
						<img src={p001} alt='Delicious Application' />
					</Link>
					<Link to='/hotspot-presentation' className='product__image'>
						<img src={p002} alt='HotSpot Portfolio Presentation' />
					</Link>
					<Link to='/denver-pizza-presentation' className='product__image'>
						<img src={p003} alt='Denver Pizza Portfolio Presentation' />
					</Link>
					<Link
						to='/elephant-head-soft-presentation'
						className='product__image'
					>
						<img src={p004} alt='ElephantHeadSoft Portfolio Presentation' />
					</Link>
					<Link
						to='/jumpstart-wireless-presentation'
						className='product__image'
					>
						<img src={p005} alt='Jumpstart Wireless Portfolio Presentation' />
					</Link>
					<Link to='/jupiter' className='product__image'>
						<img src={p006} alt='Jupiter' />
					</Link>
					<Link to='/kelly-dark-ui-kit' className='product__image'>
						<img src={p007} alt='Kelly Dark UI Kit' />
					</Link>
					<Link to='/photoshop-text-graphic-styles' className='product__image'>
						<img src={p008} alt='Photoshop Text Graphic Styles' />
					</Link>
					<Link to='/flyer-labyrinth-of-love' className='product__image'>
						<img src={p009} alt='Flyer Labyrinth Of Love' />
					</Link>
					<Link to='/colorful-abstract-waves' className='product__image'>
						<img src={p010} alt='Colorful Abstract Waves' />
					</Link>
					<Link to='/mix-dream-graphic-styles' className='product__image'>
						<img src={p011} alt='Mix Dream Graphic Styles' />
					</Link>
					<Link to='/leather-logo-mockups' className='product__image'>
						<img src={p012} alt='Leather Logo Mockups' />
					</Link>
					<Link to='/wooden-logo-mockups' className='product__image'>
						<img src={p013} alt='Wooden Logo Mockups' />
					</Link>
					<Link
						to='/perspective-mock-ups-for-any-objects'
						className='product__image'
					>
						<img src={p014} alt='Perspective Mock-ups For Any Objects' />
					</Link>
				</div>
			</div>
		</section>
	)
}

export default Photoshop
