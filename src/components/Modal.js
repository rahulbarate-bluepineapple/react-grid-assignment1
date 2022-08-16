import "./Modal.css";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const Modal = ({ user, modalVisibilityHandler, updateUserData }) => {
  // const [userData, setUserData] = useState(user);
  const [name, setName] = useState(user.name);
  const [phone, setPhone] = useState(user.phone);
  const [email, setEmail] = useState(user.email);
  const [website, setWebsite] = useState(user.website);

  //handlers
  const okButtonHandler = () => {
    updateUserData({
      id: user.id,
      name,
      phone,
      email,
      website,
      profile: user.profile,
    });
    modalVisibilityHandler();
  };

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <div className="modal-header">
          <div className="modal-title">Edit details</div>
          <AiOutlineClose
            className="modal-close-div"
            onClick={() => {
              modalVisibilityHandler();
            }}
          />
        </div>
        <div className="modal-body">
          <div className="modal-input-group">
            <label>Name: </label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
          </div>
          <div className="modal-input-group">
            <label>Email: </label>
            <input
              type="text"
              className="form-control"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </div>
          <div className="modal-input-group">
            <label>Phone: </label>
            <input
              type="text"
              className="form-control"
              value={phone}
              onChange={(event) => {
                setPhone(event.target.value);
              }}
            />
          </div>
          <div className="modal-input-group">
            <label>Website: </label>
            <input
              type="text"
              className="form-control"
              value={website}
              onChange={(event) => {
                setWebsite(event.target.value);
              }}
            />
          </div>
        </div>
        <div className="modal-footer">
          <button
            className="modal-button-cancel"
            onClick={() => {
              modalVisibilityHandler();
            }}
          >
            Cancel
          </button>
          <button className="modal-button-ok" onClick={okButtonHandler}>
            Ok
          </button>
        </div>
      </div>
    </div>
  );
};
export default Modal;
