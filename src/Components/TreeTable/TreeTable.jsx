import  React, {useState, useEffect } from 'react';
 import MaterialTable from 'material-table';
 import {combodata} from '../../data';
import HighlightOffTwoToneIcon from '@material-ui/icons/HighlightOffTwoTone';


const BasicTreeData=(props)=>
{
 // const { useState } = React;
  
  const [combo]=useState( {'child':'number','adult':'varchar'})
 //const combo=props.combodata;
 const [selectedRow, setSelectedRow] = useState({"id":null,"parentId":null});
 const [hidden, sethidden]=useState(true)
  let axiosid =7

  const [data, setData] = useState([
    
        {
          id: 1,
          name: 'a',
          type: 'adult',
        },
        {
          id: 2,
          name: 'b', 
          type: 'adult',
          parentId: 1,
        },
        {
          id: 3,
          name: 'c',
          type: 'child',
        },
        {
          id: 4,
          name: 'd',
          type: 'child',
          parentId: 3,
        },
        {
            id: 5,
            name: 'M',
            type: 'child',
            
          },
          {
            id: 6,
            name: 'd',          
            type: 'child',
            parentId: 5,
          },
  ]);


  const [columns, setColumns] = useState([
    { title: 'name', field: 'name'},
   
    {
        title: 'type',
        field: 'type',
        lookup: combo,
      },
  ]);


  const handleEsc = (event) => 
  {
    if (event.keyCode === 27) {
        setSelectedRow([null,null])
   }
  }

const handleOnrowclick = (event,a)=>
{
  setSelectedRow({id:a.id , parentId:a.parentId })
  sethidden (false)
}
  console.log(data)
  return (
   
    <MaterialTable
      title="Basic Tree Data Preview"
      data={data}
      columns={columns}
      
      editable={{
        onRowAdd: newData =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              //call axios here to get id
              setData([...data, {id:axiosid,...newData,parentId:selectedRow.id}]); 
              axiosid=axiosid+1
              setSelectedRow([null,null])
              resolve();
            }, 1000)
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              const dataUpdate = [...data];
              const index = oldData.tableData.id;
              dataUpdate[index] = newData;
              setData([...dataUpdate]);

              resolve();
            }, 1000)
          }),
        onRowDelete: oldData =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              const dataDelete = [...data];
              const index = oldData.tableData.id;
              dataDelete.splice(index, 1);
              setData([...dataDelete]);
              
              resolve()
            }, 1000)
          }),
      }}
     
    // components={{
    //     Actions: props => (
    //      <HighlightOffTwoToneIcon  color='primary' />
    //     )
    // }}
    actions=
    {[
       rowData =>( 
      {
        icon: HighlightOffTwoToneIcon,
        iconProps: { style: {  backgroundColor: "green" } },
        
        //hidden:(selectedRow.parentId == undefined && clear == false)? false : true,
        hidden:rowData.id == selectedRow.id ? false : true,
        tooltip: 'clear selection',
        onClick: (event, rowData) => {setSelectedRow([null,null])}
     
      })
    ]}
      //handle expand-collapse events
      //onTreeExpandChange={ro}
    parentChildData={(row, rows) => rows.find(a => a.id === row.parentId)}
    
    options=
    {{
        headerStyle: {
          backgroundColor: '#01579b',
          color: '#FFF'
        },
        rowStyle: rowData => ({
            backgroundColor: (selectedRow.id === rowData.id) ? '#EEE' : '#FFF'
          }),
       actionsColumnIndex: -1,
     }}
    onRowClick={ (evt,a)=>{ handleOnrowclick(evt,a)}} 
      
    />
  )
}
export default BasicTreeData;