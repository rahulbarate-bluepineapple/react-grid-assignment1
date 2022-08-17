import { useState } from "react";
import "./ModalInput.css"

const ModalInput = (props) => {
  const [isInputInvalid, setIsInputInvalid] = useState(false);

  const inputHandler = (event) => {
    props.setInputState(event.target.value);
    if (event.target.value === "") {
      setIsInputInvalid(true);
    } else {
      setIsInputInvalid(false);
    }
  };

  return (
    <div>
      <div className="modal-input-label-tr">
        <div>
          <label className="modal-input-label">{props.label}: </label>
        </div>
        <div>
          <input type="text" value={props.value} onChange={inputHandler} />
        </div>
      </div>
      <div className="modal-invalid-input-label-tr">
        <div></div>
        <div className="modal-invalid-input-lable-cell">
          {isInputInvalid && <label>This field is required.</label>}
        </div>
      </div>
    </div>
  );
};
export default ModalInput;
