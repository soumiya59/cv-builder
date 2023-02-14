import { Edit, Plus } from "@rsuite/icons";
import { useState, useEffect } from "react";
import { IconButton } from "rsuite";
import { Trash } from "@rsuite/icons";
import ModalWindow from "./ModalWindow";
import DynamicTags from "./DynamicTags";
import ListViewPanel from "./ListViewPanel";
import { useSelector, useDispatch } from "react-redux";
import { changeEditData } from "../../store/slice";
import { useMediaQuery } from "react-responsive";

function MiscInputs(props) {
  const isBigScreen = useMediaQuery({ query: "(min-width: 992px)" });

  const styles = {
    title: { fontSize: "large", fontWeight: "600" },
  };
  const dispatch = useDispatch();
  const state = useSelector((state) => state["resume"]);
  const [list, setList] = useState([]);
  const [edit, setEdit] = useState(false);
  const [editIndex, setEditIndex] = useState(0);

  useEffect(() => {
    switch (props.source) {
      case "education":
        setList(state.education);
        break;
      case "employment":
        setList(state.employment);
        break;
      case "projets":
        setList(state.projects);
        break;
      case "links":
        setList(state.urls);
        break;
      case "references":
        setList(state.references);
        break;
      default:
        setList([null]);
        break;
    }
  }, [state]);

  const getDateFormat = (arg) => {
    var month = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return month[parseInt(arg.slice(5, 7)) - 1] + " " + arg.slice(0, 4);
  };

  const getTitle = (item) => {
    switch (props.source) {
      case "education":
        if (item.type == "Ecole") return item.institution;
        return item.course + " from " + item.institution;
      case "employment":
        return item.position + " at " + item.company;
      case "projets":
        return item.title;
      case "liens":
        return item.site;
      case "references":
        return item.name;
      default:
        return "N/A";
    }
  };
  const getContent = (item) => {
    switch (props.source) {
      case "education":
        return item.type == "College"
          ? getDateFormat(item.jDate) +
              " - " +
              (item.studying ? "Present" : getDateFormat(item.eDate))
          : item.jDate +
              (item.type == "Board" ? " ~ Class " : " - ") +
              (item.studying ? "Present" : item.eDate);
      case "employment":
        return (
          getDateFormat(item.jDate) +
          " - " +
          (item.working ? "Present" : getDateFormat(item.eDate))
        );
      case "projets":
        if (item.link.length) {
          return item.link;
        } else if (item.desc.length) {
          return item.desc;
        } else {
          return "Lien et description non fournis";
        }
      case "liens":
        return item.link;
      case "references":
        return item.email;
      default:
        return "N/A";
    }
  };
  const handleDelete = (item) => {
    dispatch(props.task({ delete: true, data: list.indexOf(item) }));
  };
  const handleEdit = (item) => {
    setEdit(true);
    setEditIndex(list.indexOf(item));
    setModalOpen(true);
    dispatch(changeEditData(item));
  };
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <p style={styles.title}>{props.title}</p>
      <p>{props.desc}</p>

      {!(props.title === "Skills" || props.title === "Languages") ? (
        <>
          <br />
          {list.map((item, i) => (
            <div
              className="divv"
              key={i}
              style={{
                display: "flex",
                width: "100%",
                flexDirection: "row",
                margin: "0.75rem 0",
              }}
            >
              <ListViewPanel
                title={getTitle(item)}
                content={getContent(item)}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: isBigScreen ? "row" : "column",
                }}
              >
                <IconButton
                  style={{
                    background: "#FFFFFF",
                    width: "100%",
                    paddingLeft: "1.125rem",
                    height: "100%",
                  }}
                  icon={<Edit />}
                  size={isBigScreen ? "lg" : "sm"}
                  onClick={() => handleEdit(item)}
                ></IconButton>
                <IconButton
                  style={{
                    background: "#FFFFFF",
                    width: "100%",
                    paddingLeft: "1.125rem",
                    height: "100%",
                  }}
                  icon={<Trash />}
                  size={isBigScreen ? "lg" : "sm"}
                  onClick={() => handleDelete(item)}
                ></IconButton>
              </div>
            </div>
          ))}
        </>
      ) : (
        ""
      )}

      <br />
      {!(props.title === "Skills" || props.title === "Languages") ? (
        <>
          <IconButton
            icon={<Plus />}
            color="blue"
            appearance="primary"
            onClick={() => setModalOpen(true)}
          >
            Add {props.buttonText}
          </IconButton>

          <ModalWindow
            open={modalOpen}
            close={() => {
              setModalOpen(false), setEdit(false);
              dispatch(changeEditData({}));
            }}
            title={props.title}
            body={props.modal}
            task={props.task}
            edit={edit}
            editIndex={editIndex}
          />
          <br />
        </>
      ) : (
        <>
          <DynamicTags task={props.task} title={props.title} />
        </>
      )}

      <br />
      <br />
    </>
  );
}

export default MiscInputs;
