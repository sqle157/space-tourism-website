import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import AnimatedRoutes from './components/AnimatedRoutes';

function App() {
	return (
		<Router>
			<Navbar />
			<AnimatedRoutes />
		</Router>
	);
}

export default App;
