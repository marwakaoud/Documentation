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
            <Route  path='/resyear' component={() => <ResYearGird/>} />
            <Route  path='/login' component={() => <LoginStepOnePage/>} />
            <Route  path='/loginpass' component={() => <LoginStepTwoPage/>} />
            <Route exact path='/ResYearsPage' component={() => <ResYearsPage/>} />
            <Route exact path='/' component={() => <HomePage />} />
            
          </Switch>
        </div>
    );
  }
}

export default withRouter(App);
