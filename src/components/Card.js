import "./Card.css";
// import LanguageIcon from "@mui/icons-material/Language";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  BsGlobe,
  BsFillTelephoneFill,
  BsHeart,
  BsHeartFill,
} from "react-icons/bs";
import { AiFillMail, AiOutlineEdit, AiTwotoneDelete } from "react-icons/ai";
import { useState } from "react";
import Modal from "./Modal";

const Card = ({ user, updateUserData, deleteUser }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const likeButtonHandler = () => {
    setIsLiked(!isLiked);
  };
  const editButtonHandler = () => {
    setIsModalVisible(true);
    return;
  };
  const deleteButtonHandler = () => {
    deleteUser(user.id);
    // return;
  };
  const modalVisibilityHandler = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <div>
      {isModalVisible && (
        <Modal
          user={user}
          modalVisibilityHandler={modalVisibilityHandler}
          updateUserData={updateUserData}
        />
      )}
      <div className="card">
        <div className="card-img-background">
          <img className="card-img" src={user.profile} alt="loading" />
        </div>
        <div className="card-contents">
          <div className="card-content">
            <h3 className="card-content-name">{user.name}</h3>
          </div>
          <div className="card-content">
            <AiFillMail />
            <p className="card-content-text">{user.email}</p>
          </div>
          <div className="card-content">
            <BsFillTelephoneFill />
            <p className="card-content-text">{user.phone}</p>
          </div>
          <div className="card-content">
            <BsGlobe />
            <p className="card-content-text">{user.website}</p>
          </div>
        </div>
        <div className="card-buttons">
          <div className="card-button-div">
            <button onClick={likeButtonHandler}>
              {isLiked ? (
                <BsHeartFill size={18} color="red" />
              ) : (
                <BsHeart size={18} color="red" />
              )}
            </button>
          </div>
          <div className="card-button-div card-button-middlebutton">
            <button onClick={editButtonHandler}>
              <AiOutlineEdit size={20} className="icon-edit" />
            </button>
          </div>
          <div className="card-button-div">
            <button onClick={deleteButtonHandler}>
              <AiTwotoneDelete size={20} className="icon-delete" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
