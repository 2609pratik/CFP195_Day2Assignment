import './App.css';
import PayrollForm from './components/payroll_form/PayrollForm';
import Header from './components/payroll_form/Header';
import {BrowserRouter as Router, Route , Switch} from 'react-router-dom'
import Home from './components/home/Home';

function App() {
  return (
    <div >
      <Header />
      <Router>
        <Switch>
          <Route path="/payroll-form" component={PayrollForm}></Route>
          <Route path="/home" component={Home}></Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;