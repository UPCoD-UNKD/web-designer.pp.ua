import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import Home from './pages/Home'
import Works from './pages/Works'
import Banners from './pages/Banners'
import Banners001 from './pages/Banners001'
import Banners002 from './pages/Banners002'
import BusinessCards from './pages/BusinessCards'
import BusinessCards001 from './pages/BusinessCards001'
import BusinessCards002 from './pages/BusinessCards002'
import Figma from './pages/Figma'
import Figma001 from './pages/Figma001'
import Figma002 from './pages/Figma002'
import Figma003 from './pages/Figma003'
import Figma004 from './pages/Figma004'
import Figma005 from './pages/Figma005'
import Ghost from './pages/Ghost'
import Ghost001 from './pages/Ghost001'
import Ghost002 from './pages/Ghost002'
import Ghost003 from './pages/Ghost003'
import Ghost004 from './pages/Ghost004'
import Ghost005 from './pages/Ghost005'
import HtmlWebsites from './pages/HtmlWebsites'
import HtmlWebsites001 from './pages/HtmlWebsites001'
import HtmlWebsites002 from './pages/HtmlWebsites002'
import HtmlWebsites003 from './pages/HtmlWebsites003'
import HtmlWebsites004 from './pages/HtmlWebsites004'
import HtmlWebsites005 from './pages/HtmlWebsites005'
import HtmlWebsites006 from './pages/HtmlWebsites006'
import HtmlWebsites011 from './pages/HtmlWebsites011'
import HtmlWebsites012 from './pages/HtmlWebsites012'
import HtmlWebsites013 from './pages/HtmlWebsites013'
import HtmlWebsites014 from './pages/HtmlWebsites014'
import HtmlWebsites015 from './pages/HtmlWebsites015'
import HtmlWebsites016 from './pages/HtmlWebsites016'
import HtmlWebsites017 from './pages/HtmlWebsites017'
import HtmlWebsites018 from './pages/HtmlWebsites018'
import HtmlWebsites019 from './pages/HtmlWebsites019'
import HtmlWebsites020 from './pages/HtmlWebsites020'
import Photoshop from './pages/Photoshop'
import Photoshop001 from './pages/Photoshop001'
import Photoshop002 from './pages/Photoshop002'
import Photoshop003 from './pages/Photoshop003'
import Photoshop004 from './pages/Photoshop004'
import Photoshop005 from './pages/Photoshop005'
import Photoshop006 from './pages/Photoshop006'
import Photoshop007 from './pages/Photoshop007'
import Photoshop008 from './pages/Photoshop008'
import Photoshop009 from './pages/Photoshop009'
import Photoshop010 from './pages/Photoshop010'
import Photoshop011 from './pages/Photoshop011'
import Photoshop012 from './pages/Photoshop012'
import Photoshop013 from './pages/Photoshop013'
import Photoshop014 from './pages/Photoshop014'
import Print from './pages/Print'
import Print001 from './pages/Print001'
import Print002 from './pages/Print002'
import WordPress from './pages/WordPress'
import WordPress001 from './pages/WordPress001'
import WordPress002 from './pages/WordPress002'
import WordPress003 from './pages/WordPress003'
import WordPress004 from './pages/WordPress004'
import WordPress005 from './pages/WordPress005'
import './styles/custom.sass'

