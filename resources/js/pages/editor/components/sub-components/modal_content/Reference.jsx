import { useState, useEffect } from "react";
import { Col, Form, Input, Row } from "rsuite";
import { useDispatch, useSelector } from "react-redux";
import { changeTemp } from "../../../store/slice";

function References(props) {
  const editData = useSelector((state) => state["resume"].editData)

  const dispatch = useDispatch();
  useEffect(() => {
    let data = {
      name: name,
      email: email,
    };
    dispatch(changeTemp({ data: data, disabled: !check() }));
  });
  const check = () => {
    return Boolean(name.length && email.length);
  };
  const [name, setName] = useState(editData.name ? editData.name : "");
  const [email, setEmail] = useState(editData.email ? editData.email : "");

  return (
    <Form.Group>
      <Row style={{ width: "99%" }}>
        <Col xs={24} sm={12}>
          <Form.ControlLabel>Nom</Form.ControlLabel>
          <Input
            placeholder="John Doe"
            value={name}
            onChange={(e) => setName(e)}
          />
        </Col>
        <Col xs={24} sm={12}>
          <Form.ControlLabel>Email</Form.ControlLabel>
          <Input
            placeholder="johnDoe@gmail.com"
            value={email}
            onChange={(e) => setEmail(e)}
          />
        </Col>
      </Row>
      <br />
      <Form.HelpText>
       Tous les champs obligatoir
      </Form.HelpText>
    </Form.Group>
  );
}

export default References;
