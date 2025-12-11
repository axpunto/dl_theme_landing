import './SpecsContainer.css';

const specsDataMock = [
    { title: "⚡ Modern & Scalable Codebase", description: "You will get latest libraries" },
    { title: "🧪 Quality You Can Trust", description: "Built-in unit testing powered by Jasmine." },
    { title: "🚀 Optimized for Performance", description: "Fast load times, smooth animations, ready to customize." }
]

const SpecsContainer = () => {
	return (
		<>
			<h2>Starter Ionic 6 E-Commerce UI/UX.</h2>
			<p>DL Theme - a solid template built with Ionic 6 + Angular 18</p>
			<div className='specs-container'>
				<ul>
                    {
                        specsDataMock.map((spec, index) => (
                            <li key={index}>
                                <h3>{spec.title}</h3>
                                <p>{spec.description}</p>
                            </li>
                        ))
                    }
				</ul>
			</div>
		</>
	);
};

export default SpecsContainer;