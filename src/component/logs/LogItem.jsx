import Moment from "react-moment";
import { connect } from "react-redux";
import { setCurrent, deleteLog } from "../../actions/logActions";


const LogItem = ({ log, setCurrent, deleteLog }) => {
  return (
    <li className="collection-item">
      <div>
        <a
          href="#edit-log-modal"
          className={`modal-trigger ${
            log.attention ? "red-text" : "blue-text"
          }`}
          onClick={() => setCurrent(log)}
        >
          {log.message}
        </a>
        <br />
        <span className="grey-text">
          <span className="black-text">ID #{log.id} </span>
          <span>last updated by </span>
          <span className="black-text">{log.tech}</span> on {" "}
          <Moment format="MMMM Do YYYY, h:mm:ss a">{ log.date}</Moment>
        </span>
        <a href="!#" onClick={() => deleteLog(log.id)} className="secondary-content">
            <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};

export default connect(null, {setCurrent, deleteLog})(LogItem);
