import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Users from './components/Users';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css'
import ShowDetails from './components/ShowDetails';
import Transfer from './components/Transfer';
import Invoice from './components/Invoice';
import Header from './components/Header';
import "./components/css/home.css"
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <div className="page-container">
      <div className='content-wrap'>
      <Header></Header>
      <Router>
        <Switch>
          <Route exact path='/' component={Home}/> 
          <Route exact path='/ViewAll' component={Users}/>
          <Route exact path='/details' component={ShowDetails}/>
          <Route exact path='/transfer' component={Transfer}/>
          <Route exact path='/invoice' component={Invoice}/>
        </Switch>
      </Router>
      </div>
      <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
