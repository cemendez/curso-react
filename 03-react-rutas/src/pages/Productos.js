import { useLocation, useNavigate } from "react-router-dom";

const Productos = () => {
  let { search } = useLocation();
  let query = new URLSearchParams(search);

  const LIMIT = 20;
  let start = query.get("inicio");
  let end = query.get("fin");

  let navigate = useNavigate();

  const handlePrev = () => {
    navigate(`?inicio=${start - LIMIT}&fin=${end - LIMIT}`);
  };
  const handleNext = () => {
    navigate(`?inicio=${start + LIMIT}&fin=${end + LIMIT}`);
  };

  return (
    <div>
      <h3>Productos</h3>
      <p>
        Mostrando productos del <b>{start}</b> al <b>{end}</b>
      </p>
      <button>Atrás</button>
      <button>Adelante</button>
    </div>
  );
};

export default Productos;
