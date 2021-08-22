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
				<Title type='title--section left' text='Избранное' />
				<div className='product'>
					<div className='product__description'>
						<Title type='title--product' text='Uny Chat' />
						<p className='product--text'>Шаблон чата. Светлая и темная тема</p>
						<Link to='/uni-chat-ui' className='product__link'>
							Смотреть
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
						<p className='product--text'>Билдер сайта на Bootstrap</p>
						<Link to='/uny-builder' className='product__link'>
							Смотреть
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
						<p className='product--text'>Шаблон журнала для печати</p>
						<Link to='/explore-luxury-magazine' className='product__link'>
							Смотреть
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
						<p className='product--text'>WordPress тема</p>
						<Link to='/modena-wordpress-theme' className='product__link'>
							Смотреть
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
						<p className='product--text'>Ghost тема</p>
						<Link to='/brandy-ghost-theme' className='product__link'>
							Смотреть
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
						<p className='product--text'>Шаблон сайта для приложения</p>
						<Link to='/delicious-application' className='product__link'>
							Смотреть
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
						<p className='product--text'>Шаблон визитной карточки</p>
						<Link to='/deluxe-business-card' className='product__link'>
							Смотреть
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
						<p className='product--text'>Шаблон баннеров для сайта</p>
						<Link to='/web-banner-ad-template' className='product__link'>
							Смотреть
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
