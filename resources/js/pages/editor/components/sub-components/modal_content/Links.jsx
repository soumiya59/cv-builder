import { useState, useEffect } from "react";
import { Col, Form, Input, Row, SelectPicker } from "rsuite";
import { useDispatch, useSelector } from "react-redux";
import { changeTemp } from "../../../store/slice";
import DatalistInput from "react-datalist-input";
import "react-datalist-input/dist/styles.css";

function Links(props) {
  const editData = useSelector((state) => state["resume"].editData);

  const dispatch = useDispatch();
  useEffect(() => {
    let data = {
      site: site,
      link: link,
    };
    dispatch(changeTemp({ data: data, disabled: !check() }));
  });
  const [site, setSite] = useState(editData.site ? editData.site : "");
  const [link, setLink] = useState(editData.link ? editData.link : "");

  const check = () => {
    return Boolean(site.length && link.length);
  };
  return (
    <Form.Group>
      <Row style={{ width: "99%", height: "6rem" }}>
        <Col xs={24} sm={12}>
          <Form.ControlLabel>Site</Form.ControlLabel>
          <DatalistInput
            placeholder="Site"
            value={site}
            style={{ marginTop: "0.5rem" }}
            onSelect={(item) => setSite(item.value)}
            onChange={(item) => setSite(item.target.value)}
            items={[
              { id: "Github", value: "Github" },
              { id: "LinkedIn", value: "LinkedIn" },
              { id: "Website", value: "Website" },
            ]}
          />
        </Col>
        <Col xs={24} sm={12}>
          <Form.ControlLabel>Link</Form.ControlLabel>
          <Input
            placeholder="https://github.com/sample"
            value={link}
            onChange={(e) => setLink(e)}
          />
        </Col>
      </Row>
      <br />
      <Form.HelpText>remplir les champs obligatoir</Form.HelpText>
    </Form.Group>
  );
}

export default Links;
