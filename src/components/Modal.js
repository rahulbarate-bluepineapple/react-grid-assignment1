import "./Modal.css";
import {AiOutlineClose} from "react-icons/ai"

const Modal = () => {
  return (
    <div className="modal-backdrop">
      <div className="modal">
        <div className="modal-header">
          <div className="modal-title">Edit details</div>
          <AiOutlineClose className="modal-close-div" />
        </div>
        <div className="modal-body">
          <div className="modal-input-group">
            <label>Name: </label>
            <input type="text" className="form-control" />
          </div>
          <div className="modal-input-group">
            <label>Email: </label>
            <input type="text" className="form-control" />
          </div>
          <div className="modal-input-group">
            <label>Phone: </label>
            <input type="text" className="form-control" />
          </div>
          <div className="modal-input-group">
            <label>Website: </label>
            <input type="text" className="form-control" />
          </div>
        </div>
        <div className="modal-footer">
          <button className="modal-button-cancel">Cancel</button>
          <button className="modal-button-ok">Ok</button>
        </div>
      </div>
    </div>
  );
};
export default Modal;
