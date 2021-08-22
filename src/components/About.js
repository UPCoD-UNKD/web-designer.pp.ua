import React from 'react'
import Title from './Title'
import Feature from './Feature'
import front from '../assets/img/icons/skills/front.svg'
import print from '../assets/img/icons/skills/print.svg'
import ui from '../assets/img/icons/skills/ui.svg'
import web from '../assets/img/icons/skills/web.svg'

function About() {
	return (
		<section id='about_block'>
			<div className='container'>
				<Title type='title--section' text='Навыки' />
				<div className='features'>
					<Feature title='Фронтенд' icon={front} />
					<Feature title='UI Дизайн' icon={ui} />
					<Feature title='Веб Дизайн' icon={web} />
					<Feature title='Принт Дизайн' icon={print} />
				</div>
			</div>
		</section>
	)
}

export default About
