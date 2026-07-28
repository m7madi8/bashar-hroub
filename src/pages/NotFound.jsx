import { Link } from "react-router-dom";
import notFoundImage from "../assets/others/404.svg";
import PageMeta from "../components/PageMeta";
import NotFoundCSS from "../css/NotFound.module.css";

function NotFound() {
  return (
    <>
      <PageMeta
        title="Page Not Found"
        description="The page you are looking for does not exist."
      />
      <main className={NotFoundCSS.content} aria-labelledby="not-found-title">
        <img
          src={notFoundImage}
          alt=""
          className={NotFoundCSS.image}
          loading="lazy"
          decoding="async"
        />
        <h1 id="not-found-title" className={NotFoundCSS.title}>
          Page Not Found
        </h1>
        <p className={NotFoundCSS.message}>
          Oops! The page you are looking for does not exist. It might have been
          moved or deleted.
        </p>
        <Link to="/" className={NotFoundCSS.homeLink}>
          Go back to Home
        </Link>
      </main>
    </>
  );
}

export default NotFound;
