import React from 'react'

function Feature(props) {
	return (
		<div className='feature'>
			<img className='feature__icon' src={props.icon} alt={props.title} />
			<p className='feature__text'>{props.title}</p>
		</div>
	)
}

export default Feature
