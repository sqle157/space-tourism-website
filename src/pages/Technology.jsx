import { useEffect, useState } from 'react';
import { useWindowSize } from '../hooks/useWindowSize';
import backgroundImageTech from '../assets/technology/background-technology-desktop.jpg';
import backgroundImageTechTablet from '../assets/technology/background-technology-tablet.jpg';
import backgroundImageTechMobile from '../assets/technology/background-technology-mobile.jpg';
import { data } from '../data/data';

function Technology() {
	const [currentTechIndex, setCurrentTechIndex] = useState(0);
	const windowWidth = useWindowSize();

	const { technology } = data;

	// Change background image based on current window width
	useEffect(() => {
		// Laptop
		if (windowWidth >= 850) {
			document.body.style.backgroundImage = `url(${backgroundImageTech})`;
		} else if (windowWidth < 850 && windowWidth > 576) {
			// Tablet
			document.body.style.backgroundImage = `url(${backgroundImageTechTablet})`;
		} else if (windowWidth <= 576) {
			// Mobile
			document.body.style.backgroundImage = `url(${backgroundImageTechMobile})`;
		}
	}, [windowWidth]);

	return (
		<main id='technology' className='container-md'>
			<h1 className='main-heading text-uppercase letter-spacing-1 ff-secondary fw-400'>
				<span className='fw-700'>03</span> Space Launch 101
			</h1>
			<div className='grid-container'>
				<div className='tech-info flex'>
					<div className='controller-group flex'>
						<div
							className={`dot ${currentTechIndex === 0 ? 'dot--active' : ''}`}
							onClick={() => setCurrentTechIndex(0)}>
							1
						</div>
						<div
							className={`dot ${currentTechIndex === 1 ? 'dot--active' : ''}`}
							onClick={() => setCurrentTechIndex(1)}>
							2
						</div>
						<div
							className={`dot ${currentTechIndex === 2 ? 'dot--active' : ''}`}
							onClick={() => setCurrentTechIndex(2)}>
							3
						</div>
					</div>
					<div className='tech-intro'>
						<h2 className='ff-secondary fw-400 text-uppercase text-secondary letter-spacing-1'>
							The Terminology...
							<span className='d-block text-white name'>
								{technology[currentTechIndex].name}
							</span>
						</h2>
						<p className='ff-accent text-secondary fw-400 description'>
							{technology[currentTechIndex].description}
						</p>
					</div>
				</div>
				<div className='tech-pic'>
					<img
						src={
							windowWidth >= 880
								? technology[currentTechIndex].images.portrait
								: technology[currentTechIndex].images.landscape
						}
						alt=''
					/>
				</div>
			</div>
		</main>
	);
}
export default Technology;
