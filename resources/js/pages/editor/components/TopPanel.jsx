import { Code, Search } from "@rsuite/icons";
import { useMediaQuery } from "react-responsive";
import {
  Header,
  Nav,
  Navbar,
  Dropdown,
  Button,
  Input,
  InputGroup,
  IconButton,
} from "rsuite";
import icon from "../assets/images/logo.png";
import pic from "../assets/images/t1.png"; 
import pic1 from "../assets/images/F2.png"; 
import pic2 from "../assets/images/m3.png"; 
import { Link } from "react-router-dom";


function TopPanel(props) {
  const isBigScreen = useMediaQuery({ query: "(min-width: 992px)" });

  return (
    <Header>
      <Navbar appearance="subtle">
        <Navbar.Brand href="">
          <span
            style={{ fontWeight: "bold", fontSize: "large", color: "#3B67F6" }}
          >
            <Link to='/'>
            <img src={icon} width="100" style={{ margin: "0 1rem 0 0" }} />
            </Link>
           
          </span>
        </Navbar.Brand>

        <Nav pullRight={true}>
          {isBigScreen ? (
            <>
              <Nav.Item>
              <img src={pic} alt=""  width="40" />
              <p className='ml-1'>Modèles</p>
              </Nav.Item>
              <Nav.Item>
              <img src={pic1} alt="" width="30" />
              <p className='ml-1  font-semibold' >Information</p>
              </Nav.Item>
              <Nav.Item>
              <img src={pic2} alt="" width="40"  />
              <p className='ml-1'>Télécharger</p>
              </Nav.Item>
             
            </>
          ) : (
            <Nav.Item disabled={true}>
              <IconButton
              icon={<Code />}
                appearance="secondary"
                style={{ fontWeight: "600" }}
                onClick={() =>
                  window.open("https://github.com/soumiya59/cv-builder", "_blank")
                }
              >
                
              </IconButton>
            </Nav.Item>
          )}
        </Nav>
      </Navbar>
    </Header>
  );
}

export default TopPanel;
