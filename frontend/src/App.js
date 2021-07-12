//import logo from './logo.svg';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from "./pages/Login/Login"
import CreateIssue from "./pages/CreateIssue/CreateIssue"
import Map from './components/Map/Map';
import Banner from './components/Banner/Banner';
import { Spaceholder } from './components/navbar';
import Homepage from './pages/Homepage/Homepage';


function App() {
  return (
    <BrowserRouter>
    <Banner/>
    <Spaceholder/>
      <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route exact path="/createissue" component={CreateIssue}/>
        <Route exact path="/map" component={Map}/>
        <Route exact path="/login" component={Login}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
