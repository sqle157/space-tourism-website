import { useEffect, useState } from 'react';
import { useWindowSize } from '../hooks/useWindowSize';
import backgroundImageDestination from '../assets/destination/background-destination-desktop.jpg';
import backgroundImageDestinationTablet from '../assets/destination/background-destination-tablet.jpg';
import backgroundImageDestinationMobile from '../assets/destination/background-destination-mobile.jpg';
import { data } from '../data/data';

function Destination() {
	const [currentPlanetIndex, setCurrentPlanetIndex] = useState(0);
	const windowWidth = useWindowSize();

	const { destinations } = data;
	// console.log(data);

	// Change background image based on current window width
	useEffect(() => {
		if (windowWidth >= 850) {
			document.body.style.backgroundImage = `url(${backgroundImageDestination})`;
		} else if (windowWidth < 850 && windowWidth > 576) {
			document.body.style.backgroundImage = `url(${backgroundImageDestinationTablet})`;
		} else if (windowWidth <= 576) {
			document.body.style.backgroundImage = `url(${backgroundImageDestinationMobile})`;
		}
	}, [windowWidth]);

	return (
		<main id='destination' className='container-md'>
			<h1 className='main-heading text-uppercase letter-spacing-1 ff-secondary fw-400'>
				<span className='fw-700'>01</span> Pick Your Destination
			</h1>
			<div className='grid-container'>
				<div className='planet-pic'>
					<img src={destinations[currentPlanetIndex].images.png} alt='' />
				</div>
				<div className='planet-info'>
					<nav className='flex'>
						<ul className='navbar underline-indicators flex text-secondary'>
							<li className={currentPlanetIndex === 0 ? 'active' : ''}>
								<p
									className='text-uppercase letter-spacing-2 ff-secondary'
									onClick={() => setCurrentPlanetIndex(0)}>
									Moon
								</p>
							</li>
							<li className={currentPlanetIndex === 1 ? 'active' : ''}>
								<p
									className='text-uppercase letter-spacing-2 ff-secondary'
									onClick={() => setCurrentPlanetIndex(1)}>
									Mars
								</p>
							</li>
							<li className={currentPlanetIndex === 2 ? 'active' : ''}>
								<p
									className='text-uppercase letter-spacing-2 ff-secondary'
									onClick={() => setCurrentPlanetIndex(2)}>
									Europa
								</p>
							</li>
							<li className={currentPlanetIndex === 3 ? 'active' : ''}>
								<p
									className='text-uppercase letter-spacing-2 ff-secondary'
									onClick={() => setCurrentPlanetIndex(3)}>
									Titan
								</p>
							</li>
						</ul>
					</nav>
					<h1 className='planet-name text-uppercase ff-primary fw-400'>
						{destinations[currentPlanetIndex].name}
					</h1>
					<p className='planet-description fw-400 ff-accent text-secondary'>
						{destinations[currentPlanetIndex].description}
					</p>
					<div className='planet-stats flex'>
						<div>
							<p className='text-uppercase letter-spacing-3 text-secondary ff-secondary fw-400'>
								AVG. Distance
							</p>
							<p className='text-uppercase ff-accent fw-400'>
								{destinations[currentPlanetIndex].distance}
							</p>
						</div>
						<div>
							<p className='text-uppercase letter-spacing-3 text-secondary ff-secondary fw-400'>
								EST. TRAVEL TIME
							</p>
							<p className='text-uppercase ff-accent fw-400'>
								{destinations[currentPlanetIndex].travel}
							</p>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}

export default Destination;
