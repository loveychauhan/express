import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="bg-primary-color w-full min-h-screen text-white">
      <nav className="max-w-[768px] mx-auto">
        <ul className="flex text-blue-500 gap-4 justify-between">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/login">
            <li>Login</li>
          </Link>
          <Link to="/register">
            <li>Register</li>
          </Link>
        </ul>
      </nav>

      <main className="max-w-[768px] mx-auto min-h-[calc(100vh-42px)]  my-4">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
