import React from 'react'
import Title from './Title'
import { Link } from 'react-router-dom'
import n001 from '../assets/img/screens/bc/002.jpg'
import b001 from '../assets/img/screens/banners/001.jpg'
import f001 from '../assets/img/screens/figma/001.jpg'
import g001 from '../assets/img/screens/ghost/002.jpg'
import h001 from '../assets/img/screens/html/001.jpg'
import r001 from '../assets/img/screens/print/001.jpg'
import p001 from '../assets/img/screens/psd/001.jpg'
import w001 from '../assets/img/screens/wp/001.jpg'

function Product() {
	return (
		<section id='product_block'>
			<div className='container'>
				<Title type='title--section left' text='Featured Works' />
				<div className='product'>
					<div className='product__description'>
						<Title type='title--product' text='Uny Chat. Dark &amp; Light Theme' />
						<p className='product--text'>Chat Figma Template<br />Dark &amp; Light Theme</p>
						<Link to='/uni-chat-ui' className='product__link'>
							See More
						</Link>
					</div>
					<div className='product__image'>
						<Link to='/uni-chat-ui' className='product__image'>
							<img src={f001} alt='Uny Chat' />
						</Link>
					</div>
				</div>
				<div className='product'>
					<div className='product__description'>
						<Title type='title--product' text='Uny Builder Bootstrap Blocks' />
						<p className='product--text'>Bootstrap HTML Blocks</p>
						<Link to='/uny-builder' className='product__link'>
							See More
						</Link>
					</div>
					<div className='product__image'>
						<Link to='/uny-builder' className='product__image'>
							<img src={h001} alt='Uny Builder Bootstrap Blocks' />
						</Link>
					</div>
				</div>
				<div className='product'>
					<div className='product__description'>
						<Title type='title--product' text='Explore Luxury Magazine' />
						<p className='product--text'>Magazine Template</p>
						<Link to='/explore-luxury-magazine' className='product__link'>
							See More
						</Link>
					</div>
					<div className='product__image'>
						<Link to='/explore-luxury-magazine' className='product__image'>
							<img src={r001} alt='Explore Luxury Magazine' />
						</Link>
					</div>
				</div>
				<div className='product'>
					<div className='product__description'>
						<Title type='title--product' text='Modena Wordpress Theme' />
						<p className='product--text'>Wordpress Theme</p>
						<Link to='/modena-wordpress-theme' className='product__link'>
							See More
						</Link>
					</div>
					<div className='product__image'>
						<Link to='/modena-wordpress-theme' className='product__image'>
							<img src={w001} alt='Modena Wordpress Theme' />
						</Link>
					</div>
				</div>
				<div className='product'>
					<div className='product__description'>
						<Title type='title--product' text='Brandy Ghost Theme' />
						<p className='product--text'>Ghost Theme</p>
						<Link to='/brandy-ghost-theme' className='product__link'>
							See More
						</Link>
					</div>
					<div className='product__image'>
						<Link to='/brandy-ghost-theme' className='product__image'>
							<img src={g001} alt='Brandy Ghost Theme' />
						</Link>
					</div>
				</div>
				<div className='product'>
					<div className='product__description'>
						<Title type='title--product' text='Delicuous Application' />
						<p className='product--text'>Photoshop Landing Template</p>
						<Link to='/delicious-application' className='product__link'>
							See More
						</Link>
					</div>
					<div className='product__image'>
						<Link to='/delicious-application' className='product__image'>
							<img src={p001} alt='Delicuous Application' />
						</Link>
					</div>
				</div>
				<div className='product'>
					<div className='product__description'>
						<Title type='title--product' text='Deluxe Business Card' />
						<p className='product--text'>Business Card Template</p>
						<Link to='/deluxe-business-card' className='product__link'>
							See More
						</Link>
					</div>
					<div className='product__image'>
						<Link to='/deluxe-business-card' className='product__image'>
							<img src={n001} alt='Deluxe Business Card' />
						</Link>
					</div>
				</div>
				<div className='product'>
					<div className='product__description'>
						<Title type='title--product' text='Web Banner Ad Template' />
						<p className='product--text'>Web Banners Template</p>
						<Link to='/web-banner-ad-template' className='product__link'>
							See More
						</Link>
					</div>
					<div className='product__image'>
						<Link to='/web-banner-ad-template' className='product__image'>
							<img src={b001} alt='Web Banner Ad Template' />
						</Link>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Product
