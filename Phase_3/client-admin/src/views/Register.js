import { useState } from "react";
import Sidebar from "../components/Sidebar";
import { setUserError, userRegister } from "../store/actions/userAction";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";

export default function Register() {
  const dispatch = useDispatch();
  const { userError } = useSelector((state) => state.userReducer);
  const [userInput, setUserInput] = useState({
    username: "",
    email: "",
    password: "",
    phoneNumber: "",
    address: "",
  });
  const changeUserInput = (e) => {
    const { name, value } = e.target;
    setUserInput({
      ...userInput,
      [name]: value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    let content = {
      username: userInput.username,
      email: userInput.email,
      password: userInput.password,
      phoneNumber: userInput.phoneNumber,
      address: userInput.address,
    };

    dispatch(userRegister(content)).then((resp) => {
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "New Admin created",
      });
    });
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
    <div className="flex">
      <Sidebar></Sidebar>
      <div className="w-5/6 m-4 flex justify-center items-center min-h-screen">
        <div className="w-1/2">
          <h1 className="text-xl mt-2">Register New Admin</h1>
          <form action="" className="flex flex-col" onSubmit={submitHandler}>
            <label className="mt-4">Username</label>
            <input
              type="text"
              value={userInput.username}
              name="username"
              onChange={changeUserInput}
              className="mt-4 rounded border border-gray-200 py-1"
            />
            <label className="mt-4">Email</label>
            <input
              type="email"
              name="email"
              value={userInput.email}
              onChange={changeUserInput}
              className="mt-4 rounded border border-gray-200 py-1"
            />
            <label className="mt-4">Password</label>
            <input
              type="password"
              name="password"
              value={userInput.password}
              onChange={changeUserInput}
              className="mt-4 rounded border border-gray-200 py-1"
            />
            <label className="mt-4">Phone Number</label>
            <input
              type="number"
              name="phoneNumber"
              value={userInput.phoneNumber}
              onChange={changeUserInput}
              className="mt-4 rounded border border-gray-200 py-1"
            />
            <label className="mt-4">Address</label>
            <input
              type="text"
              value={userInput.address}
              name="address"
              onChange={changeUserInput}
              className="mt-4 rounded border border-gray-200 py-1"
            />
            <input
              className="rounded bg-blue-200 mt-4 py-2 mt-5 hover:bg-blue-600"
              type="submit"
              value="Sign up"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
