import { useEffect } from "react";
import { connect } from "react-redux";
import TechItems from "./TechItem";
import { getTech } from "../../actions/techAction";

const TechListModal = ({ tech: { techs, loading }, getTech }) => {
  useEffect(() => {
    getTech();

    // eslint-disable-next-line
  }, []);

  return (
    <div id="tech-list-modal" className="modal">
      <div className="modal-content">
        <h4>Technician List</h4>
        <ul className="collection">
          {!loading && techs !== null
            ? techs.map((tech) => <TechItems key={tech.id} tech={tech} />)
            : "loading"}
        </ul>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  tech: state.tech,
});
export default connect(mapStateToProps, { getTech })(TechListModal);
