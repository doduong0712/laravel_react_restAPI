import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AppContainer from "./AppContainer";
import userAPI from "../api/userApi";

function Home() {
  const [user, setUser] = useState(null);

  const fetchUserList = () => {
    userAPI
      .getAll()
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => console.log("fail"));
  };

  useEffect(() => {
    fetchUserList();
  }, []);

  const renderUser = () => {
    if (!user) {
      return (
        <tr>
          <td colSpan="4">Loading users.....</td>
        </tr>
      );
    }
    if (user.length === 0) {
      return (
        <tr>
          <td colSpan="4">There is no user yet , add one</td>
        </tr>
      );
    }

    return user.map((user) => (
      <tr>
        <td>{user.id}</td>
        <td>{user.name}</td>
        <td>{user.description}</td>
        <td>{user.status}</td>
        <td>
          <Link to={`/edit/${user.id}`} className="btn btn-primary mr-1">
            Edit
          </Link>
          <button
            onClick={() => {
              userAPI
                .deleteUSer(user.id)
                .then(fetchUserList(), window.location.reload())
                .catch((err) => {
                  alert(`Failed to delete user with id : ${user.id}`);
                });
            }}
            className="btn btn-danger"
          >
            Delete
          </button>
        </td>
      </tr>
    ));
  };

  return (
    <AppContainer title="Laravel ReactJS">
      <Link to="/add" className="btn btn-primary float-right">
        Add User
      </Link>
      <div className="table-responsive">
        <table className="table table-striped mt-5">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Description</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{renderUser()}</tbody>
        </table>
      </div>
    </AppContainer>
  );
}

export default Home;
