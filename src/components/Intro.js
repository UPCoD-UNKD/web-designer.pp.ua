import React from 'react'
import Title from './Title'
import Button from './Button'

function Intro() {
	return (
		<div className='container'>
			<div className='intro'>
				<Title
					type='title--intro'
					text='Hey! My name is Antonina, I am a graphic designer and frontend developer'
				/>
				<p className='text'>
					Do you need a website, application, design, logo, business card, brochure, magazine, or something similar? Feel free to contact me.
					<br />
					We will discuss all the details, choose the appropriate solution for your task, and after its implementation, you will be satisfied with the result.
				</p>
				<Button url='contact' type='premium' text='Contact me' />
			</div>
		</div>
	)
}

export default Intro
