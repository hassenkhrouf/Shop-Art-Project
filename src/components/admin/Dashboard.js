import React, { useState } from "react";
import { Link } from "react-router-dom";
import AddWork from "./AddWork";
import Inbox from "./Inbox";
import Order from "./Orders";
import Files from "./Files";
import { mailBox, insertWork, Left, orderes, files } from "../../ressources";

export default function Dashboard(props) {
  const { handleLogOut } = props;
  const [content, setContent] = useState(<AddWork />);
  const [contentPic, setContentPic] = useState("insertWork");


  return (
    <div className="dashboard row ">
      <ul className="nav  bg-light navbarColor">
        <li className="nav-item">
          <div className="nav-link active">
            <img src={Left} alt="insert" width="30px" height="30px" />
            <Link to="/" className="btn">
              Back
            </Link>
          </div>
        </li>
        <div className="d-flex justify-content-center">
          <li className="nav-item">
            <div className="nav-link active">
              {contentPic === "insertWork" ? (
                <img src={insertWork} alt="insert" width="30px" height="30px" />
              ) : (
                <></>
              )}
              <button
                className=" btn"
                onClick={() => {
                  setContent(<AddWork />);
                  setContentPic("insertWork");
                }}
              >
                Add Work
              </button>
            </div>
          </li>
          <li className="nav-item">
            <div className="nav-link">
              {contentPic === "mailBox" ? (
                <img src={mailBox} alt="insert" width="30px" height="30px" />
              ) : (
                <></>
              )}
              <button
                className=" btn"
                onClick={() => {
                  setContent(<Inbox />);
                  setContentPic("mailBox");
                }}
              >
                Inbox
              </button>
            </div>
          </li>
          <li className="nav-item">
            <div className="nav-link">
              {contentPic === "orderes" ? (
                <img src={orderes} alt="insert" width="30px" height="30px" />
              ) : (
                <></>
              )}
              <button
                className=" btn "
                onClick={() => {
                  setContent(<Order />);
                  setContentPic("orderes");
                }}
              >
                Orders
              </button>
            </div>
          </li>
          <li className="nav-item">
            <div className="nav-link">
              {contentPic === "files" ? (
                <img src={files} alt="insert" width="30px" height="30px" />
              ) : (
                <></>
              )}
              <button
                className=" btn "
                onClick={() => {
                  setContent(<Files />);
                  setContentPic("files");
                }}
              >
                Files
              </button>
            </div>
          </li>
        </div>
        <li className="nav-item ">
          <div className="nav-link">
            <button className="btn btn-danger " onClick={handleLogOut}>
              <Link className="text-white text-decoration-none" to="/">
                Deconnexion
              </Link>
            </button>{" "}
          </div>
        </li>
      </ul>

      <div className="container d-flex justify-content-center mb-3">
        {content}
      </div>
    </div>
  );
}
