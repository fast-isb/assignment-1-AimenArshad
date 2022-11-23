import { Card, Grid, Text, Button,useTheme, Row, Spacer} from "@nextui-org/react";
import Axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export default function Profile() {

    const [resident,setResident] =useState(0);

    useEffect(()=>{
      (async ()=>{
        Axios.get('http://localhost:5000/api/Resident/get/3600000000').then((response)=> {
          setResident(response.data);
          });})();},[]);

  return (

    <div data-testid="testprofile">
    {(typeof resident.fname==='undefined' )? (<p>Loading Data...</p>):(
    <div>
     <h1>hello</h1>
          <Card css={{height:"auto",width:"auto",alignItems:"center"}}>
          <Card.Header>
            <h1>Pofile Details</h1>
          </Card.Header>
          <Card.Divider />
          <Card.Body >
           <input type="text" id="fname" placeholder={resident.fname} disabled></input>
           <Spacer y={0.5} />
           <input type="text" id="lname" placeholder={resident.lname} disabled></input>
           <Spacer y={0.5} />
           <input type="text" id="cnic" placeholder={resident.cnic} disabled></input>
           <Spacer y={0.5} />
           <input type="text" id="email" placeholder={resident.email} disabled ></input>
           <Spacer y={0.5} />
           <input type="text" id="age" placeholder={resident.age} disabled></input>
           <Spacer y={0.5} />
          
          </Card.Body>
          <Card.Divider />
          <Card.Footer>
            <Row justify="flex-end">
            <Button auto color="secondary" rounded flat>
              Update
            </Button>
            </Row>
          </Card.Footer>
        </Card> 
      </div>

      )}
      </div>
  );
}
