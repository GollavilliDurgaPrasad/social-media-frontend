import { Link } from "react-router-dom";
import "./index.css";

const Home = () => (
  <div className="mainContainers">
    <div className="HomeContainer">
      <Link to="/admin-login">
        <button className="userBtn">Admin Page</button>
      </Link>
      <Link to="/user-page">
        <button className="userBtn">UserSubmissionPage</button>
      </Link>
    </div>
  </div>
);

export default Home;
