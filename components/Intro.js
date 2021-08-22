import React from 'react'
import Title from './Title'
import Button from './Button'

function Intro() {
	return (
		<div className='intro'>
			<div className='container'>
				<Title
					type='title--intro'
					text='Привет! Меня зовут Антонина. Я графический дизайнер и фронтенд разработчик'
				/>
				<p className='text'>
					Вам нужен сайт, приложение, дизайн, логотип, визитка, буклет, журнал,
					или что-нибудь похожее? Смело обращайтесь.
					<br />
					Мы обсудим все детали, выберем подходящее решение для вашей задачи, и
					после ее реализации, вы останетесь довольны результатом.
				</p>
				<Button url='contact' type='premium' text='Связаться со мной' />
			</div>
		</div>
	)
}

export default Intro
