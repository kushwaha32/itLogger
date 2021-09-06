import { useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { connect } from "react-redux";
import { addTech } from "../../actions/techAction";

const AddTechModal = ({ addTech }) => {
  const [firstName, setFirstNname] = useState("");
  const [lastName, setLastName] = useState("");
  const onSubmit = () => {
      if(firstName === "" || lastName === ""){
          M.toast({ html: "Please fill out all the field"})
      }else{
          const techData = {
              firstName,
              lastName
          }
          addTech(techData);
          // clear all field
          setFirstNname("");
          setLastName("");
      }
  }
  return (
    <div id="tech-modal" className="modal">
      <div className="modal-content">
        <h4>Add Technician</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstNname(e.target.value)}
            />
            <label htmlFor="firstName" className="active">
              First Name
            </label>
          </div>{" "}
          {/** ./input-field */}
        </div>{" "}
        {/** ./row */}
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <label htmlFor="lastName" className="active">
              Last Name
            </label>
          </div>{" "}
          {/** ./input-field */}
        </div>{" "}
        {/** .row */}
      </div>{" "}
      {/** ./modal-content */}
      <div className="modal-footer">
        <a
          
          href="#!"
          onClick={onSubmit}
          className={`btn blue waves-effect ${
            firstName !== "" && lastName !== "" ? "modal-close" : ""
          }`}
        >Add Tech</a>
      </div>{" "}
      {/** ./modal-footer */}
    </div>
  );
};

export default connect(null, {addTech})(AddTechModal);
