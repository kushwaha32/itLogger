import axios from "axios";
import { useEffect, useState } from "react";
import TechItems from "./TechItem";

const TechListModal = () => {
  const [techs, setTechs] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTechs();
  }, []);

  const getTechs = async () => {
    try {
      const res = await axios.get("/techs");
      setTechs(res.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div id="tech-list-modal" className="modal">
      <div className="modal-content">
        <h4>Technician List</h4>
        <ul className="collection">
            {!loading && techs.map(tech => (
                <TechItems key={tech.id} tech={tech}/>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default TechListModal;
