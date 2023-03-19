import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between border py-4 min-h-2/10">
      <div>
        <ul className="flex">
          <li className="mr-4 ml-4">
            <Link to="/">Home</Link>
          </li>
          {/* <li className="mr-4">Men</li>
          <li className="mr-4">Women</li> */}
        </ul>
      </div>
      {/* <div>
        <p className="mr-4">
          <a href="https://p3-challenge-1-admin.web.app">Go To Admin Page</a>
        </p>
      </div> */}
    </nav>
  );
}
