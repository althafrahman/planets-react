import logo from './logo.svg';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Switch, Route, Link, Redirect, useHistory } from "react-router-dom";
import Favorites from './components/Favorites';
import store from './redux/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/planets" component={HomePage} />
            <Route exact path="/" component={HomePage} />
            <Route exact path="/favorites" component={Favorites} />
          </Switch>

        </Router>

      </div>
    </Provider>
  );
}

export default App;
