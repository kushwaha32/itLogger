import { useEffect } from "react";
import { connect } from "react-redux";
import { getTech } from "../../actions/techAction";

const SelectTechOption = ({ tech: { techs }, getTech }) => {
  useEffect(() => {
    getTech();

    // eslint-disable-next-line
  }, []);
  return (
    <>
      {techs !== null &&
        techs.map((t) => (
          <option value={t.firstName} key={t.id}>
            {" "}
            {t.firstName} {t.lastName}
          </option>
        ))}
    </>
  );
};

const mapStateToProps = (state) => ({
  tech: state.tech,
});

export default connect(mapStateToProps, { getTech })(SelectTechOption);
