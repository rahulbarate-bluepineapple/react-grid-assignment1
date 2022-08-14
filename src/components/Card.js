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

const Card = () => {
  const [isLiked, setIsLiked] = useState(false);

  const likeButtonHandler = () => {
    setIsLiked(!isLiked);
  };
  const editButtonHandler = () => {
    return;
  };
  const deleteButtonHandler = () => {
    return;
  };
  return (
    <div>
      <div className="card">
        <div className="card-img-background">
          <img
            className="card-img"
            src="https://avatars.dicebear.com/v2/avataaars/Bret.svg?options[mood][]=happy"
            alt="loading"
          />
        </div>
        <div className="card-contents">
          <div className="card-content">
            <h3 className="card-content-name">Name here</h3>
          </div>
          <div className="card-content">
            <AiFillMail />
            <p className="card-content-text">email</p>
          </div>
          <div className="card-content">
            <BsFillTelephoneFill />
            <p className="card-content-text">pno</p>
          </div>
          <div className="card-content">
            <BsGlobe />
            <p className="card-content-text">website</p>
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
