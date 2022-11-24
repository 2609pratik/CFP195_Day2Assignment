import './App.css';
import PayrollForm from './components/payroll_form/PayrollForm';
import Header from './components/payroll_form/Header';
import {BrowserRouter as Router, Route , Switch} from 'react-router-dom'
import Home from './components/home/Home';


function App() {
  return (
    <>
    <Header/>
    <Router>
        <Switch>
          <Route path="/payroll-form"><PayrollForm /></Route>
          <Route path="/home"><Home /></Route>
        </Switch>
      </Router>
    </>
  );
}
export default App;