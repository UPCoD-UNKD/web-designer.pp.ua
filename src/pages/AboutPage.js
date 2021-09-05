import React from 'react'
import { Link } from 'react-router-dom'

function AboutPage() {
	return (
		<section className='page' id='about_page'>
			<div className='page__header'>
				<div className='container'>
					<div className='page__navigation'>
						<Link to='/works' className='page__link'>
							Works
						</Link>
						<div className='page__pagination'>
							<Link to='/' className='page__link'>
								Home
							</Link>
							<p className='page__link page__link--row'>&rsaquo;</p>
							<p className='page__link page__link--active'>About</p>
						</div>
					</div>
				</div>
			</div>
			<div className='about'>
				<h2 className='title--single'>About Me</h2>
				<div className='about__resume'>
					<p><strong>SoftSkills</strong><span>Team Building, Project Managment.</span></p>
					<p><strong>HardSkills</strong><span>UI/UX Design, Print Design, HTML, CSS, Sass, Less, Bootstrap, jQuery, WordPress, Ghost, React JS, Frontend Development and Design.</span></p>
					<p><strong>Languages</strong><span>Russian C2, Ukrainian C2, English A2</span></p>
					<p><strong>Education</strong><span>Odessa I. I. Mechnikov National University - IMEM 1994-1999</span></p>
					<h3>Experience</h3>
					<p>
						<em>June 2021 - <br />Current time</em>
						<span>Company: "KS Team", Frontend Team Lead<br />
							Managed production 3D-movies, get 10k attenders</span>
					</p>
					<p>
						<em>February 2017 -<br />November 2020</em>
						<span>Company: "Web&Ad" (NY), Frontend Team Lead<br />
							Delivery templates for 150 sites.</span>
					</p>
					<p>
						<em>March 2015 -<br />September 2016</em>
						<span>Company: "Guest Ready" - (NY), Frontend Team Lead<br />
							Managed London locations FrontEnd</span>
					</p>
					<p>
						<em>September 2009 -<br />September 2020</em>
						<span>Own Company: "ShakeDesign’, Co-founder<br />
							Created digital marketplace, get 20k visitors</span>
					</p>
					<p>
						<em>May 2007 -<br />November 2009</em>
						<span>Company: "turguru.ru”, Frontend<br />
							Created tourist portal, get 200k visitors</span>
					</p>
					<p>
						<em>May 2004 -<br />November 2005</em>
						<span>Company: "m2m", Designer<br />
							Prepublish work for 5 magazines, 160M copies sold</span>
					</p>
					<p>
						<em>November 2002 -<br />April 2004</em>
						<span>"Passage" - magazine, Designer<br />
							Prepublish work 5 magazines, 20M copies sold</span>
					</p>
					<p>
						<em>June 2001 -<br />July 2002</em>
						<span>"Real"- local IT company, Manager<br />
							Delivery 3 products at time.</span>
					</p>
					<p>
						<em>December 1999 -<br />May 2001</em>
						<span>"Polygraphmash", Designer<br />
							Created Section for Odessa Region (17% of the book).</span>
					</p>
					<br /><br />
					<p><strong>Website</strong><span><a href="https://web-designer.pp.ua/">https://web-designer.pp.ua/</a></span></p>
					<p><strong>Contacts</strong>
						<span>Dribbble: <a href="https://dribbble.com/ShakeDesign">https://dribbble.com/ShakeDesign</a><br />
							Linkedin: <a href="https://www.linkedin.com/in/antonina-osypenko-88669121b/">https://www.linkedin.com/in/antonina-osypenko-88669121b/</a></span>
					</p>
					<p><strong>Portfolio</strong>
						<span>
							<a href="https://web-designer.pp.ua/works">https://web-designer.pp.ua/works</a><br />
							<a href="https://creativemarket.com/emagweb">https://creativemarket.com/emagweb</a><br />
							<a href="https://themeforest.net/user/emagweb">https://themeforest.net/user/emagweb</a><br />
							<a href="https://graphicriver.net/user/emagweb">https://graphicriver.net/user/emagweb</a>
						</span>
					</p>
				</div>
			</div>
		</section>
	)
}

export default AboutPage
