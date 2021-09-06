import { useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { connect } from "react-redux";
import { useEffect } from "react";
import { logUpdate } from "../../actions/logActions";

const EditLogModal = ({ log: { current }, logUpdate }) => {
  const [message, setMessage] = useState("");
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState("");

  useEffect(() => {
    if (current !== null) {
      setMessage(current.message);
      setAttention(current.attention);
      setTech(current.tech);
    }
  }, [current]);

  const onSubmit = () => {
    if (message === "" || tech === "") {
      M.toast({ html: "Please filled all the field" });
    } else {
      // reset field
      const dataUpdate = {
        id: current.id,
        message,
        attention,
        tech,
        date: new Date(),
      };
      logUpdate(dataUpdate);

      setMessage("");
      setAttention(false);
      setTech("");
    }
  };
  return (
    <div id="edit-log-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4>Edit System Log</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="tech"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
        </div>
        <div className="row">
          <div className="onput-field">
            <select
              name="tech"
              value={tech}
              onChange={(e) => setTech(e.target.value)}
              className="browser-default"
            >
              <option value="" disabled>
                Select Tech
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
                  value={attention}
                  checked={attention}
                  onChange={(e) => setAttention(!attention)}
                />
                <span>Need Attention</span>
              </label>
            </p>
          </div>
        </div>
        <div className="modal-footer">
          <a
            href="!#"
            onClick={onSubmit}
            className={`btn blue waves-effect ${
              message !== "" && tech !== "" ? "modal-close" : ""
            }`}
          >
            Update
          </a>
        </div>
      </div>
    </div>
  );
};
const modalStyle = {
  height: "70%",
  width: "70%",
};

const mapStateToProps = (state) => ({
  log: state.log,
});
export default connect(mapStateToProps, { logUpdate })(EditLogModal);
