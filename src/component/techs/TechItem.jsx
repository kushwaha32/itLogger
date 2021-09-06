import { connect } from "react-redux";
import { deleteTech } from "../../actions/techAction";

const TechItems = ({ tech, deleteTech }) => {
  const onDelete = () => {
    if(window.confirm("Are you sure you want to delete the technician"))
    {
      deleteTech(tech.id);
    }
  }
  return (
    <li className="collection-item">
      <div>
        {tech.firstName} {tech.lastName}
        <a href="!#" onClick={onDelete} className="secondary-content">
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};

export default connect(null, {deleteTech})(TechItems);
