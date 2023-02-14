import { useState, useEffect } from "react";
import { Form, Col, Input, Row, Checkbox } from "rsuite";
import { useDispatch, useSelector } from "react-redux";
import { changeTemp } from "../../../store/slice";

function Employment(props) {
  const editData = useSelector((state) => state["resume"].editData);

  const date = new Date();
  const today = `${date.getFullYear()}-${
    JSON.stringify(date.getMonth() + 1).length == 2
      ? date.getMonth() + 1
      : "0" + JSON.stringify(date.getMonth() + 1)
  }-${
    JSON.stringify(date.getDate()).length == 2
      ? date.getDate()
      : "0" + JSON.stringify(date.getDate())
  }`;

  const dispatch = useDispatch();
  useEffect(() => {
    let data = {
      company: company,
      position: position,
      jDate: jDate,
      eDate: eDate,
      working: working,
      desc: desc,
    };
    /*
    props.disable(!check());
    props.dataUpdate(data);
    */
    dispatch(changeTemp({ data: data, disabled: !check() }));
  });

  const [company, setCompany] = useState(
    editData.company ? editData.company : ""
  );
  const [position, setPosition] = useState(
    editData.position ? editData.position : ""
  );
  const [jDate, setJDate] = useState(editData.jDate ? editData.jDate : "");
  const [eDate, setEDate] = useState(editData.eDate ? editData.eDate : "");
  const [working, setWorking] = useState(
    editData.working ? editData.working : false
  );
  const [desc, setDesc] = useState(editData.desc ? editData.desc : "");

  const check = () => {
    return Boolean(
      company.length &&
        position.length &&
        jDate.length &&
        (working || (eDate.length ? eDate > jDate : false)) &&
        today >= jDate
    );
  };
  return (
    <Form.Group style={{ width: "99%" }}>
      <Row>
        <Col xs={24} sm={12}>
          <Form.ControlLabel>
            Entreprise <span style={{ color: "#ff6b6b" }}>*</span>
          </Form.ControlLabel>
          <Input value={company} onChange={(e) => setCompany(e)} />
        </Col>
        <Col xs={24} sm={12}>
          <Form.ControlLabel>
            Position <span style={{ color: "#ff6b6b" }}>*</span>
          </Form.ControlLabel>
          <Input value={position} onChange={(e) => setPosition(e)} />
        </Col>
      </Row>
      <br />

      <Row>
        <Col xs={24}>
          <Form.ControlLabel>
            La date de jointeur <span style={{ color: "#ff6b6b" }}>*</span>
          </Form.ControlLabel>
          <Input
            max={today}
            value={jDate}
            onChange={(e) => setJDate(e)}
            type="date"
          />
          {today < jDate ? (
            <Form.HelpText style={{ color: "#ff6b6b" }}>
              Huh? la date du travail!!
            </Form.HelpText>
          ) : (
            ""
          )}
        </Col>
        <Col>
          <Checkbox
            defaultChecked={working}
            value={working}
            onChange={(e, v) => setWorking(v)}
          >
         Vous travaillez actuellement ?          </Checkbox>
        </Col>
        <Col xs={24}>
          <Form.ControlLabel>
            Date du fin <span style={{ color: "#ff6b6b" }}>*</span>
          </Form.ControlLabel>
          <Input
            value={eDate}
            max={today}
            disabled={working}
            onChange={(e) => setEDate(e)}
            type="date"
          />
          {(eDate.length ? eDate < jDate : false) && !working ? (
            <Form.HelpText style={{ color: "#ff6b6b" }}>
              Comment pourriez-vous quitter avant de rejoindre?
            </Form.HelpText>
          ) : (
            ""
          )}
        </Col>
      </Row>
      <br />
      <Row>
        <Col xs={24}>
          <Form.ControlLabel>
            Description ({desc.length ? desc.split(" ").length : 0} / 40)
          </Form.ControlLabel>
          <textarea
            rows={5}
            className="txt rs-input"
            value={desc}
            onChange={(e) => {
              if (e.target.value.split(" ").length > 40) {
                alert("Word limit crossed");
              } else {
                setDesc(e.target.value);
              }
            }}
          />
        </Col>
      </Row>
      <Form.HelpText>
        <span style={{ color: "#ff6b6b" }}>*</span> remplir les champs obligatoir
      </Form.HelpText>
    </Form.Group>
  );
}

export default Employment;
