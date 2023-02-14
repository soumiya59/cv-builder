import { Panel } from "rsuite";

function ListViewPanel(props) {

  return (
    <Panel header={props.title} bordered style={{width:"100%"}} >
      {props.content} 
    </Panel>
  );
}

export default ListViewPanel;
