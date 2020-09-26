import React , {Component} from 'react';
import axios from 'axios';
import '../landing_pages/landing.css';
import { usePagination } from '@material-ui/lab/Pagination';
class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:[], url: 'http://172.16.1.102:6060/api/v1/getdata'
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
  // alert(id);
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

<div className="cards-container">
 
 {this.state.data.map((d) => {
     return(
         <div>
               <div className="card-container">
    <div className="card">
      <div className="front">
<img src="https://api.adorable.io/avatars/150/1"/>
      </div>
      <div className="back">
   
     <p>{d.APP_NAME}</p>
     
     <button onClick={ () =>  this.handleClick(d.APP_DESC)}>DESC</button>

      </div>
      
    </div>
  </div>
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