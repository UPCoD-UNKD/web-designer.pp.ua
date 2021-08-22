import React from 'react'
import logo from '../logo.png'
import { Link } from 'react-router-dom'

function Menu() {
	return (
		<div className='wd-header'>
			<h1 className='wd-logo'>
				<Link to='/' className='wd-logo__link'>
					<img src={logo} className='wd-logo__img' alt='wd' />
					<strong>Design &amp; Development</strong>
				</Link>
			</h1>
			<div className='wd-menu'>
				<Link to='/works' className='wd-menu__link wd-menu__link--dropdown'>
					<span>Работы</span>
					<div className='wd-menu--hover'>
						<Link to='/html' className='wd-menu__link first'>
							HTML
						</Link>
						<Link to='/ghost' className='wd-menu__link'>
							Ghost
						</Link>
						<Link to='/wordpress' className='wd-menu__link'>
							WordPress
						</Link>
						<Link to='/figma' className='wd-menu__link'>
							Figma
						</Link>
						<Link to='/photoshop' className='wd-menu__link'>
							PhotoShop
						</Link>
						<Link to='/print' className='wd-menu__link'>
							Принт
						</Link>
						<Link to='/business-cards' className='wd-menu__link'>
							Визитки
						</Link>
						<Link to='/banners' className='wd-menu__link'>
							Баннеры
						</Link>
					</div>
				</Link>
				<Link to='/about' className='wd-menu__link'>
					Обо мне
				</Link>
				<Link to='/contact' className='wd-menu__link'>
					Контакты
				</Link>
			</div>
		</div>
	)
}

export default Menu
