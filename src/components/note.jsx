import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import Zoom from "@material-ui/core/Zoom";
import onClickOutside from "react-onclickoutside";

function Note(props) {
  const [isExpanded, setIsExpanded] = React.useState(false);

  function handleClick() {
    props.onDelete(props.id);
  }

  function expand() {
    setIsExpanded(true);
  }

  Note.handleClickOutside = () => setIsExpanded(false);

  return (
    <div className="note" onClick={expand}>
      <h1>{props.title}</h1>
      <p style={{ maxHeight: isExpanded ? "100ch" : "6ch" }}>{props.content}</p>

      <Zoom in={isExpanded}>
        <button onClick={handleClick} onMouseOver={() => {}}>
          <DeleteIcon />
        </button>
      </Zoom>
    </div>
  );
}

const clickOutsideConfig = {
  handleClickOutside: () => Note.handleClickOutside,
};

export default onClickOutside(Note, clickOutsideConfig);
