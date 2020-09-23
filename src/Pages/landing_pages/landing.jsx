import React , {Component} from 'react';
import axios from 'axios';
import '../landing_pages/landing.css';
class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:[], url: 'http://172.16.1.102/api/v1/getdata'
        }
}
componentDidMount(){
    axios({
        method: 'post',
        url:this.state.url,
        timeout: 4000,   
        data:{
            fun_name:"FU_RES_YEAR",
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
     <p>{d.ID}</p>
     <p>{d.NAME}</p>
     <p>{d.CURRENT_FLAG}</p>
      </div>
    </div>
  </div>
  </div>

     )
 })
 }
</div>
  </div>
    )
}
}

export default Landing ;