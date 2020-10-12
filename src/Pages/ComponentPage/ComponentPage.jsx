import React , {Component} from 'react';
import axios from 'axios';
import { withRouter } from "react-router-dom";
import MenuAppBar from '../../Components/AppBar/AppBar';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import ScreenComponentGird from "../../Components/SCREENCOMPONENTGird/ScreenComponentGird";
import ScreenGird from "../../Components/ScreenGird/ScreenGird";


class ComponentPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url:'http://172.16.1.102:6060/api/v1/getdata',
            data:[],
            value : null ,
            inputValue : '',
            SCREEN_ID : this.props.location.state.id ,
           dataTable : [],
            columns: [
                { title: 'COMP_NAME', field: 'COMP_NAME' },
                { title: 'COMP_DESC', field: 'COMP_DESC' },

            ],
            title:'Component Types'

        }
    }
componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.state.value != null) {
        console.log(this.state.value.COMP_TYPE_ID);
        console.log(this.state.SCREEN_ID);
        axios({
            method: 'post',
            url:this.state.url,
            data:{
                fun_name:"FU_DOC_SCREEN_COMPONENT",
                param_name:["P_COMP_TYPE_ID","P_SCREEN_ID"],
                param_value:[this.state.value.COMP_TYPE_ID , this.state.SCREEN_ID]
            }
        })
            .then(response => {
                this.setState({dataTable: response.data.Table})
                console.log(response.data.Table)

            })
            .catch(error => console.error('timeout exceeded'))
    }


}

    componentDidMount(){
        axios({
            method: 'post',
            url:this.state.url,
            data:{
                fun_name:"FU_DOC_COMPONENT_TYPES",
                param_name:[],
                param_value:[]
            }
        })
            .then(response => {
                this.setState({data: response.data.Table})
                console.log(response.data.Table)

            })
            .catch(error => console.error('timeout exceeded'))
    }

    RenderGird = () => {
       return (
          <div></div>
       )
      }


    render() {
        return (
            <div>
                <div className = "row">
                    <div className="col-12">
                        <MenuAppBar title='Components'/>
                        <br/>
                        <br/>
                    </div>
                </div>
                <div className = "row">
                    <div className="col-12">
                        <Autocomplete
                            value={this.state.data[0]}
                            onChange={(event, newValue) => {
                                this.setState({value: newValue})
                                console.log(this.state.value)
                            }}
                            inputValue={this.state.inputValue}
                            onInputChange={(event, newInputValue) => {
                                this.setState({inputValue:newInputValue})
                                console.log(this.state.inputValue)
                            }}
                            id="controllable-states-demo"
                            options={this.state.data}
                            getOptionLabel={(option) => option.COMP_TYPE_NAME}
                            style={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label='Choose Component Type' variant="outlined" />}
                        />
                    </div>
                </div>
                <div>
                </div>
                <div>
                    <div>
                        <ScreenComponentGird data = {this.state.dataTable} columns = {this.state.columns} title = {this.state.title} mod_id = {this.state.MOD_ID}/>
                    </div>
                </div>
            </div>
        );
    }

}

export default withRouter( ComponentPage);