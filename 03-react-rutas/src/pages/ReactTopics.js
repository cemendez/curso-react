import { Link, Route, Routes, useParams } from "react-router-dom";

const Topic = () => {
  let { topic } = useParams();

  return (
    <div>
      <h4>{topic}</h4>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae,
        nesciunt. Error, eveniet reiciendis corrupti ipsam tempora nam
        distinctio obcaecati quis ex sint maiores sunt quo, vitae reprehenderit
        delectus ea. Ipsum!
      </p>
    </div>
  );
};

const ReactTopics = () => {
  return (
    <div>
      <h3>Temas React</h3>
      <ul>
        <li>
          <Link to="jsx">JSX</Link>
        </li>
        <li>
          <Link to="props">Props</Link>
        </li>
        <li>
          <Link to="estado">Estado</Link>
        </li>
        <li>
          <Link to="componentes">Componente</Link>
        </li>
      </ul>
      <Routes>
        <Route path=":topic" element={<Topic />} />
      </Routes>
    </div>
  );
};

export default ReactTopics;
