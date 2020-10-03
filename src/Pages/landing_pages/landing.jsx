import React , {Component} from 'react';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import axios from 'axios';
import '../landing_pages/landing.css';
import AddModal from '../../Components/AddModal/AddModel';
import MediaCard from '../../Components/CardDocument/CardDocument';

class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:[], url: 'http://172.16.1.102:6060/api/v1/getdata' , columns: [
              { title: 'Name', field: 'APP_NAME' },
              { title: 'id', field: 'APP_ID', type: 'numeric' },
              { title: 'DESC', field: 'APP_DESC' },
          ],
          title:'Table'
        }
}

componentDidMount(){
axios({
        method: 'POST',
        url:this.state.url,
        data:{
            fun_name:"FU_DOC_APPLICATIONS",
            param_name:[],
            param_value:[],
        }
      })
      .then(response => {
             console.log(response.data.Table)    
         this.setState({data :response.data.Table })
        })
      .catch(error => console.error('timeout exceeded'))
}
handleClick =(id) =>{
  const all_data = this.state.data;
 const single_data = all_data.find(d => d.APP_DESC === id);
 const par = document.getElementById("1");
 const par_container = document.getElementsByClassName("zeinab");
 par_container[0].style.display ="block"
 par.textContent = single_data.APP_DESC
 
 
}

render () {
    return (

      
        <div>
         <AddModal/>

<div className="cards-container">
 
 {this.state.data.map((d) => {
   return (
          <div key={d.APP_ID}>
            <MediaCard appName = {d.APP_NAME} appDesc= {d.APP_DESC}/>
            </div>
    )
 })
 }
</div>

<div className="zeinab">
  <p id="1">
    
  </p>

</div>

  </div>
    )
}
}

export default Landing ;