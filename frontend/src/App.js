//import logo from './logo.svg';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login/Login";
import CreateIssue from "./pages/CreateIssue/CreateIssue";
import Map from "./components/Map/Map";
import Banner from "./components/Banner/Banner";
import Homepage from "./pages/Homepage/Homepage";
import Profile from "./pages/Profile/Profile";
import PageIssueList from "./pages/PageIssueList/pageIssueList";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from "./pages/Login/Login"
import CreateIssue from "./pages/CreateIssue/CreateIssue"
import Map from './components/Map/Map';

import Homepage from './pages/Homepage/Homepage';
import Profile from './pages/Profile/Profile';
import EditProfile1 from'./pages/Profile/EditProfile1';
import EditProfile2 from'./pages/Profile/EditProfile2';
import EditProfile3 from'./pages/Profile/EditProfile3';
import EditProfile4 from'./pages/Profile/EditProfile4';
import EditProfile5 from'./pages/Profile/EditProfile5';
import EditProfile6 from'./pages/Profile/EditProfile6';
import LastReport1 from'./pages/Profile/LastReport1';
// import LastReport2 from'./pages/Profile/LastReport2';






function App() {
  return (
    <BrowserRouter>      
      <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route exact path="/createissue" component={CreateIssue}/>
        <Route exact path="/map" component={Map}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/profile" component={Profile}/>
        <Route exact path="/editprofile1" component={EditProfile1}/>
        <Route exact path="/editprofile2" component={EditProfile2}/>
        <Route exact path="/editprofile3" component={EditProfile3}/>
        <Route exact path="/editprofile4" component={EditProfile4}/>
        <Route exact path="/editprofile5" component={EditProfile5}/>
        <Route exact path="/editprofile6" component={EditProfile6}/>
        <Route exact path="/lastreport1" component={LastReport1}/>
        {/* <Route exact path="/lastreport2" component={LastReport2}/> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
