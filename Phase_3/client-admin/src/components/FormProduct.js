import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchCategories } from "../store/actions/categoryAction";
import { postProducts, setProductsError } from "../store/actions/productAction";
import Swal from "sweetalert2";

export default function FormProduct() {
  const [productInput, setProductInput] = useState({
    name: "",
    price: "",
    mainImg: "",
    description: "",
    category: "",
  });
  const { errorProducts } = useSelector((state) => state.productReducer);
  const { categories } = useSelector((state) => state.categoryReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const changeProductInput = (e) => {
    const { name, value } = e.target;
    setProductInput({
      ...productInput,
      [name]: value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    let images = [];
    for (let i = 5; i < e.target.length - 1; i++) {
      if (e.target[i].value) {
        images.push(e.target[i].value);
      }
    }

    let content = {
      name: productInput.name,
      price: productInput.price,
      categoryId: productInput.category,
      description: productInput.description,
      mainImg: productInput.mainImg,
      images: images.join(", "),
    };

    dispatch(postProducts(content)).then((resp) => {
      if (!resp) {
        navigate("/");
      }
    });
  };

  if (errorProducts) {
    let errors = JSON.parse(errorProducts.message);
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
    dispatch(setProductsError(""));
  }

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <div className="w-5/6 flex justify-center items-center m-4">
      <div className="w-1/3">
        <form className="flex flex-col" onSubmit={submitHandler}>
          <label className="mt-4 py-1">Name</label>
          <input
            className="mt-4 rounded border border-gray-200 py-1"
            name="name"
            value={productInput.name}
            onChange={changeProductInput}
            type="text"
          />
          <label className="mt-4 py-1">Price</label>
          <input
            className="mt-4 rounded border border-gray-200 py-1"
            name="price"
            value={productInput.price}
            onChange={changeProductInput}
            type="number"
          />
          <label className="mt-4 py-1">Category</label>
          <select
            className="text-center py-1 mt-4 rounded"
            name="category"
            value={productInput.category}
            onChange={changeProductInput}
          >
            <option>--select--</option>
            {categories.map((el) => (
              <option key={el.id} value={el.id}>
                {el.name}
              </option>
            ))}
          </select>
          <label className="mt-4 py-1">Main Image</label>
          <input
            className="mt-4 rounded border border-gray-200 py-1"
            name="mainImg"
            value={productInput.mainImg}
            onChange={changeProductInput}
            type="text"
          />
          <label className="mt-4 py-1">Description</label>
          <textarea
            className="mt-4 rounded border border-gray-200 py-1"
            name="description"
            value={productInput.description}
            onChange={changeProductInput}
          ></textarea>
          <label className="mt-4 py-1">Images</label>
          <input
            className="mt-4 rounded border border-gray-200 py-1"
            type="text"
            id="image"
            required
          />
          <input
            className="mt-4 rounded border border-gray-200 py-1"
            type="text"
            id="image"
          />
          <input
            className="mt-4 rounded border border-gray-200 py-1"
            type="text"
            id="image"
          />
          <input
            className="rounded bg-blue-200 mt-6 py-2 hover:bg-blue-600 mb-5"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    </div>
  );
}
