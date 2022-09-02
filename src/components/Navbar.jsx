import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const nav = useNavigate();
  return (
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#!">CRUD APP - Local Storage</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarColor02">
      <ul className="navbar-nav me-auto">

      </ul>

      <button className="btn btn-outline-secondary my-2 my-sm-0" onClick={() => nav('/inserir')}>
        Inserir
      </button>
    </div>
  </div>
</nav>
  )
}
