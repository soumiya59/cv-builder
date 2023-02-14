import { useState } from "react";
import { Button, Col, Form, IconButton, Input, Row, Uploader } from "rsuite";
import { Edit, AddOutline } from "@rsuite/icons";
import MiscInputs from "./sub-components/MiscInputs";
import { otherInputs } from "../assets/MiscInputList";
import { useDispatch } from "react-redux";
import {
  changeName,
  changeEmail,
  changeCountry,
  changePhone,
  changeProfile,
  changePhoto,
} from "../store/slice";
import ImageCropper from "./sub-components/ImageCropper";
import { useMediaQuery } from "react-responsive";
function FormInput(props) {
  const [photo, setPhoto] = useState([]);
  const [text, setText] = useState("");
  const [cropperOpen, setCropperOpen] = useState(false);
  const [cropperURL, setCropperURL] = useState(null);

  const dispatch = useDispatch();
  const isBigScreen = useMediaQuery({ query: "(min-width: 992px)" });

  const styles = {
    title: { fontSize: "large", fontWeight: "600" },
  };
  const handlePhotoChange = (photo) => {
    if (photo.length) {
      var blob = new Blob([photo[0].blobFile], {
        type: photo[0].blobFile.type,
      });
      var url = URL.createObjectURL(blob);
      dispatch(changePhoto(url));
      setCropperURL(url);
      setCropperOpen(true);
    } else {
      dispatch(changePhoto(""));
      setCropperOpen(false);
      setCropperURL(null);
    }
    setPhoto(photo);
  };
  const handleTextareaInput = (arg) => {
    var len = arg.split(" ").length;
    if (len > 60) {
      alert("Word limit crossed!");
    } else {
      setText(arg);
      dispatch(changeProfile(arg));
    }
  };
  const handleCropperClose = () => {
    setCropperOpen(false);
  };
  return (
    <div style={{ padding: isBigScreen ? "2rem" : "1rem" }}>
      <ImageCropper
        url={cropperURL}
        open={cropperOpen}
        handleClose={handleCropperClose}
      />

      <Form>
        <span style={styles.title}>l'identité personnelles</span>
        <p style={{ paddingTop: "0.5rem" }}>Informations personnelles</p>
        <br />
        <Form.Group>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div
              onClick={() => document.getElementById("photoButton").click()}
              style={
                !photo.length
                  ? {
                      marginTop: "10px",
                      width: "66px",
                      height: "66px",
                      background: "#F8FAFC",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }
                  : { display: "none" }
              }
            >
              <AddOutline style={{ fontSize: "2rem", opacity: "0.5" }} />
            </div>
            <Uploader
              value={photo}
              accept="image/*"
              action="#"
              autoUpload={false}
              listType="picture"
              onChange={handlePhotoChange}
              disabled={Boolean(photo.length)}
            >
              <Button
                id="photoButton"
                style={
                  !photo.length
                    ? {
                        width: "8rem",
                        height: "2.5rem",
                        background: "#EEF5FF",
                        color: "#4E7BF7",
                        fontWeight: "600",
                        marginLeft: "1rem",
                      }
                    : { display: "none" }
                }
              >
                Ajouter photo
              </Button>
            </Uploader>
            {photo.length ? (
              <IconButton
                style={{ background: "#FFFFFF", paddingTop: "1.5rem" }}
                icon={<Edit />}
                size="lg"
                onClick={() => setCropperOpen(true)}
              />
            ) : (
              ""
            )}
          </div>
        </Form.Group>
        <Form.Group>
          <Row>
            <Col xs={24} sm={12}>
              <Form.ControlLabel>Nom complet</Form.ControlLabel>
              <Input onChange={(e) => dispatch(changeName(e))} />
            </Col>
            <Col xs={24} sm={12}>
              <Form.ControlLabel>Email:</Form.ControlLabel>
              <Input onChange={(e) => dispatch(changeEmail(e))} type="email" />
            </Col>
          </Row>
          <br />

          <Row>
            <Col xs={24} sm={12}>
              <Form.ControlLabel>Téléphone:</Form.ControlLabel>
              <Input
                type={"tel" /* type = tel allows for auto fill */}
                onChange={(e) => dispatch(changePhone(e))}
              />
            </Col>
            <Col xs={24} sm={12}>
              <Form.ControlLabel>Ville:</Form.ControlLabel>
              <Input onChange={(e) => dispatch(changeCountry(e))} type="text" />
            </Col>
          </Row>
        </Form.Group>
        <br />
        <Form.Group>
          <p style={styles.title}>Profile </p>
          <p>
          Une brève description de vous-même, de vos idéaux et de vos intérêts.(
            {text.length ? text.split(" ").length : 0} / 60)
          </p>
          <br />
          <textarea
            value={text}
            onChange={(e) => handleTextareaInput(e.target.value)}
            className="txt rs-input"
            rows={10}
          ></textarea>
        </Form.Group>
        <Form.Group>
          {otherInputs.map((item) => (
            <MiscInputs
              key={item.title}
              title={item.title}
              desc={item.desc}
              buttonText={item.buttonText}
              modal={item.modal}
              source={item.source}
              task={item.task}
            />
          ))}
        </Form.Group>
      </Form>
    </div>
  );
}

export default FormInput;
