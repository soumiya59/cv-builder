import { useRef, useState, useEffect } from "react";
import AvatarEditor from "react-avatar-editor";
import { useDispatch } from "react-redux";
import { Button, Message, Modal, Slider } from "rsuite";
import { changePhoto } from "../../store/slice";
const ImageCropper = (props) => {
  useEffect(() => {
    setZoom(25);
  }, []);

  const [zoom, setZoom] = useState(25);

  const dispatch = useDispatch();

  const editor = useRef(null);

  return (
    <Modal backdrop="static" open={props.open} onClose={props.handleClose}>
      <Modal.Header>Crop Image</Modal.Header>
      <Modal.Body>
        <div style={{ textAlign: "center", width: "95%", padding: "1.5rem" }}>
          <br />
          <AvatarEditor
            ref={editor}
            image={props.url}
            border={25}
            borderRadius={25}
            style={{ borderRadius: "0.5rem" }}
            color={[255, 255, 255, 0.8]} // RGBA
            scale={(zoom + 100) / 100}
          />
          <p>Zoom</p>
          <Slider
            progress
            style={{ marginTop: 8 }}
            value={zoom}
            onChange={(value) => {
              setZoom(value);
            }}
          />
          <br />
          <Message showIcon type="info">
          Vous pouvez repositionner l'image en la faisant glisser.
          </Message>
        </div>
      </Modal.Body>
      <Modal.Footer className="mobile__center">
        <Button
          onClick={() => {
            if (editor) {
              // This returns a HTMLCanvasElement, it can be made into a data URL or a blob,
              // drawn on another canvas, or added to the DOM.
              const canvas = editor.current.getImage();
              var url = canvas.toDataURL();
              //console.log(url);
              dispatch(changePhoto(url));
              props.handleClose();
            }
          }}
          appearance="primary"
          color="blue"
          className="mobile__widen"
        >
          Save
        </Button>
        <Button
          className="mobile__widen"
          onClick={() => {
            dispatch(changePhoto(props.url));
            props.handleClose();
          }}
        >
          Annuler
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ImageCropper;
