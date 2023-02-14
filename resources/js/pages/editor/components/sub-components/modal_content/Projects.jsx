import { useState, useEffect } from "react";
import { Form, Input } from "rsuite";
import { useDispatch, useSelector } from "react-redux";
import { changeTemp } from "../../../store/slice";

function Projects(props) {
  const editData = useSelector((state) => state["resume"].editData);

  const dispatch = useDispatch();
  useEffect(() => {
    let data = {
      title: title,
      link: link,
      desc: desc,
    };
    dispatch(changeTemp({ data: data, disabled: !check() }));
  });
  const check = () => {
    return Boolean(title.length);
  };
  const [title, setTitle] = useState(editData.title ? editData.title : "");
  const [link, setLink] = useState(editData.link ? editData.link : "");
  const [desc, setDesc] = useState(editData.desc ? editData.desc : "");

  return (
    <Form.Group>
      <Form.ControlLabel>
        Title <span style={{ color: "#ff6b6b" }}>*</span>
      </Form.ControlLabel>
      <Input value={title} onChange={(e) => setTitle(e)} />
      <br />
      <br />
      <Form.ControlLabel>Link</Form.ControlLabel>
      <Input value={link} onChange={(e) => setLink(e)} />
      <br />
      <br />
      <Form.ControlLabel>
        Description ({desc.length ? desc.split(" ").length : 0} / 40)
      </Form.ControlLabel>
      <textarea
        rows={5}
        className="rs-input txt"
        value={desc}
        onChange={(e) => {
          if (e.target.value.split(" ").length > 40) {
            alert("Word limit crossed");
          } else {
            setDesc(e.target.value);
          }
        }}
      />
      <br />
      <Form.HelpText><span style={{ color: "#ff6b6b" }}>*</span> les champs obligatoir</Form.HelpText>
    </Form.Group>
  );
}

export default Projects;
