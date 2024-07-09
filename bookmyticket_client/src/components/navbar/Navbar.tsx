import { Outlet } from "react-router-dom";
import style from "./Navbar.module.css";

const Navbar = () => {
  return (
    <>
      <nav className={style.navy}>
        <h1>Book My Ticket</h1>
        <span>about me</span>
      </nav>
      <hr />
      <main id="detail">
        <Outlet />
      </main>
    </>
  );
};

export { Navbar };
