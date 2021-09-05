import React from 'react'
import { Link } from 'react-router-dom'
import b001 from '../assets/img/screens/banners/001.jpg'
import b002 from '../assets/img/screens/banners/002.jpg'
import n001 from '../assets/img/screens/bc/001.jpg'
import n002 from '../assets/img/screens/bc/002.jpg'
import f001 from '../assets/img/screens/figma/001.jpg'
import f002 from '../assets/img/screens/figma/002.jpg'
import f003 from '../assets/img/screens/figma/003.jpg'
import f004 from '../assets/img/screens/figma/004.jpg'
import f005 from '../assets/img/screens/figma/005.jpg'
import g001 from '../assets/img/screens/ghost/001.jpg'
import g002 from '../assets/img/screens/ghost/002.jpg'
import g003 from '../assets/img/screens/ghost/003.jpg'
import g004 from '../assets/img/screens/ghost/004.jpg'
import g005 from '../assets/img/screens/ghost/005.jpg'
import h001 from '../assets/img/screens/html/001.jpg'
import h002 from '../assets/img/screens/html/002.jpg'
import h003 from '../assets/img/screens/html/003.jpg'
import h004 from '../assets/img/screens/html/004.jpg'
import h005 from '../assets/img/screens/html/005.jpg'
import h006 from '../assets/img/screens/html/006.jpg'
import h011 from '../assets/img/screens/html/011.jpg'
import h012 from '../assets/img/screens/html/012.jpg'
import h013 from '../assets/img/screens/html/013.jpg'
import h014 from '../assets/img/screens/html/014.jpg'
import h015 from '../assets/img/screens/html/015.jpg'
import h016 from '../assets/img/screens/html/016.jpg'
import h017 from '../assets/img/screens/html/017.jpg'
import h018 from '../assets/img/screens/html/018.jpg'
import h019 from '../assets/img/screens/html/019.jpg'
import h020 from '../assets/img/screens/html/020.jpg'
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
import r001 from '../assets/img/screens/print/001.jpg'
import r002 from '../assets/img/screens/print/002.jpg'
import w001 from '../assets/img/screens/wp/001.jpg'
import w002 from '../assets/img/screens/wp/002.jpg'
import w003 from '../assets/img/screens/wp/003.jpg'
import w004 from '../assets/img/screens/wp/004.jpg'
import w005 from '../assets/img/screens/wp/005.jpg'

