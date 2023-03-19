import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchCategories } from "../store/actions/categoryAction";
import {
  fetchProduct,
  putProduct,
  setProductsError,
} from "../store/actions/productAction";
import Sidebar from "../components/Sidebar";
import Swal from "sweetalert2";

export default function FormEditProduct() {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const { errorProducts } = useSelector((state) => state.productReducer);
  const { categories } = useSelector((state) => state.categoryReducer);
  const navigate = useNavigate();
  const [productInput, setProductInput] = useState({
    name: "",
    description: "",
    price: "",
    categoryId: "",
    mainImg: "",
    image1: "",
    image2: "",
    image3: "",
  });

  useEffect(() => {
    dispatch(fetchProduct(productId)).then((data) => {
      setProductInput({
        name: data.payload.name,
        description: data.payload.description,
        price: data.payload.price,
        categoryId: data.payload.categoryId,
        mainImg: data.payload.mainImg,
        image1: data.payload.Images[0] ? data.payload.Images[0].imgUrl : "",
        image2: data.payload.Images[1] ? data.payload.Images[1].imgUrl : "",
        image3: data.payload.Images[2] ? data.payload.Images[2].imgUrl : "",
      });
    });
  }, [productId, dispatch]);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

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
      categoryId: productInput.categoryId,
      mainImg: productInput.mainImg,
      description: productInput.description,
      images: images.join(", "),
    };

    dispatch(putProduct(productId, content)).then((resp) => {
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

  return (
    <div className="flex">
      <Sidebar></Sidebar>
      <div className="w-5/6 flex justify-center items-center m-4">
        <div className="w-1/3">
          <form className="flex flex-col" onSubmit={submitHandler}>
            <label className="mt-4 py-1">Name</label>
            <input
              className="mt-4 rounded border border-gray-200 py-1"
              value={productInput.name}
              name="name"
              onChange={changeProductInput}
              type="text"
            />
            <label className="mt-4 py-1">Price</label>
            <input
              className="mt-4 rounded border border-gray-200 py-1"
              value={productInput.price}
              name="price"
              onChange={changeProductInput}
              type="number"
            />
            <label className="mt-4 py-1">Category</label>
            <select
              className="text-center py-1 mt-4"
              value={productInput.categoryId}
              onChange={changeProductInput}
              name="categoryId"
            >
              {categories.map((el) => (
                <option key={el.id} value={el.id}>
                  {el.name}
                </option>
              ))}
            </select>
            <label className="mt-4 py-1">Main Image</label>
            <input
              className="mt-4 rounded border border-gray-200 py-1"
              value={productInput.mainImg}
              onChange={changeProductInput}
              name="mainImg"
              type="text"
            />
            <label className="mt-4 py-1">Description</label>
            <textarea
              className="mt-4 rounded border border-gray-200 py-1"
              value={productInput.description}
              onChange={changeProductInput}
              name="description"
            ></textarea>
            <label className="mt-4 py-1">Images</label>

            <input
              className="mt-4 rounded border border-gray-200 py-1"
              value={productInput.image1}
              onChange={changeProductInput}
              name="image1"
              type="text"
            />
            <input
              className="mt-4 rounded border border-gray-200 py-1"
              value={productInput.image2}
              onChange={changeProductInput}
              name="image2"
              type="text"
              id="image"
            />
            <input
              className="mt-4 rounded border border-gray-200 py-1"
              value={productInput.image3}
              onChange={changeProductInput}
              name="image3"
              type="text"
              id="image"
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
