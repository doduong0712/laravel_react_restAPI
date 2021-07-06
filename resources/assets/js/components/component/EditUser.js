import React, { useState, useEffect } from "react";
import AppContainer from "./AppContainer";
import { useHistory, useParams } from "react-router-dom";
import userAPI from "../api/userApi";

function EditUser() {
  const { id } = useParams();

  const history = useHistory();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");

  const onEditSubmit = async () => {
    try {
      const user = {
        name: name,
        description: description,
        status: status,
      };

      await userAPI.updateUser(id, user);
      history.push("/");
    } catch (error) {
      console.log("Fail", error);
    }
  };

  useEffect(() => {
    userAPI.getEdit(id).then((res) => {
      const user = res.data;
      setName(user.name);
      setDescription(user.description);
      setStatus(user.status);
    });
  }, []);

  return (
    <AppContainer title="EDIT USER">
      <div className="card">
        <div className="card-body">
          <form>
            <div className="form-group">
              <label>Name</label>
              <input
                className="form-control"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Description</label>
              <input
                className="form-control"
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Status</label>
              <input
                className="form-control"
                type="text"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              />
            </div>
            <div className="form-group">
              <button
                type="button"
                className="btn btn-success"
                onClick={onEditSubmit}
              >
                Add User
              </button>
            </div>
          </form>
        </div>
      </div>
    </AppContainer>
  );
}

export default EditUser;
