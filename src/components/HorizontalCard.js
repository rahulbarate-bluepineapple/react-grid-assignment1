import "./HorizontalCard.css";

const HorizontalCard = ({ user }) => {
  return (
    <div className="horizontal-card">
      <div className="horizontal-card-profile">
        <img
          className="horizontal-card-image"
          src={user.profile}
          alt="loading"
        />
      </div>
      <div className="horizontal-card-body">
        <h2>{user.name}</h2>
        <p>
          <b>Email: </b>
          {user.email}
          <br />
          <b>Phone: </b>
          {user.phone}
          <br />
          <b> Company: </b>
          {user.company}
          <br />
          <b> Website: </b>
          {user.website}
          <br />
          <b> Address: </b>
          {user.address}
        </p>
      </div>
    </div>
  );
};
export default HorizontalCard;
