import "./Modal.css";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import ModalInput from "./ModalInput";

const Modal = ({ user, modalVisibilityHandler, updateUserData }) => {
  // const [userData, setUserData] = useState(user);
  const [name, setName] = useState(user.name);
  const [phone, setPhone] = useState(user.phone);
  const [email, setEmail] = useState(user.email);
  const [website, setWebsite] = useState(user.website);

  //handlers
  const okButtonHandler = () => {
    if (name && phone && email && website) {
      updateUserData({
        id: user.id,
        name,
        phone,
        email,
        website,
        profile: user.profile,
      });
      modalVisibilityHandler();
    }
  };

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <div className="modal-header">
          <div className="modal-title">Edit details</div>
          <button>
            <AiOutlineClose
              className="modal-close-div"
              onClick={() => {
                modalVisibilityHandler();
              }}
            />
          </button>
        </div>
        <div className="modal-body">
          {/* name */}
          <ModalInput setInputState={setName} value={name} label="Name" />

          {/* email*/}
          <ModalInput setInputState={setEmail} value={email} label="Email" />

          {/* phone */}
          <ModalInput setInputState={setPhone} value={phone} label="Phone" />

          {/* website */}
          <ModalInput
            setInputState={setWebsite}
            value={website}
            label="Website"
          />
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
