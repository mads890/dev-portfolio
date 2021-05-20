import './App.css';
import { Route, Switch, Link } from 'react-router-dom';
import HomePage from '../src/components/HomePage';
import AboutPage from '../src/components/AboutPage';
import Projects from '../src/components/Projects';
import NotFound from '../src/components/NotFound';

function App() {
  return (
    <div className='App'>
      <nav className='app-nav'>
          <ul className='nav-list'>
          <Link to='/' className='nav-link'><li className='nav-item'>Home</li></Link>
          <Link to='/about' className='nav-link'><li className='nav-item'>About</li></Link>
          <Link to='/projects' className='nav-link'><li className='nav-item'>Projects</li></Link>
        </ul>
      </nav>
      <main>
        <Switch>
          <Route
            exact
            path={'/'}
            component={HomePage}
          />
          <Route
            exact
            path={'/about'}
            component={AboutPage}
          />
          <Route
            exact
            path={'/projects'}
            component={Projects}
          />
          <Route component={NotFound} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
