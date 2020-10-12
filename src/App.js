import React , {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'fontsource-roboto';
import './App.css';
import {Switch , Route } from 'react-router-dom';
import LoginStepOnePage from "./Pages/LoginStepOne/LoginStepOnePage";
import LoginStepTwoPage from "./Pages/LoginStepTwo/LoginStepTwoPage";
import { withRouter } from "react-router-dom";
import ResYearGird from "./Pages/ResYears/ResYearGird";
import ResYearsPage from './Pages/ResYears/ResYearsPage';
import HomePage from './Pages/Home/HomePage';
import CRUDGrid from './Components/CRUDGrid/CRUDGrid';
import Pagefor from './Components/pagefor/pagefor';
import ComponentTypes from './Pages/ComponentTypes/ComponentTypes';
import ModulePage from './Pages/ModulesPage/ModulePage';
import MediaCard from './Components/Card/Card'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id : sessionStorage.getItem("USER_ID")

    }
    this.props.history.push('/media')

  }

  render() {
    return (
        <div >
          <Switch>
            <Route  path='/resyear' component={() => <ResYearGird/>} />
            <Route  path='/login' component={() => <LoginStepOnePage/>} />
            <Route  path='/loginpass' component={() => <LoginStepTwoPage/>} />
            <Route exact path='/CRUDGrid' Component={()=><CRUDGrid/>}/>
            <Route exact path='/ResYearsPage' component={() => <ResYearsPage/>} />
            <Route exact path='/' component={() => <HomePage />} />
            <Route exact path='/Pagefor' component={() =><ComponentTypes/>} />
            <Route exact path='/module' component={() => <ModulePage/> }/>
            <Route exact path='/media' component={() => <MediaCard/> }/>

          
            
          </Switch>
        </div>
    );
  }
}

export default withRouter(App);
