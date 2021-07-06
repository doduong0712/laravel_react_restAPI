import React, { useState } from "react";
import userAPI from "../api/userApi";
import { useHistory } from "react-router-dom";
import AppContainer from "./AppContainer";

function AddUser() {
  const history = useHistory();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");

  const onAddSubmit = async () => {
    try {
      const user = {
        name: name,
        description: description,
        status: status,
      };

      await userAPI.addUser(user);
      history.push("/");
    } catch (error) {
      console.log("Fail", error);
    }
  };

  return (
    <AppContainer title="ADD USER">
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
                onClick={onAddSubmit}
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

export default AddUser;

/*     <AppContainer title="ADD USER">
      <form>
        <div className="form-group">
          <label>Name</label>
          <input className="form-control" type="text" />
        </div>
        <div className="form-group">
          <label>Description</label>
          <input className="form-control" type="text" />
        </div>
        <div className="form-group">
          <label>Status</label>
          <input className="form-control" type="text" />
        </div>
        <div className="form-group">
          <button type="button" className="btn btn-success">
            Add User
          </button>
        </div>
      </form>
    </AppContainer> */