function Works() {
	return (
		<section className='page' id='category_all_works'>
			<div className='page__header'>
				<div className='container'>
					<div className='page__navigation'>
						<Link to='/contact' className='page__link'>
							Contact
						</Link>
						<div className='page__pagination'>
							<Link to='/' className='page__link'>
								Home
							</Link>
							<p className='page__link page__link--row'>&rsaquo;</p>
							<p className='page__link page__link--active'>Works</p>
						</div>
					</div>
				</div>
			</div>
			<div className='category'>
				<h2 className='title--single'>Works</h2>
				<div className='category__items'>
					<Link to='/uni-builder' className='product__image'>
						<img src={f001} alt='Uny Chat' />
					</Link>
					<Link to='/skaya-notes-app' className='product__image'>
						<img src={f002} alt='Skaya Notes App' />
					</Link>
					<Link to='/adspro-website' className='product__image'>
						<img src={f003} alt='Adspro Website' />
					</Link>
					<Link to='/sportmaster' className='product__image'>
						<img src={f004} alt='Спортмастер' />
					</Link>
					<Link to='/water-app' className='product__image'>
						<img src={f005} alt='Water App' />
					</Link>
					<Link to='/uny-builder' className='product__image'>
						<img src={h001} alt='Uny Builder Bootstrap Blocks' />
					</Link>
					<Link to='/lotty' className='product__image'>
						<img src={h002} alt='Lotty HTML Template' />
					</Link>
					<Link to='/creators' className='product__image'>
						<img src={h003} alt='Creators HTML Template' />
					</Link>
					<Link to='/forward-creative-studio' className='product__image'>
						<img src={h004} alt='Forward HTML Template' />
					</Link>
					<Link to='/guest-ready' className='product__image'>
						<img src={h005} alt='Guest Ready Arbnb Managment Tool' />
					</Link>
					<Link to='/medicenter' className='product__image'>
						<img src={h006} alt='Medicenter Website' />
					</Link>
					<Link to='/creed' className='product__image'>
						<img src={h011} alt='Creed HTML Template' />
					</Link>
					<Link to='/design-creative' className='product__image'>
						<img src={h012} alt='Design Creative' />
					</Link>
					<Link to='/han' className='product__image'>
						<img src={h013} alt='Han HTML Template' />
					</Link>
					<Link to='/uppointment' className='product__image'>
						<img src={h014} alt='Uppointment' />
					</Link>
					<Link to='/vs-brothers' className='product__image'>
						<img src={h015} alt='VS Brothers' />
					</Link>
					<Link to='/nina-gilin' className='product__image'>
						<img src={h016} alt='Nina Gilin' />
					</Link>
					<Link to='/delivery-auto' className='product__image'>
						<img src={h017} alt='Delivery Auto' />
					</Link>
					<Link to='/exportace' className='product__image'>
						<img src={h018} alt='Exportace' />
					</Link>
					<Link to='/proof' className='product__image'>
						<img src={h019} alt='Proof' />
					</Link>
					<Link to='/uny-landing-page-template' className='product__image'>
						<img src={h020} alt='Uny Landing Page Template' />
					</Link>
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
					<Link to='/explore-luxury-magazine' className='product__image'>
						<img src={r001} alt='Explore Luxury Magazine' />
					</Link>
					<Link to='/flower-wedding-template' className='product__image'>
						<img src={r002} alt='Flower Wedding Template' />
					</Link>
					<Link to='/modena-wordpress-theme' className='product__image'>
						<img src={w001} alt='Modena WordPress Theme' />
					</Link>
					<Link to='/kyoto-wordpress-theme' className='product__image'>
						<img src={w002} alt='Kyoto WordPress Theme' />
					</Link>
					<Link to='/kathreen-wordpress-theme' className='product__image'>
						<img src={w003} alt='Kathreen WordPress Theme' />
					</Link>
					<Link to='/velvet-wordpress-theme' className='product__image'>
						<img src={w004} alt='Velvet WordPress Theme' />
					</Link>
					<Link to='/virtue-wordpress-theme' className='product__image'>
						<img src={w005} alt='Virtue WordPress Theme' />
					</Link>
					<Link to='/unique-ghost-theme' className='product__image'>
						<img src={g001} alt='Unique Ghost Theme' />
					</Link>
					<Link to='/brandy-ghost-theme' className='product__image'>
						<img src={g002} alt='Brandy Ghost Theme' />
					</Link>
					<Link to='/kathreen-ghost-theme' className='product__image'>
						<img src={g003} alt='Kathreen Ghost Theme' />
					</Link>
					<Link to='/silestia-ghost-theme' className='product__image'>
						<img src={g004} alt='Silestia Ghost Theme' />
					</Link>
					<Link to='/virgo-ghost-theme' className='product__image'>
						<img src={g005} alt='Virgo Ghost Theme' />
					</Link>
					<Link to='/web-banner-ad-template' className='product__image'>
						<img src={b001} alt='Web Banner Ad Template' />
					</Link>
					<Link to='/rus-food' className='product__image'>
						<img src={b002} alt='Rus Food' />
					</Link>
					<Link to='/creative-business-card' className='product__image'>
						<img src={n001} alt='Creative Business Card' />
					</Link>
					<Link to='/deluxe-business-card' className='product__image'>
						<img src={n002} alt='Deluxe Business Card' />
					</Link>
				</div>
			</div>
		</section>
	)
}

export default Works
