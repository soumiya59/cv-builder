const styles = {
  hide: {
    display: "none",
  },
  title: {
    fontSize: "20px",
    fontWeight: "600",
    color: "#3B67F6",
  },
  lightText: {
    opacity: "0.6",
    fontSize: "12px",
  },
  smallerText: {
    fontSize: "10px",
    paddingTop: "0.15rem",
  },
  smallText: {
    fontSize: "12px",
    paddingTop: "0.25rem",
  },
  blueText: {
    color: "#2f57db",
  },
  paddingAdj: { paddingTop: "0.65rem" },
  topGap: { marginTop: "0.75rem" },
  curtain: {
    position: "absolute",
    background: "white",
    width: "100%",
    height: "100%",
    zIndex: "9999",
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    transitionDuration: "500ms",
  },
  curtainTitle: {
    fontSize: "large",
    fontWeight: "600",
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
  },
  outerDiv: {
    background: "#EEF5FF",
    height: "calc(100vh - 3rem)",
    width: "100%",
    display: "flow-root",
    borderRadius: "5px",
  },
  page: {
    background: "#FFFFFF",
    width: "800px",
    borderRadius: "5px",
    display: "flex",
    transform: "scale(0.3)",
    transformOrigin: "top left",
  },
  leftpane: {
    padding: "2.5rem 2.5rem 0 2.5rem",
    flexBasis: "35%",
    display: "flex",
    flexDirection: "column",
  },
  rightpane: {
    padding: "2.5rem 2.5rem 2.5rem 0",
    flexBasis: "65%",
    display: "flex",
    flexDirection: "column",
    height: "fit-content",
  },
  photoHolder: {
    verticalAlign: "middle",
    textAlign: "center",
    height: "140px",
    width: "140px",
  },
  photo: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "0.75rem",
  },
  urlHeading: {
    fontSize: "12.4px",
    fontWeight: "600",
  },
  urlHolder: {
    paddingTop: "1.125rem",
  },
  urlTitle: {
    fontWeight: "500",
    fontSize: "10px",
    color: "#3B67F6",
  },
  referName: {
    fontSize: "12.4px",
    fontWeight: "600",
  },
  referEmail: {
    fontSize: "12px",
  },
  upper: {
    display: "flex",
  },
  name: {
    fontSize: "32px",
    fontWeight: "600",
    color: "#3B67F6",
    wordWrap: "break-word",
    margin: "auto 0",
    lineHeight: "1.25",
  },
  contacts: {
    display: "flex",
    margin: "0.625rem 0 0.625rem 1rem",
    flexDirection: "column",
    justifyContent: "end",
    fontSize: "10px",
    borderLeft: "1px solid",
    paddingLeft: "0.3rem",
    marginLeft: "0.3rem",
    lineHeight: "1.5",
    maxWidth: "12.5rem",
    wordWrap: "break-word",
  },
  profile: {
    marginTop: "0.6rem",
    padding: "0.75rem",
    background: "#F7FAFC",
    borderRadius: "5px",
  },
  employment: {
    marginTop: "1rem",
    display: "block",
    position: "relative",
    height: "fit-content",
  },
  listFix: {
    marginLeft: "0.3rem",
  },
  pushRight: {
    marginLeft: "1rem",
  },
};

export default styles;
