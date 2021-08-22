import React from 'react'
import { Link } from 'react-router-dom'
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

function HtmlWebsites() {
	return (
		<section className='page' id='category_html'>
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
							<p className='page__link page__link--active'>HTML</p>
						</div>
					</div>
				</div>
			</div>
			<div className='category'>
				<h2 className='title--single'>HTML</h2>
				<div className='category__items'>
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
				</div>
			</div>
		</section>
	)
}

export default HtmlWebsites
