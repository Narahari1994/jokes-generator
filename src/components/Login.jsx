import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const [showError, setShowError] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, password } = user;

    if (!username) {
      setShowError(true);
      setError("Enter the username");
    }

    if (!password) {
      setShowError(true);
      setError("Enter the password");
    }

    if (username && password) {
      navigate("/");
    }
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex justify-center items-center bg-black h-screen">
      <div className="p-6 border border-white rounded-lg bg-slate-800 w-96">
        <h2 className="text-center text-3xl font-semibold text-white">Login</h2>
        <form className="p-2 my-4 w-full" onSubmit={handleSubmit}>
          <div className="my-3 w-full">
            <label
              className="text-slate-500 font-medium text-lg block uppercase my-4"
              htmlFor="username"
            >
              username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={user.username}
              onChange={handleChange}
              placeholder="username"
              className="bg-transparent text-white px-4 py-2 w-full border border-slate-400"
            />
          </div>

          <div className="my-3">
            <label
              className="text-slate-500 font-medium text-lg block uppercase my-4"
              htmlFor="password"
            >
              password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              placeholder="Password"
              className="bg-transparent text-white px-4 py-2 w-full border border-slate-400"
            />
          </div>
          <button
            type="submit"
            className="w-full px-5 py-2 mt-4 bg-blue-600 text-white border border-none rounded-lg capitalize font-semibold text-lg"
          >
            login
          </button>
          {showError ? (
            <p className="text-red-700 font-medium my-2">*{error}</p>
          ) : (
            ""
          )}
        </form>
      </div>
    </div>
  );
};
export default Login;
