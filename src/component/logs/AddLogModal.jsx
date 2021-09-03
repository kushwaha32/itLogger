import { useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { connect } from "react-redux";
import {addLog} from "../../actions/logActions";

const AddLogModal = ({addLog}) => {
  const [message, setMessage] = useState("");
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState("");
  const onSubmit = () => {
    if (message === "" || tech === "") {
      M.toast({ html: "Please enter a message and tech" });
    } else {
       const sendData = {
         message,
         attention,
         tech,
         date: new Date()
       }
       addLog(sendData);
       setMessage("");
       setTech("");
       setAttention(false);
    }
  };
  return (
    <div id="add-log-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4>Enter System Log</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <label htmlFor="message" className="active">
              Log Message
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <select
              name="tech"
              value={tech}
              className="browser-default"
              onChange={(e) => setTech(e.target.value)}
            >
              <option value="" disabled>
                Select Technician
              </option>
              <option value="Raj Kushwaha">John Doe</option>
              <option value="Yash Mourya">Yash Mourya</option>
              <option value="Vihan Mourya">Vihan Mourya</option>
              <option value="Soumya">Soumya</option>
              <option value="Krishna">Krishna</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <p>
              <label>
                <input
                  type="checkbox"
                  className="filled-in"
                  checked={attention}
                  value={attention}
                  onChange={(e) => setAttention(!attention)}
                />
                <span>Needs Attention</span>
              </label>
            </p>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <a
          href="#!"
          onClick={onSubmit}
          className={`waves-effect blue btn ${
            message !== "" ? "modal-close" : ""
          } `}
        >
          Enter
        </a>
      </div>
    </div>
  );
};

const modalStyle = {
  window: "75%",
  height: "75%",
};

export default connect(null, {addLog})(AddLogModal);
