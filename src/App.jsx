import React from 'react';
import
{
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import LogIn from './components/Login';
import Form from './components/Form';
import ListPreview from './components/List/List-preview';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/login" component={LogIn} />
          <Route path="/form" component={Form} />
          <Route path="/list-preview" component={ListPreview} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