function App() {
	return (
		<BrowserRouter>
			<div id='site_content'>
				<Header />
				<div className='content'>
					<Switch>
						<Route exact path='/' component={Home} />
						<Route exact path='/about' component={AboutPage} />
						<Route exact path='/contact' component={ContactPage} />

						<Route path='/works' component={Works} />
						<Route path='/banners' component={Banners} />
						<Route path='/business-cards' component={BusinessCards} />
						<Route path='/figma' component={Figma} />
						<Route path='/ghost' component={Ghost} />
						<Route path='/html' component={HtmlWebsites} />
						<Route path='/print' component={Print} />
						<Route path='/photoshop' component={Photoshop} />
						<Route path='/wordpress' component={WordPress} />

						<Route path='/web-banner-ad-template' component={Banners001} />
						<Route path='/rus-food' component={Banners002} />

						<Route
							path='/creative-business-card'
							component={BusinessCards001}
						/>
						<Route path='/deluxe-business-card' component={BusinessCards002} />

						<Route path='/uni-chat-ui' component={Figma001} />
						<Route path='/skaya-notes-app' component={Figma002} />
						<Route path='/adspro-website' component={Figma003} />
						<Route path='/sportmaster' component={Figma004} />
						<Route path='/water-app' component={Figma005} />

						<Route path='/unique-ghost-theme' component={Ghost001} />
						<Route path='/brandy-ghost-theme' component={Ghost002} />
						<Route path='/kathreen-ghost-theme' component={Ghost003} />
						<Route path='/silestia-ghost-theme' component={Ghost004} />
						<Route path='/virgo-ghost-theme' component={Ghost005} />

						<Route path='/uny-builder' component={HtmlWebsites001} />
						<Route path='/lotty' component={HtmlWebsites002} />
						<Route path='/creators' component={HtmlWebsites003} />
						<Route
							path='/forward-creative-studio'
							component={HtmlWebsites004}
						/>
						<Route path='/guest-ready' component={HtmlWebsites005} />
						<Route path='/medicenter' component={HtmlWebsites006} />
						<Route path='/creed' component={HtmlWebsites011} />
						<Route path='/design-creative' component={HtmlWebsites012} />
						<Route path='/han' component={HtmlWebsites013} />
						<Route path='/uppointment' component={HtmlWebsites014} />
						<Route path='/vs-brothers' component={HtmlWebsites015} />
						<Route path='/nina-gilin' component={HtmlWebsites016} />
						<Route path='/delivery-auto' component={HtmlWebsites017} />
						<Route path='/exportace' component={HtmlWebsites018} />
						<Route path='/proof' component={HtmlWebsites019} />
						<Route
							path='/uny-landing-page-template'
							component={HtmlWebsites020}
						/>

						<Route path='/delicious-application' component={Photoshop001} />
						<Route path='/hotspot-presentation' component={Photoshop002} />
						<Route path='/denver-pizza-presentation' component={Photoshop003} />
						<Route
							path='/elephant-head-soft-presentation'
							component={Photoshop004}
						/>
						<Route
							path='/jumpstart-wireless-presentation'
							component={Photoshop005}
						/>
						<Route path='/jupiter' component={Photoshop006} />
						<Route path='/kelly-dark-ui-kit' component={Photoshop007} />
						<Route
							path='/photoshop-text-graphic-styles'
							component={Photoshop008}
						/>
						<Route path='/flyer-labyrinth-of-love' component={Photoshop009} />
						<Route path='/colorful-abstract-waves' component={Photoshop010} />
						<Route path='/mix-dream-graphic-styles' component={Photoshop011} />
						<Route path='/leather-logo-mockups' component={Photoshop012} />
						<Route path='/wooden-logo-mockups' component={Photoshop013} />
						<Route
							path='/perspective-mock-ups-for-any-objects'
							component={Photoshop014}
						/>

						<Route path='/explore-luxury-magazine' component={Print001} />
						<Route path='/flower-wedding-template' component={Print002} />

						<Route path='/modena-wordpress-theme' component={WordPress001} />
						<Route path='/kyoto-wordpress-theme' component={WordPress002} />
						<Route path='/kathreen-wordpress-theme' component={WordPress003} />
						<Route path='/velvet-wordpress-theme' component={WordPress004} />
						<Route path='/virtue-wordpress-theme' component={WordPress005} />

						<Redirect to='/' />
					</Switch>
				</div>
				<Footer />
			</div>
		</BrowserRouter>
	)
}

export default App
