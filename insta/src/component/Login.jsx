const Login = () => {
  return (
    <div className="grid h-full place-items-center  min-h-[calc(100vh-42px)] ">
      <form
        action="/"
        method="get"
        className="flex flex-col gap-4 max-w-[480px] w-full">
        <div>
          <label htmlFor="email">Email</label>
          <input
            placeholder="john@g.co"
            id="email"
            type="email"
            name="email"
            className="border-2 rounded-[8px] p-1 w-full"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            placeholder="********"
            id="password"
            type="password"
            name="password"
            className="border-2 rounded-[8px] p-1 w-full"
          />
        </div>

        <button className="border-blue-500 border-2 py-1 cursor-pointer rounded-[10px] outline-0">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
