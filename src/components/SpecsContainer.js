import './SpecsContainer.css';
import { SiAngular } from "react-icons/si";
import { SiIonic } from "react-icons/si";
import { TfiCheckBox } from "react-icons/tfi";
import { FaPlus } from "react-icons/fa";

const specsDataMock = [
    { title: "⚡ Reusable for scale", description: "Get standalone components ready to customize." },
    { title: "🚀 Optimized performance", description: "Fast load times, smooth animations, ready to customize." }
]

const SpecsContainer = () => {
	return (
		<>
            <h2 className='dl-specs-heading'><span className='ionic-lbl'>Ionic-6</span> starter theme for E-Commerce</h2>
            <div className='d-flex align-items-center justify-content-start mb-4'>
                <p className='dl-no-margin'>Built in: </p>
                <div className='px-2'><SiIonic size={25} color="rgb(70 82 255)"/></div>
                <FaPlus size={15} color="#ffffff"/>
                <div className='ps-2'><SiAngular size={25} color="rgb(255 90 90)"/></div>
            </div>
            <div className='specs-container'>
                <ul className='dl-features'>
                    {
                        specsDataMock.map((spec, index) => (
                            <li key={index}>
                                <h3>{spec.title}</h3>
                                <p>{spec.description}</p>
                            </li>
                        ))
                    }
                </ul>
                <ul className='dl-listing-features'>
                    <h3>📦 What’s Included</h3>
                    <li className='list-text'><TfiCheckBox className='check-icon'/>Ready-to-adapt authentication flow</li>
                    <li className='list-text'><TfiCheckBox className='check-icon'/>Optimized navigation structure</li>
                    <li className='list-text'><TfiCheckBox className='check-icon'/>Reusable UI components</li>
                    <li className='list-text'><TfiCheckBox className='check-icon'/>Global theming with SCSS variables</li>
                    <li className='list-text'><TfiCheckBox className='check-icon'/>Production-ready app architecture</li>
                </ul>
            </div>
		</>
	);
};

export default SpecsContainer;