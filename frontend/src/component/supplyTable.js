import React, { useState,ussEffect } from 'react';
import MaterialTable from 'material-table';
import {tableIcons} from '../common/constant'
import  { deleteSupply } from '../axios'

export default function SupplyTable(props) {

    const  columns =  [
        { title: '需求標題', field: 'title'},
        { title: '報酬金額', field: 'price', type: 'numeric' },
        { title: '刊登時間', field: 'postDate', type:"datetime"},
        { title: '截止時間', field: 'deadline', type:"datetime"},
    ];

    return (
        <div className = "materialTable">
          <br/><br/>
            {     
                <MaterialTable
                    title={`${localStorage.getItem('name')}接下的需求單`}
                    columns={columns}
                    data={props.postdata}
                    icons={tableIcons}
                    editable={{
                        // onRowAdd: (newData) => {
        
                            
                        // },
                        // onRowUpdate: (newData, oldData) =>{
                        
                        // },
                        onRowDelete: async (oldData) =>{
                     
                            let res = await deleteSupply( { deleteSupplyForm : { demandId: oldData._id, NTUID: localStorage.getItem('NTUID')}} );
                            if(res.success){
                                props.refreshTable();
                            }
                            alert(res.msg);
                        },
                    }}
                />
            }

        </div>
    )
}

