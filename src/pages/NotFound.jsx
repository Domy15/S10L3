import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <h1 className="text-white text-center">404 Not found</h1>
      <p className="text-white text-center mb-5">
        Pagina non trovata clicca <Link className="text-decoration-none" to={"/"}>qui</Link> per tornare alle
        serie TV
      </p>
    </>
  );
}

export default NotFound