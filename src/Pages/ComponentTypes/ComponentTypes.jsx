import React from 'react';
import Dashboard from "../../Components/Dashboard/Dashboard";
import Pagefor from '../../Components/Projects/Projects';
import MenuAppBar from '../../Components/AppBar/AppBar'

const ComponentTypes = props =>  {
    return (<div>
     <MenuAppBar title='Projects'/>
     <br/>
     <br/>
       <Pagefor/>
    
    </div>)
}

export default ComponentTypes;