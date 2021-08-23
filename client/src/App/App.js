import { BrowserRouter as Router, Route } from 'react-router-dom';

// Pages
import Home from '../pages/Home/Home';
import About from '../pages/About/About';

// Styles
import './styles/App.css';

function App() {
  return (
    <Router>
      <Route path='/' component={Home} exact />
      <Route path='/about' component={About} exact />
    </Router>
  );
}

export default App;
