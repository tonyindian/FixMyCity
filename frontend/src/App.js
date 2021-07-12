//import logo from './logo.svg';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from "./pages/Login/Login"
import CreateIssue from "./pages/CreateIssue/CreateIssue"
import Map from './components/Map/Map';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/createissue" component={CreateIssue}/>
        <Route exact path="/map" component={Map}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
