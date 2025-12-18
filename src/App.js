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
					<div className='pt-3 px-5 d-flex align-items-center justify-content-between'>
						<div className='dl-color-brand-b'>
							<p className='dl-no-margin dl-theme-title'><span className='dl-color-brand-a'>DL</span> Theme</p>
							<p className='dl-no-margin dl-theme-slogan'>Fancy and <span className='dl-color-brand-a'>Simple</span></p>
						</div>
						<button type="button" class="btn btn-success" disabled><b>Download Now</b></button>
					</div>
					<div className='dl-content-wrapper dl-color-brand-a'>
						<div className='dl-start-section'>
							<SpecsContainer />
						</div>
						<div className='dl-end-section'>
							<MobileFrame />
						</div>
					</div>
				</div>
				<footer className='d-flex align-items-center px-5 py-4'>
					<div className='footer-text'>
						<p>&copy; 2026 DL Theme.</p>
						<p>Built with ❤️ by <span className='dl-color-brand-b dl-theme-slogan'><a href='https://github.com/axpunto/dl_theme_landing' target='_blank'><FaGithub className='mx-2'/>axpunto</a></span></p>
					</div>
				</footer>
			</main>
		</>
	);
}

export default App;
