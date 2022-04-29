import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useWindowSize } from '../hooks/useWindowSize';
import logo from '../assets/shared/logo.svg';

function Navbar() {
	const [currentPath, setCurrentPath] = useState('/');
	const location = useLocation();
	const navigate = useNavigate();
	const windowWidth = useWindowSize();

	useEffect(() => {
		// Close the menu when navigates to different page
		// OR when the window is resized
		if (windowWidth <= 576) {
			const mobileNavbar = document.querySelector('.navbar');
			const menuBtn = document.querySelector('.menu-btn');
			reset(menuBtn, mobileNavbar);
		}
		setCurrentPath(location.pathname);
	}, [location.pathname, windowWidth]);

	// Reset mobile menu & navbar attribute
	const reset = (menu, navbar) => {
		menu.setAttribute('aria-expanded', 'false');
		navbar.dataset.visible = 'false';
	};

	// Handle open and close mobile menu
	const handleMenu = (e) => {
		const currentAttr = e.target.getAttribute('aria-expanded');
		const mobileNavbar = document.querySelector('.navbar');

		if (currentAttr === 'false') {
			e.target.setAttribute('aria-expanded', 'true');
			mobileNavbar.dataset.visible = 'true';
		} else {
			e.target.setAttribute('aria-expanded', 'false');
			mobileNavbar.dataset.visible = 'false';
		}
	};

	return (
		<div className='container-lg'>
			<header className='header text-white'>
				<img className='logo' src={logo} alt='' onClick={() => navigate('/')} />
				<button
					onClick={handleMenu}
					aria-expanded='false'
					type='button'
					className='menu-btn'></button>
				<nav>
					<ul className='navbar underline-indicators flex' data-visible='false'>
						<li className={currentPath === '/' ? 'active' : ''}>
							<Link to='/' className='text-uppercase letter-spacing-2 ff-secondary'>
								<span className='fw-700'>00</span>Home
							</Link>
						</li>
						<li className={currentPath === '/destination' ? 'active' : ''}>
							<Link to='/destination' className='text-uppercase letter-spacing-2 ff-secondary'>
								<span className='fw-700'>01</span>Destination
							</Link>
						</li>
						<li className={currentPath === '/crew' ? 'active' : ''}>
							<Link to='/crew' className='text-uppercase letter-spacing-2 ff-secondary'>
								<span className='fw-700'>02</span>Crew
							</Link>
						</li>
						<li className={currentPath === '/technology' ? 'active' : ''}>
							<Link to='/technology' className='text-uppercase letter-spacing-2 ff-secondary'>
								<span className='fw-700'>03</span>Technology
							</Link>
						</li>
					</ul>
				</nav>
			</header>
		</div>
	);
}
export default Navbar;
