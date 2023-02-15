import styles from "../assets/styles";
import { useSelector } from "react-redux";
import { useState, useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { Button, IconButton } from "rsuite";
import { useReactToPrint } from "react-to-print";
import { ArrowLeft, ArrowRight, FileDownload, Gear } from "@rsuite/icons";

function Preview(props) {
  const isBigScreen = useMediaQuery({ query: "(min-width: 992px)" });

  const compRef = useRef();

  const [width, setWidth] = useState("10rem");
  const [pages, setPages] = useState(1);
  const [scale, setscale] = useState(window.screen.width / (4 * 800));
  const [isPrinting, setIsPrinting] = useState(false);

  const state = useSelector((state) => state["resume"]);

  useEffect(() => {
    var page = document.getElementById("page");
    setPages(Math.ceil(page.scrollHeight / 1088));
    var words = state.name.split(" ");
    var size = 5;
    if (state.name.length < 20 && state.name.length > 5) {
      size = state.name.length * 1.1;
    } else {
      //console.log(false);
      words.forEach((word) => {
        if (word.length * 1.25 > size) size = word.length * 1.25;
      });
      if (size > 20) size = 20;
    }

    setWidth(`${size}rem`);
    setscale(window.screen.width / (4 * 800));
  }, [
    window.screen.width,
    state.name,
    state.email,
    state.profile,
    state.employment,
    state.education,
    state.projects,
  ]);

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
  const setPrint = () => {
    console.log(state);
    setIsPrinting(true);
    setscale(1);
    setTimeout(() => {
      handlePrint();
    }, 100);

    setTimeout(() => {
      setIsPrinting(false);
      setscale(window.screen.width / (4 * 800));
    }, 1000);
  };
  const handlePrint = useReactToPrint({
    content: () => compRef.current,
    documentTitle: "Resume",
    pageStyle: `
    @page {
      margin: 10mm 0;
    }
    `,
  });
  return (
    <>
      <IconButton
        icon={<FileDownload />}
        circle
        size="lg"
        className="fab"
        appearance="primary"
        onClick={() => {
          setPrint();
        }}
        style={{
          position: "absolute",
          bottom: isBigScreen ? "1rem" : "1.75rem",
          right: isBigScreen ? "1rem" : "0.75rem",
          zIndex: "999999",
          fontSize: isBigScreen ? "unset" : "25px",
        }}
      ></IconButton>

      <div style={isPrinting ? styles.curtain : styles.hide}>
        <div style={styles.curtainTitle}>
          <Gear pulse style={{ fontSize: "1.5em", margin: "0.5rem" }} />{" "}
          Preparing your document...
        </div>
        <br />
        <div
          style={{
            fontSize: "18px",
          }}
        >
          Set the size to ISO A4
        </div>
      </div>
      <div
        id="scroll"
        ref={compRef}
        style={{
          ...styles.outerDiv,
          height: !isPrinting
            ? isBigScreen
              ? "calc(100vh - 3rem)"
              : "70vh"
            : "calc(100vh - 3rem)",
          overflowY: isPrinting ? "visible" : "scroll",
        }}
      >
        <div
          style={{
            ...styles.page,
            margin: !isPrinting
              ? isBigScreen
                ? `calc(50vh - ${(1088 / 1.85) * scale}px) calc(20vw - ${
                    (800 / 2) * scale
                  }px)`
                : "calc(33vh - 160px) calc(51vw - 165px)"
              : "",
            transform: !isPrinting
              ? isBigScreen
                ? `scale(${scale})`
                : "scale(0.3)"
              : `scale(${scale})`,
            minHeight: isPrinting ? `${1050 * pages}px` : `${1088 * pages}px`,
          }}
        >
          <div
            style={{
              ...styles.leftpane,
              paddingTop: isPrinting ? "0" : "2.5rem",
            }}
          >
            <div style={{ minHeight: "1050px" }}>
              <div
                style={state.photo.length ? styles.photoHolder : styles.hide}
              >
                <img
                  style={styles.photo}
                  src={state.photo.length ? state.photo : ""}
                ></img>
              </div>
              <div style={state.urls.length ? styles.urlHolder : styles.hide}>
                <p>
                  <span style={styles.urlHeading}>URLs</span>
                </p>
                {state.urls.map((item, i) => (
                  <div
                  key={i}
                    style={{
                      paddingTop: "5px",
                      lineHeight: "1",
                      maxWidth: "13rem",
                      wordWrap: "break-word",
                    }}
                  >
                    <span style={styles.urlTitle}>{item.site}: </span>
                    <span style={{ ...styles.blueText, ...styles.smallerText }}>
                      {item.link}
                    </span>
                    <br />
                  </div>
                ))}
              </div>
              <br />
              <div style={state.skills.length ? styles.topGap : styles.hide}>
                <span style={styles.title}>Skills</span>
                <div style={styles.paddingAdj}>
                  {state.skills
                    .slice(0, state.skills.length - 1)
                    .map((item, i) => (
                      <>
                        <span style={styles.smallText} key={i}>{item}</span>
                        <hr />
                      </>
                    ))}
                  <span style={styles.smallText}>
                    {state.skills[state.skills.length - 1]}
                  </span>
                </div>
              </div>
              <div style={state.languages.length ? styles.topGap : styles.hide}>
                <br />
                <span style={styles.title}>Languages</span>
                <div style={{ ...styles.paddingAdj, ...styles.smallText }}>
                  {state.languages
                    .slice(0, state.languages.length - 1)
                    .map((item, i) => (
                      <span key={i}>{item + ", "}</span>
                    ))}
                  <span>{state.languages[state.languages.length - 1]}</span>
                </div>
              </div>
              <div
                style={state.references.length ? styles.topGap : styles.hide}
              >
                <br />
                <span style={styles.title}>References</span>
                {state.references.map((item, i) => (
                  <p style={styles.paddingAdj} key={i}>
                    <span style={styles.referName}>{item.name}</span>
                    <br />
                    <span style={styles.referEmail}>{item.email}</span>
                  </p>
                ))}
              </div>
            </div>
            {[...Array(pages - 1)].map((items, i) => (
              <div
              key={i}
                style={{
                  minHeight: "1050px",
                  display: isPrinting ? "unset" : "none",
                }}
              >
                <div
                  style={state.photo.length ? styles.photoHolder : styles.hide}
                >
                  <img
                    style={styles.photo}
                    src={state.photo.length ? state.photo : ""}
                  ></img>
                </div>
                <div style={state.urls.length ? styles.urlHolder : styles.hide}>
                  <p>
                    <span style={styles.urlHeading}>URLs</span>
                  </p>
                  {state.urls.map((item, i) => (
                    <div
                    key={i}
                      style={{
                        paddingTop: "5px",
                        lineHeight: "1",
                        maxWidth: "13rem",
                        wordWrap: "break-word",
                      }}
                    >
                      <span style={styles.urlTitle}>{item.site}: </span>
                      <span
                        style={{ ...styles.blueText, ...styles.smallerText }}
                      >
                        {item.link}
                      </span>
                      <br />
                    </div>
                  ))}
                </div>
                <br />
                <div style={state.skills.length ? styles.topGap : styles.hide}>
                  <span style={styles.title}>Skills</span>
                  <div style={styles.paddingAdj}>
                    {state.skills
                      .slice(0, state.skills.length - 1)
                      .map((item, i) => (
                        <>
                          <span key={i} style={styles.smallText}>{item}</span>
                          <hr />
                        </>
                      ))}
                    <span style={styles.smallText}>
                      {state.skills[state.skills.length - 1]}
                    </span>
                  </div>
                </div>
                <div
                  style={state.languages.length ? styles.topGap : styles.hide}
                >
                  <br />
                  <span style={styles.title}>Languages</span>
                  <div style={{ ...styles.paddingAdj, ...styles.smallText }}>
                    {state.languages
                      .slice(0, state.languages.length - 1)
                      .map((item, i) => (
                        <span key={i}>{item + ", "}</span>
                      ))}
                    <span>{state.languages[state.languages.length - 1]}</span>
                  </div>
                </div>
                <div
                  style={state.references.length ? styles.topGap : styles.hide}
                >
                  <br />
                  <span style={styles.title}>References</span>
                  {state.references.map((item, i) => (
                    <p key={i} style={styles.paddingAdj}>
                      <span style={styles.referName}>{item.name}</span>
                      <br />
                      <span style={styles.referEmail}>{item.email}</span>
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div
            id="page"
            style={{
              ...styles.rightpane,
              paddingTop: isPrinting ? "0" : "2.5rem",
            }}
          >
            <div style={styles.upper}>
              <div style={{ width: width, ...styles.name }}>{state.name}</div>
              <div style={styles.contacts}>
                <span style={styles.blueText}>{state.email}</span>
                <span>{state.phone}</span>
                <span>{state.country}</span>
              </div>
            </div>
            <div style={state.profile.length ? styles.profile : styles.hide}>
              <span style={styles.title}>Profile</span>
              <p style={styles.smallerText}>{state.profile}</p>
            </div>
            <div
              style={state.employment.length ? styles.employment : styles.hide}
            >
              <span style={styles.title}>Antécédents d'emploi</span>
              {state.employment.map((item, i) => (
                <>
                  <div key={i} style={styles.paddingAdj}>
                    <div style={styles.listFix}>
                      <li style={styles.referName}>
                        {item.position} at {item.company}
                      </li>
                      <div style={styles.pushRight}>
                        <span style={styles.lightText}>
                          {getDateFormat(item.jDate) +
                            " - " +
                            (item.working
                              ? "Present"
                              : getDateFormat(item.eDate))}
                        </span>
                        <br />
                        <div style={styles.smallerText}>{item.desc}</div>
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </div>
            <div
              style={state.education.length ? styles.employment : styles.hide}
            >
              <span style={styles.title}>Education</span>
              {state.education.map((item, i) => (
                <>
                  <div key={i} style={styles.paddingAdj}>
                    <div style={styles.listFix}>
                      <li style={styles.referName}>{item.institution}</li>
                      <div style={styles.pushRight}>
                        <span style={styles.lightText}>
                          {item.type == "College"
                            ? getDateFormat(item.jDate) +
                              " - " +
                              (item.studying
                                ? "Present"
                                : getDateFormat(item.eDate))
                            : item.jDate +
                              (item.type == "Board" ? " ~ Class " : " - ") +
                              (item.studying ? "Present" : item.eDate)}
                        </span>
                        <br />
                        {item.type != "School" ? (
                          <div style={styles.smallerText}>
                            {item.course +
                              " | " +
                              item.gradeType +
                              ": " +
                              item.grade}
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </div>
            <div
              style={state.projects.length ? styles.employment : styles.hide}
            >
              <span style={styles.title}>Projets</span>
              {state.projects.map((item, i) => (
                <>
                  <div style={styles.paddingAdj} key={i}>
                    <div style={styles.listFix}>
                      <li style={styles.referName}>{item.title}</li>
                      <div
                        style={
                          item.link.length || item.desc.length
                            ? styles.pushRight
                            : { display: "none" }
                        }
                      >
                        <span
                          style={
                            item.link.length
                              ? {
                                  ...styles.blueText,
                                  ...styles.smallText,
                                  paddingTop: "0",
                                  opacity: "0.75",
                                }
                              : { display: "none" }
                          }
                        >
                          {item.link}
                          <br />
                        </span>

                        <div
                          style={
                            item.desc ? styles.smallerText : { display: "none" }
                          }
                        >
                          {item.desc}
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Preview;
