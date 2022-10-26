import { Card, Grid, Text, Button,useTheme, Row, Spacer} from "@nextui-org/react";

export default function UpdateProfile() {
  return (
    <div>
     <h1>hello</h1>
          <Card css={{height:"auto",width:"auto",alignItems:"center"}}>
          <Card.Header>
            <h1>Modify Your Profile</h1>
          </Card.Header>
          <Card.Divider />
          <Card.Body >
           <input type="text" id="fname" placeholder="First Name"></input>
           <Spacer y={0.5} />
           <input type="text" id="lname" placeholder="Last Name"></input>
           <Spacer y={0.5} />
           <input type="text" id="cnic" placeholder="CNIC" disabled></input>
           <Spacer y={0.5} />
           <input type="text" id="email" placeholder="email"></input>
           <Spacer y={0.5} />
           <input type="text" id="age" placeholder="age"></input>
          </Card.Body>
          <Card.Divider />
          <Card.Footer>
            <Row justify="flex-end">
            <Button auto color="secondary" rounded flat>
              Save
            </Button>
            </Row>
          </Card.Footer>
        </Card> 
      </div>
  );
}
