import './App.css';
import MobileFrame from './components/MobileFrame';
import SpecsContainer from './components/SpecsContainer';

function App() {
	return (
		<>
			<main className='dl-main-container'>
				<div className='dl-content-wrapper'>
					<div className='dl-start-container'>
						<SpecsContainer />
					</div>
					<div className='dl-end-container'>
						<MobileFrame />
					</div>
				</div>
			</main>
		</>
	);
}

export default App;
