import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import userData from "./userdata";
// import Modal from "./components/Modal";

function App() {
  const [users, setUsers] = useState(userData);

  const updateUserData = (data) => {
    const newUsersData = [];
    for (let each of users) {
      if (each.id === data.id) {
        newUsersData.push(data);
      } else {
        newUsersData.push({ ...each });
      }
    }
    // console.log(newUsersData);
    setUsers(newUsersData);
  };

  const deleteUser = (id) => {
    const newUsersData = users.filter((user) => {
      return user.id !== id;
    });
    // console.log(newUsersData);
    setUsers(newUsersData);
  };

  return (
    <div className="App">
      {users.map((eachUser) => {
        return (
          <Card
            key={eachUser.id}
            user={eachUser}
            updateUserData={updateUserData}
            deleteUser={deleteUser}
          />
        );
      })}

      {/* cards */}
      {/* <Card />
      <Card />
      <Card />
      <Card /> */}

      {/* <Modal /> */}
    </div>
  );
}

export default App;
