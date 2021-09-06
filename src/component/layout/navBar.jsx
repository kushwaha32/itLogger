import { useState } from "react";
import { connect } from "react-redux";
import { searchLog } from "../../actions/logActions";

const NavBar = ({ searchLog }) => {
  const [search, setSearch] = useState("")
  const onChange = e => {
     setSearch(e.target.value);
     searchLog(search);
  }
  return (
    <nav style={{marginBottom: "30px"}} className="blue">
      <div className="nav-wrapper">
          <div className="input-field">
            <input id="search" value={search} onChange={onChange} type="search" required />
            <label className="label-icon" htmlFor="search">
              <i className="material-icons">search</i>
            </label>
            <i className="material-icons">close</i>
          </div>
      </div>
    </nav>
  );
};

export default connect(null, { searchLog })(NavBar);
