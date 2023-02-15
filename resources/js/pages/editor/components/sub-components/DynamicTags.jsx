import { useState } from "react";
import { TagGroup, Tag, Input, IconButton } from "rsuite";
import { Plus, Close } from "@rsuite/icons";
import { useDispatch } from "react-redux";

function DynamicTags(props) {
  const dispatch = useDispatch();

  const [tags, setTags] = useState([]);
  const [typing, setTyping] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleTagRemove = (tag) => {
    const nextTags = tags.filter((item) => item !== tag);
    setTags(nextTags);
    dispatch(props.task(nextTags));
  };

  const handleInputConfirm = () => {
    const nextTags = inputValue ? [...tags, inputValue] : tags;
    setTags(nextTags);
    setTyping(false);
    setInputValue("");
    dispatch(props.task(nextTags));
  };

  const handleButtonClick = () => {
    setTyping(true);
  };

  const renderInput = () => {
    if (typing) {
      return (
        <>
          <Input
            className="tag-input"
            size="xs"
            style={{
              width: "10rem",
              margin: "0.75rem",
              height: "2.25rem",
            }}
            value={inputValue}
            placeholder={"Add " + props.title.slice(0, props.title.length - 1)}
            onChange={setInputValue}
            onBlur={handleInputConfirm}
            onPressEnter={handleInputConfirm}
          />
          <IconButton icon={<Close />} onClick={() => setTyping(false)} />
        </>
      );
    }

    return (
      <IconButton
        icon={<Plus />}
        color="blue"
        appearance="primary"
        onClick={handleButtonClick}
        style={
          tags.length
            ? { margin: "0.75rem 0.75rem" }
            : { margin: "0.75rem", marginBottom: "0" }
        }
      >
        Add {props.buttonText}
      </IconButton>
    );
  };
  return (
    <TagGroup>
      {tags.map((item, index) => (
        <Tag
          size="lg"
          key={index}
          closable
          onClose={() => handleTagRemove(item)}
        >
          {item}
        </Tag>
      ))}
      {renderInput()}
    </TagGroup>
  );
}

export default DynamicTags;
