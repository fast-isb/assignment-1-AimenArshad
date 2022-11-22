import { Navbar, Link, Text, Avatar, Dropdown } from "@nextui-org/react";
import { Layout } from "./layout.jsx";
import { AcmeLogo } from "./acmelogo.jsx";


export default function  NavBar(){
  return (
    <Layout>
      <Navbar data-testid = "navbartest" isBordered variant="sticky">
        <Navbar.Toggle showIn="xs" />
        <Navbar.Brand
          css={{
            "@xs": {
              w: "12%",
            },
          }}
        >
          <AcmeLogo />
          <Text b color="inherit" hideIn="xs">
            HSM
          </Text>
        </Navbar.Brand>
        <Navbar.Content
          enableCursorHighlight
          activeColor="secondary"
          hideIn="xs"
          variant="highlight-rounded"
        >
          <Navbar.Link href="#/profile">My Profile </Navbar.Link>

          <Navbar.Link href="#/updateProfile">Update Profile</Navbar.Link>
          <Navbar.Link href="#/announcements">Announcements</Navbar.Link>
          <Navbar.Link>Customer Service</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content
          css={{
            "@xs": {
              w: "12%",
              jc: "flex-end",
            },
          }}
        >
          <Dropdown placement="bottom-right">
            <Navbar.Item>
              <Dropdown.Trigger>
                <Avatar
                  bordered
                  as="button"
                  color="secondary"
                  size="md"
                  src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                />
              </Dropdown.Trigger>
            </Navbar.Item>
            <Dropdown.Menu color="secondary">
               <Dropdown.Item >Profile</Dropdown.Item>
               <Dropdown.Item withDivider color="error"> Log Out </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Content>
      </Navbar>
    </Layout>
  );
}