import React from 'react'
import Menu from './Menu'

function Header() {
	return (
		<div id='top_block'>
			<div className='container'>
				<div className='wd-burger'>
					<span className='one'></span>
					<span className='two'></span>
					<span className='three'></span>
				</div>
				<Menu />
			</div>
		</div>
	)
}

export default Header
