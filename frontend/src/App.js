//import logo from './logo.svg';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from "./pages/Login/Login"
import CreateIssue from "./pages/CreateIssue/CreateIssue"


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/createissue" component={CreateIssue}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
