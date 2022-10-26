import { Card, Grid, Text, Button,useTheme, Row, Spacer} from "@nextui-org/react";

export default function Profile() {
  return (
    <div>
     <h1>hello</h1>
          <Card css={{height:"auto",width:"auto",alignItems:"center"}}>
          <Card.Header>
            <h1>Pofile Details</h1>
          </Card.Header>
          <Card.Divider />
          <Card.Body >
           <input type="text" id="fname" placeholder="First Name" disabled></input>
           <Spacer y={0.5} />
           <input type="text" id="lname" placeholder="Last Name" disabled></input>
           <Spacer y={0.5} />
           <input type="text" id="cnic" placeholder="CNIC" disabled></input>
           <Spacer y={0.5} />
           <input type="text" id="email" placeholder="email" disabled ></input>
           <Spacer y={0.5} />
           <input type="text" id="age" placeholder="age" disabled></input>
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
  );
}
