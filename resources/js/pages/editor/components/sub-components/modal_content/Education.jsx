import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTemp } from "../../../store/slice";
import { Form, Col, Input, Row, Checkbox, SelectPicker } from "rsuite";
function Education(props) {
  const editData = useSelector((state) => state["resume"].editData);

  const getYearList = (size = 51, startAt = date.getFullYear() - 50) => {
    var years = [...Array(size).keys()].map((i) => i + startAt);
    var data = [];
    years.forEach((year) =>
      data.push({ value: JSON.stringify(year), label: year })
    );
    return data.reverse();
  };
  const monthList = [
    { value: "01", label: "January" },
    { value: "02", label: "February" },
    { value: "03", label: "March" },
    { value: "04", label: "April" },
    { value: "05", label: "May" },
    { value: "06", label: "June" },
    { value: "07", label: "July" },
    { value: "08", label: "August" },
    { value: "09", label: "September" },
    { value: "10", label: "October" },
    { value: "11", label: "November" },
    { value: "12", label: "December" },
  ];

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
      type: type,
      institution: institution,
      course: course,
      jDate: jDate,
      eDate: eDate,
      studying: studying,
    
    };
    dispatch(changeTemp({ data: data, disabled: !check() }));
  });

  const [type, setType] = useState(editData.type ? editData.type : null);

  const [institution, setInstitution] = useState(
    editData.institution ? editData.institution : ""
  );
  const [course, setCourse] = useState(editData.course ? editData.course : "");
  const [jDate, setJDate] = useState(editData.jDate ? editData.jDate : "");
  const [eDate, setEDate] = useState(editData.eDate ? editData.eDate : "");
  const [studying, setStudying] = useState(
    editData.studying ? editData.studying : false
  );
  
  


  const [yearList, setYearList] = useState(getYearList());
  const [jMonth, setJMonth] = useState(
    editData.jDate ? editData.jDate.slice(5, 7) : ""
  );
  const [jYear, setJYear] = useState(
    editData.jDate ? editData.jDate.slice(0, 4) : ""
  );
  const [eMonth, setEMonth] = useState(
    editData.eDate ? editData.eDate.slice(5, 7) : ""
  );
  const [eYear, setEYear] = useState(
    editData.jDate ? editData.jDate.slice(0, 4) : ""
  );

  const check = () => {
    return Boolean(
      institution.length &&
        (type != "ecole" ? course.length : true) &&
        jDate.length
        
        
    );
    //https://stackoverflow.com/a/10050831
  };

  return (
    <Form.Group style={{ width: "99%" }}>
      <Form.ControlLabel>Type</Form.ControlLabel>
      <SelectPicker
        style={{ margin: "0.35rem", marginLeft: "0" }}
        searchable={false}
        block
        data={[
          { value: "college", label: "college" },
        
          { value: "lycee", label: "lycee / University" },
        ]}
        value={type}
        onChange={(e) => {
          setInstitution("");
          setCourse("");
          setJDate("");
          setJMonth("");
          setEMonth("");
          setJYear("");
          setEYear("");
          setEDate("");
          // setStudying(false);
         
          setType(e);
        }}
      />
      <br />
      <div style={{ display: type == null ? "none" : "unset" }}>
        <Row>
          <Col xs={24} sm={type == "ecole" ? 24 : 12}>
            <Form.ControlLabel>Institution</Form.ControlLabel>
            <Input value={institution} onChange={(e) => setInstitution(e)} />
          </Col>
          {type != "ecole" && (
            <Col xs={24} sm={12}>
              <Form.ControlLabel>
                {type == "College" ? "Stream/Course" : "lycee"}
              </Form.ControlLabel>
              <Input value={course} onChange={(e) => setCourse(e)} />
            </Col>
          )}
        </Row>
        <br />

        <Row>
          <Col xs={24} sm={12}>
            <Form.ControlLabel>
              {type != "lycee"
                ? "Debut de " + (type != "College" ? "L'annee" : "Date")
                : "Annee"}
            </Form.ControlLabel>
            {type != "College" ? (
              <SelectPicker
                style={{ margin: "0.35rem", marginLeft: "0" }}
                searchable={false}
                block
                placeholder="Annee"
                data={yearList}
                value={jDate}
                onChange={(e) => setJDate(e)}
              />
            ) : (
              <Row>
                <Col xs={12}>
                  <SelectPicker
                    style={{ margin: "0.35rem", marginLeft: "0" }}
                    searchable={false}
                    block
                    data={monthList}
                    value={jMonth}
                    onChange={(e) => {
                      if (jYear != "") {
                        var date = `${jYear}-${e}-01`;
                        setJDate(date);
                      }
                      setJMonth(e);
                    }}
                    placeholder="Mois"
                  />
                </Col>
                <Col xs={12}>
                  <SelectPicker
                    style={{ margin: "0.35rem", marginLeft: "0" }}
                    searchable={false}
                    block
                    data={yearList}
                    value={jYear}
                    onChange={(e) => {
                      if (jMonth != "") {
                        var date = `${e}-${jMonth}-01`;
                        setJDate(date);
                      }
                      setJYear(e);
                    }}
                    placeholder="Annee"
                  />
                </Col>
              </Row>
            )}
            {today < jDate ? (
              <Form.HelpText style={{ color: "#ff6b6b" }}>
                Huh? le temps que vous travaillez!!
              </Form.HelpText>
            ) : (
              ""
            )}
          </Col>

          <Col xs={24} sm={12}>
            <Form.ControlLabel>
              {type != "lycee"
                ? "la fin " + (type != "College" ? "D'annee" : "Date")
                : "niveau"}
            </Form.ControlLabel>
            {type != "College" ? (
              type == "lycee" ? (
                <Input
                  max={today}
                  value={eDate}
                  onChange={(e) => setEDate(e)}
                  type="number"
                />
              ) : (
                <SelectPicker
                  style={{ margin: "0.35rem", marginLeft: "0" }}
                  searchable={false}
                  block
                  placeholder="Annee"
                  data={yearList}
                  value={eDate}
                  disabled={studying}
                  onChange={(e) => setEDate(e)}
                />
              )
            ) : (
              <Row>
                <Col xs={12}>
                  <SelectPicker
                    style={{ margin: "0.35rem", marginLeft: "0" }}
                    searchable={false}
                    block
                    data={monthList}
                    value={eMonth}
                    disabled={studying}
                    onChange={(e) => {
                      if (eYear != "") {
                        var date = `${eYear}-${e}-01`;
                        setEDate(date);
                      }
                      setEMonth(e);
                    }}
                    placeholder="Mois"
                  />
                </Col>
                <Col xs={12}>
                  <SelectPicker
                    style={{ margin: "0.35rem", marginLeft: "0" }}
                    searchable={false}
                    block
                    data={yearList}
                    value={eYear}
                    disabled={studying}
                    onChange={(e) => {
                      if (eMonth != "") {
                        var date = `${e}-${eMonth}-01`;
                        setEDate(date);
                      }
                      setEYear(e);
                    }}
                    placeholder="Annee"
                  />
                </Col>
              </Row>
            )}
            {eDate <= jDate && !studying && type != "lycee" && eDate != "" ? (
              <Form.HelpText style={{ color: "#ff6b6b" }}>
                Huh? verfier les dates s'il vous plait!!
              </Form.HelpText>
            ) : (
              ""
            )}
          </Col>
        </Row>
        {type != "lycee" && (
          <Row>
            <Col>
              <Checkbox
                defaultChecked={studying}
                value={studying}
                onChange={(e, v) => setStudying(v)}
              >
                Presently studying?
              </Checkbox>
            </Col>
          </Row>
        )}
        {type != "Ecole" && (
          <>
            {" "}
            <br />
           
          </>
        )}
      </div>
      <br />

      <Form.HelpText>Tous les champs sont requis.</Form.HelpText>
    </Form.Group>
  );
}

export default Education;
