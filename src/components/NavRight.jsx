import { BellFill, Search } from "react-bootstrap-icons";
import Avatar from '../media/avatar.png';
import Nav from "react-bootstrap/Nav";


function NavActions() {
  return (
    <Nav className="d-flex align-items-center"> 
      <Nav.Item>
        <Search color="white" size="1rem" className="nav-icon" />
      </Nav.Item>
      <Nav.Item>
        <span className="nav-icon">KIDS</span> 
      </Nav.Item>
      <Nav.Item>
        <BellFill color="white" size="1rem" className="nav-icon" />
      </Nav.Item>
      <img src={Avatar} alt="avatar" className="nav-avatar" />
    </Nav>
  );
}

export default NavActions;
