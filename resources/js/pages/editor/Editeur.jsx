import {
  Col,
  Container,
  Grid,
  Row,
  Content,
  IconButton,
  Modal,
  Footer,
} from "rsuite";
import FormInput from "./components/FormInput";
import Preview from "./components/Preview";
import { useMediaQuery } from "react-responsive";
import { Image } from "@rsuite/icons";
import { useState } from "react";
import TopPanel from "./components/TopPanel";

import "./style.less";



function Editeur() {
  const isBigScreen = useMediaQuery({ query: "(min-width: 992px)" });
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="App">
      <Container>
        <TopPanel />
        <Content>
          <Grid
            style={{
              width: "100%",
              padding: isBigScreen ? "1rem" : "1rem 0.5rem",
            }}
          >
            <Row>
              <Col
                md={14}
                style={{ height: "calc(100vh - 3rem)", overflowY: "scroll" }}
              >
                <FormInput />
              </Col>
              {isBigScreen ? (
                <Col md={10}>
                  <Preview />
                </Col>
              ) : (
                ""
              )}
            </Row>
          </Grid>
        </Content>
        {!isBigScreen ? (
          <IconButton
            className="fab"
            style={{
              position: "absolute",
              top: "calc(100vh - 6rem)",
              left: "calc(100vw - 4.5rem)",
            }}
            icon={<Image />}
            circle
            size="lg"
            appearance="primary"
            onClick={() => setModalOpen(true)}
          ></IconButton>
        ) : (
          ""
        )}
      </Container>
      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <Modal.Header>Preview</Modal.Header>
        <Modal.Body>
          <Preview />
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Editeur;
