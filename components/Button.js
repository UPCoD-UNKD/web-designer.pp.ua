import React from 'react'

function Button(props) {
	return (
		<a href={`/${props.url}`} className={`btn btn--${props.type}`}>
			{props.text}
		</a>
	)
}

export default Button
