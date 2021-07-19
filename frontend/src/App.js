import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from "./pages/Login/Login"
import CreateIssue from "./pages/CreateIssue/CreateIssue"
import Map from './components/Map/Map';
import Homepage from './pages/Homepage/Homepage';
import Profile from './pages/Profile/Profile';



function App() {
  return (
    <BrowserRouter>      
      <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route exact path="/createissue" component={CreateIssue}/>
        <Route exact path="/map" component={Map}/>
        <Route exact path="/login" component={Login}/>
        {/*<Route exact path="/profile/:id" component={ProfileReadOnly}/>*/}         
        <Route exact path="/profile" component={Profile}/>      
      </Switch>
    </BrowserRouter>
  );
}

export default App;
