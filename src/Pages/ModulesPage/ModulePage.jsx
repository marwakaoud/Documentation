import React , {Component} from 'react';
import axios from 'axios';
import NAV from '../../Components/AppBar/AppBar';
import CRUDGrid from '../../Components/CRUDGrid/CRUDGrid';
import { withRouter } from "react-router-dom";



class ModulePage extends Component {
    constructor(props) {
        super(props);
         this.state = {
             url:'http://172.16.1.102:6060/api/v1/getdata',
             data:[],
             columns: [
                 { title: 'Name', field: 'MOD_NAME' },
                 { title: 'Module ID', field: 'MOD_ID', type: 'numeric' },
                 { title: 'Description', field: 'MODULE_DESC' },
                 { title: 'Project ID', field: 'PROJ_ID'  , type:'numeric'},
             ],
             title:'Module'
         }
    }

    componentDidMount(){
        axios({
            method: 'post',
            url:this.state.url,
            data:{
                fun_name:"FU_DOC_MODULES",
                param_name:["P_PROJ_ID"],
                param_value:[this.props.location.state.id]
            }
        })
            .then(response => {
             this.setState({data: response.data.Table})
              console.log(response.data.Table)
    
            })
            .catch(error => console.error('timeout exceeded'))
    }
    render() {
        return (
            <div>
                <div className = "row">
                    <div className="col-12">
                    <NAV/>
                    </div>
                    </div>
                    <div className = "row">
                    <div className="col-12">
                        <CRUDGrid data = {this.state.data} columns = {this.state.columns} title = {this.state.title}/>
                    </div>
                    </div>
            </div>
        );
    }

}

export default withRouter( ModulePage);