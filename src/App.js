import './App.css';
import MobileFrame from './components/MobileFrame';
import SpecsContainer from './components/SpecsContainer';

function App() {
	return (
		<>
			<main className='dl-main-container'>
				<div className='dl-header-container'>
					<div className='dl-color-brand-b'>
						<p className='dl-no-margin dl-theme-head'><span className='dl-color-brand-a'>DL</span> Theme</p>
						<p className='dl-no-margin dl-theme-slogan'>Fancy and <span className='dl-color-brand-a'>Simple</span></p>
					</div>
					<div>
						<button className='dl-cta-button'>Download Now</button>
					</div>
				</div>
				<div className='dl-content-container'>
					<div className='dl-start-wrapper'>
						<SpecsContainer />
					</div>
					<div className='dl-end-wrapper'>
						<MobileFrame />
					</div>
				</div>
			</main>
		</>
	);
}

export default App;
