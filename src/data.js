import  React, {useState, useEffect  } from 'react';
import BasicTreeData from './Components/TreeTable/TreeTable'
import axios from 'axios';
import Editable from './Components/TreeTable/testingadd';

let trial =[{'child':'number'},{'adult':'varchar'}]
let result=Object.assign({},...trial)

//const combobox = {'child':'number','adult':'varchar'}


 const Treepage =()=>
{
    console.log(result)
    const [combodata,setCombodata] =useState({})
    
   
useEffect(()=>
{
    setCombodata(result)
}

)
       
    
    
    return(
        <Editable/>
       
       // <BasicTreeData /*combodata={combodata}*/ />
        
    )
} 

export default Treepage;