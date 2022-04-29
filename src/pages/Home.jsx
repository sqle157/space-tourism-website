import { useEffect } from 'react';
import { useWindowSize } from '../hooks/useWindowSize';
import { Link } from 'react-router-dom';
import backgroundImageHomeDesktop from '../assets/home/background-home-desktop.jpg';
import backgroundImageHomeTablet from '../assets/home/background-home-tablet.jpg';
import backgroundImageHomeMobile from '../assets/home/background-home-mobile.jpg';

function Home() {
	const windowWidth = useWindowSize();

	// Change background image based on current window width
	useEffect(() => {
		if (windowWidth >= 850) {
			document.body.style.backgroundImage = `url(${backgroundImageHomeDesktop})`;
		} else if (windowWidth < 850 && windowWidth > 576) {
			document.body.style.backgroundImage = `url(${backgroundImageHomeTablet})`;
		} else if (windowWidth <= 576) {
			document.body.style.backgroundImage = `url(${backgroundImageHomeMobile})`;
		}
	}, [windowWidth]);

	return (
		<main id='home' className='container-md grid-container'>
			<div className='intro'>
				<h1
					className={`text-uppercase fw-400 ${
						windowWidth <= 375 ? 'letter-spacing-2' : 'letter-spacing-1'
					}`}>
					So, you want to travel to
					<span className='fw-400 d-block text-white'>Space</span>
				</h1>

				<p className='ff-accent'>
					Let's face it; if you want to go to space, you might as well genuinely go to outer
					space and not hover kind of on the edge of it. Well sit back, and relax because we'll
					give you a truly out of this world experience!{' '}
				</p>
			</div>
			<div className='btn-wrapper'>
				<Link to='/destination' className='btn-lg text-uppercase text-primary border-50'>
					Explore
				</Link>
			</div>
		</main>
	);
}
export default Home;
