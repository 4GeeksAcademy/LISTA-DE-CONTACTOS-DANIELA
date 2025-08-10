import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
			<nav className="navbar navbar-light bg-light">

					{/*<Link to="/">
						<span className="navbar-brand mb-0 h1">React Boilerplate</span>
					</Link>
					<div className="ml-auto">
						<Link to="/demo">
							<button className="btn btn-primary">Check the Context in action</button>
						</Link>
					</div>*/}

					<div className="container-fluid d-flex justify-content-end me-4">
						<Link to="/addcontact">
							<button className="btn btn-primary">Crate a new contact</button>
						</Link>
					</div>
			</nav>

	);
};