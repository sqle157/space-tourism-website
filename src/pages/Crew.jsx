import { useEffect, useState, useRef } from 'react';
import { useWindowSize } from '../hooks/useWindowSize';
import backgroundImageCrewDesktop from '../assets/crew/background-crew-desktop.jpg';
import backgroundImageCrewTablet from '../assets/crew/background-crew-tablet.jpg';
import backgroundImageCrewMobile from '../assets/crew/background-crew-mobile.jpg';
import { data } from '../data/data';

function Crew() {
	const [currentCrewMemberIndex, setCurrentCrewMemberIndex] = useState(0);
	const windowWidth = useWindowSize();
	const timeoutRef = useRef(null);

	const { crew } = data;
	// console.log(crew);

	// Helper function to reset the timeout
	const resetTimeout = () => {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}
	};

	// Make slider auto slide every 5s
	useEffect(() => {
		resetTimeout();
		timeoutRef.current = setTimeout(() => {
			setCurrentCrewMemberIndex((prevIndex) =>
				prevIndex === crew.length - 1 ? 0 : prevIndex + 1
			);
		}, 5000);

		return () => resetTimeout();
	});

	// Change background image based on current window width
	useEffect(() => {
		if (windowWidth >= 850) {
			document.body.style.backgroundImage = `url(${backgroundImageCrewDesktop})`;
		} else if (windowWidth < 850 && windowWidth > 576) {
			document.body.style.backgroundImage = `url(${backgroundImageCrewTablet})`;
		} else if (windowWidth <= 576) {
			document.body.style.backgroundImage = `url(${backgroundImageCrewMobile})`;
		}
	}, [windowWidth]);

	return (
		<main id='crew' className='container-md'>
			<h1 className='main-heading text-uppercase letter-spacing-1 ff-secondary fw-400'>
				<span className='fw-700'>02</span> Meet your crew
			</h1>
			<div className='grid-container'>
				<div className='crew-info flex'>
					<h1 className='text-uppercase ff-accent fw-400 text-white-50'>
						{crew[currentCrewMemberIndex].role}
						<span className='d-block text-white name'>
							{crew[currentCrewMemberIndex].name}
						</span>
					</h1>
					<p className='ff-accent fw-400 text-secondary description'>
						{crew[currentCrewMemberIndex].bio}
					</p>
					<div className='slide-controller flex'>
						<div
							className={`dot ${currentCrewMemberIndex === 0 ? 'dot--active' : ''}`}
							onClick={() => setCurrentCrewMemberIndex(0)}></div>
						<div
							className={`dot ${currentCrewMemberIndex === 1 ? 'dot--active' : ''}`}
							onClick={() => setCurrentCrewMemberIndex(1)}></div>
						<div
							className={`dot ${currentCrewMemberIndex === 2 ? 'dot--active' : ''}`}
							onClick={() => setCurrentCrewMemberIndex(2)}></div>
						<div
							className={`dot ${currentCrewMemberIndex === 3 ? 'dot--active' : ''}`}
							onClick={() => setCurrentCrewMemberIndex(3)}></div>
					</div>
				</div>
				<div className='crew-pic'>
					<img src={crew[currentCrewMemberIndex].images.png} alt='' />
				</div>
			</div>
		</main>
	);
}
export default Crew;
