import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setUserError, userLogin } from "../store/actions/userAction";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { userError } = useSelector((state) => state.userReducer);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };

  const changePassword = (e) => {
    setPassword(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    let content = {
      email,
      password,
    };

    dispatch(userLogin(content)).then(() => navigate("/"));
  };

  if (userError) {
    let errors = JSON.parse(userError.message);
    if (Array.isArray(errors.message)) {
      errors = errors.message.join("\n");
    } else {
      errors = errors.message;
    }
    Swal.fire({
      icon: "error",
      title: "Failed",
      html: "<pre>" + errors + "<pre>",
    });
    dispatch(setUserError(""));
  }

  return (
    <div className="flex items-center justify-center min-w-screen min-h-screen">
      <div className="w-1/3 bg-gray-100 px-5 py-5 rounded">
        <div>
          <h2 className="text-xl">Sign to your account</h2>
        </div>
        <form action="" onSubmit={submitHandler} className="flex flex-col">
          <label className="mt-4">Email</label>
          <input
            type="email"
            value={email}
            onChange={changeEmail}
            className="mt-4 rounded border border-gray-200 py-1"
          />
          <label className="mt-4">Password</label>
          <input
            type="password"
            value={password}
            onChange={changePassword}
            className="mt-4 rounded border border-gray-200 py-1"
          />
          <input
            className="rounded bg-blue-200 mt-4 py-2 mt-10 hover:bg-blue-600 mb-4"
            type="submit"
            value="Sign in"
          />
        </form>
      </div>
    </div>
  );
}
