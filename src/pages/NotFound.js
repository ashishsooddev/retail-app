import { Link } from "react-router-dom";

function NotFound() {
  return (
     <section className="notfound-container">
      <div className="notfound-content">
        <p className="error-text">ERROR 404</p>
        <h1>Oops! This page is <br /> out of stock.</h1>

      <p className="description">
        The page you are looking for does not exist or has been
        moved to a new collection. Let’s get you back to the
        latest trends.
      </p>

    <div className="buttons">
    <Link to="/" className="home-btn">RETURN TO HOME</Link>

    <button className="browse-btn">BROWSE COLLECTIONS</button>
    </div>
  </div>

  <div className="image-section">
    <div className="error-box">
    <h1>404</h1>
  </div>

</div>
</section>
  );
}

export default NotFound;