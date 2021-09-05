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
				<Title type='title--section' text='Skills' />
				<div className='features'>
					<Feature title='Frontend' icon={front} />
					<Feature title='UI Design' icon={ui} />
					<Feature title='Web Design' icon={web} />
					<Feature title='Print Design' icon={print} />
				</div>
			</div>
		</section>
	)
}

export default About
