import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import './App.css';
import { Fragment, useEffect } from "react";
import NavBar from "./component/layout/navBar";
import Logs from "./component/logs/Logs";
import AddBtn from "./component/layout/AddBtn";
import AddLogModal from "./component/logs/AddLogModal";
import EditLogModal from "./component/logs/EditLogModal";
import AddTechModal from "./component/techs/AddTechModal";
import TechListModal from "./component/techs/TechListModal";
import { Provider } from "react-redux";
import store from "./store";

const  App = () => {
  useEffect(() => {
     // init materialize js
     M.AutoInit();
  }, []);
  return (
      <Provider store= {store}>
      <Fragment>
          <NavBar />
          <div className="container">
             <Logs />
          </div>
          <AddLogModal />
          <EditLogModal />
          <AddTechModal />
          <TechListModal />
          <AddBtn />
      </Fragment>
      </Provider>
      
  );
}

export default App;
