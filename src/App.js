import React , {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'fontsource-roboto';
import './App.css';
import {Switch , Route } from 'react-router-dom';
import LoginStepOnePage from "./Pages/LoginStepOne/LoginStepOnePage";
import LoginStepTwoPage from "./Pages/LoginStepTwo/LoginStepTwoPage";
import { withRouter } from "react-router-dom";
import HomePage from './Pages/Home/HomePage';
import CRUDGrid from './Components/CRUDGrid/CRUDGrid';
import Project from './Components/Projects/Projects'
import Screens from './Pages/screens/screens'
import ComponentTypes from './Pages/ComponentTypes/ComponentTypes';
import ModulePage from './Pages/ModulesPage/ModulePage';
import ComponentPage from "./Pages/ComponentPage/ComponentPage";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id : sessionStorage.getItem("USER_ID")

    }
    if(this.state.user_id) {
      this.props.history.push('/')
    }else {
      this.props.history.push('/login')
    }
  }

  render() {
    return (
        <div >
          <Switch>
            <Route  path='/components' component={() =><ComponentPage/>} />
            <Route  path='/screens' component={() => <Screens/>} />
            <Route  path='/login' component={() => <LoginStepOnePage/>} />
            <Route  path='/loginpass' component={() => <LoginStepTwoPage/>} />
            <Route exact path='/CRUDGrid' Component={()=><CRUDGrid/>}/>
            <Route exact path='/' component={() => <HomePage />} />
            <Route exact path='/Pagefor' component={() =><ComponentTypes/>} />
            <Route exact path='/module' component={() => <ModulePage/> }/>
            <Route exact path='/Projects' component={() => <Project/> }/>

            
          </Switch>
        </div>
    );
  }
}

export default withRouter(App);
