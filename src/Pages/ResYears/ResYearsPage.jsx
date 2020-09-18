import React , {Component} from 'react';
import axios from 'axios';
import CRUDGrid from "../../Components/CRUDGrid/CRUDGrid";


class ResYearsPage extends Component {
    constructor(props) {
        super(props);
         this.state = {
             url:'url:"http://172.16.1.102/api/v1/getdata"',
             data:[],
             columns: [
                 { title: 'Name', field: 'NAME' },
                 { title: 'id', field: 'ID', type: 'numeric' },
                 { title: 'Flag', field: 'CURRENT_FLAG' },
             ],
             title:'RES YEAR'
         }
    }
componentDidMount(){
    axios({
        method: 'post',
        url:this.state.url,
        data:{
            fun_name:"FU_RES_YEAR",
            param_name:[],
            param_value:[]
        }
    })
        .then(response => {
         this.setState({data: response.data.Table[0]})
          console.log(response.data.Table[0])

        })
        .catch(error => console.error('timeout exceeded'))
}
    render() {
        return (
            <div>
          <CRUDGrid title={this.state.title} columns={this.state.columns} data={this.state.data}/>
            </div>
        );
    }

}

export default ResYearsPage;