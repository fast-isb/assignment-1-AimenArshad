
import { Table } from "@nextui-org/react";
import { useEffect } from 'react';
import { useState } from 'react';
import Axios from 'axios';

function Announcements() {
  const [Annoucement,setAnnoucement]=useState([]);
  useEffect(()=>{
    (async ()=>{

      Axios.get('http://localhost:5000/api/Annoucement/getAll/').then((response)=> {
        setAnnoucement(response.data);
        });

    })();

  },[]);

  return (


    <div>

    {(typeof Annoucement[0]==='undefined')? (<p>  Loading... </p>): (

      <div>
    <Table
      aria-label="Example table with static content"
      css={{
        height: "auto",
        minWidth: "100%",
      }}
    >
      <Table.Header>
      

        <Table.Column>ID</Table.Column>
        <Table.Column>Date and Time</Table.Column>
        <Table.Column>Added by</Table.Column>
        <Table.Column>Description</Table.Column>
      </Table.Header>
      <Table.Body>
      {Annoucement.map((val,key)=>{
              key=val._id
            return (
              <Table.Row key={val._id}>
          <Table.Cell>{val._id}</Table.Cell>
          <Table.Cell>{val.date}</Table.Cell>
          <Table.Cell>{val.addedBy} </Table.Cell>
          <Table.Cell>{val.desc}</Table.Cell>

        </Table.Row>

            )})
          }

        
      </Table.Body>
    </Table>

    </div>
    )}

    </div>
  );
}  
  export default Announcements;
  