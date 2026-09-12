import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MobileFrame from './components/MobileFrame';
import SpecsContainer from './components/SpecsContainer';
import { FaGithub } from "react-icons/fa";

function App() {
	return (
		<>
			<main>
				<div className='dl-main dl-bg-linear-gradient'>	
					<header>
						<div className='pt-3 px-5 d-flex align-items-center justify-content-between'>
							<div className='dl-color-brand-b'>
								<p className='dl-no-margin dl-theme-title'><span className='dl-color-brand-a'>DL</span> Theme</p>
								<p className='dl-no-margin dl-theme-slogan'>Fancy & <span className='dl-color-brand-a'>Simple</span></p>
							</div>
							<button type="button" class="btn btn-success disabled" disabled><b>Download</b></button>
						</div>
					</header>
					<div className='dl-content-wrapper dl-color-brand-a'>
						<div className='dl-start-section'>
							<SpecsContainer />
						</div>
						<div className='dl-end-section'>
							<MobileFrame />
						</div>
					</div>
				</div>
				<footer className='d-flex align-items-center px-5 py-4 dl-footer-container'>
					<div className='footer-text'>
						<p>Built with ❤️ + ⚛️<span className='dl-color-brand-b dl-theme-slogan'><a href='https://github.com/axpunto/dl_theme_landing' rel='noopener noreferrer' target='_blank'><FaGithub className='mx-2'/>axpunto</a></span></p>
					</div>
				</footer>
				<div className='dl-video-background'>	
					<iframe 
						src="https://www.youtube.com/embed/_mjDw234Zwo?si=d3035L5l1O5YQR4g&autoplay=1&mute=1&loop=1&playlist=_mjDw234Zwo&controls=0&rel=0&modestbranding=1" 
						title="DL Theme development in progress" 
						frameborder="0" 
						allow="accelerometer; autoplay; gyroscope; encrypted-media" 
						referrerpolicy="strict-origin-when-cross-origin" 
						allowfullscreen>
					</iframe>
				</div>
			</main>
		</>
	);
}

export default App;
