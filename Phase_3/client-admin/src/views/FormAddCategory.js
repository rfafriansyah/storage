import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import {
  postCategory,
  setErrorCategories,
} from "../store/actions/categoryAction";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";

export default function FormAddCategory() {
  const [category, setCategory] = useState("");
  const { errorCategories } = useSelector((state) => state.categoryReducer);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const changeCategory = (e) => {
    setCategory(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    let content = {
      name: category,
      createdAt: new Date(),
    };

    dispatch(postCategory(content)).then((resp) => {
      if (!resp) {
        navigate("/categories");
      }
    });
  };

  if (errorCategories) {
    let errors = JSON.parse(errorCategories.message);
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
    dispatch(setErrorCategories(""));
  }

  return (
    <div className="flex">
      <Sidebar></Sidebar>
      <div className="w-5/6 flex justify-center items-center m-6">
        <div className="w-1/3">
          <h1 className="text-xl mt-2">Create New Category</h1>
          <form action="" className="flex flex-col" onSubmit={submitHandler}>
            <label className="mt-4">Category</label>
            <input
              type="text"
              value={category}
              onChange={changeCategory}
              className="mt-4 rounded border border-gray-200 py-1"
            />
            <input
              className="rounded bg-blue-200 mt-4 py-2 mt-5 hover:bg-blue-600"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
