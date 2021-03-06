import { useEffect } from "react";
import { connect } from "react-redux";
import Preloader from "../layout/Preloader";
import LogItem from "./LogItem";
import { getLogs } from "../../actions/logActions";

const Logs = ({ log: { logs, loading, error }, getLogs }) => {
  useEffect(() => {
    getLogs();

    // eslint-disable-next-line
  }, []);

  if (loading || logs === null) {
    return <Preloader />;
  }

  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center">It Logger</h4>
      </li>
      {!loading && logs.length !== 0 ? (
        logs.map((log) => <LogItem key={log.id} log={log} />)
      ) : (
        <p className="center">No Tech Found</p>
      )}
    </ul>
  );
};
const mapStateToProps = (state) => ({
  log: state.log,
});
export default connect(mapStateToProps, { getLogs })(Logs);
