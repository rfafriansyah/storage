import Sidebar from "../components/Sidebar";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchProduct } from "../store/actions/productAction";

export default function ShowImages() {
  const { product, errorProduct, loadingProduct } = useSelector(
    (state) => state.productReducer
  );
  const { productId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchProduct(productId));
  }, [dispatch, productId]);

  if (!loadingProduct) {
    return <h1>Loading...</h1>;
  }

  if (errorProduct) {
    console.log(errorProduct);
  }

  const buttonHandler = () => {
    navigate("/");
  };

  return (
    <div className="flex bg-gray-100">
      <Sidebar></Sidebar>
      <div className="w-5/6 m-4">
        <div className="flex mt-4 flex-wrap">
          <img
            src={product.mainImg}
            alt=""
            className="w-1/5 border border-gray-300 py-2 px-2 ml-7 mr-7"
          />
          {product.Images.map((el) => (
            <img
              className="w-1/5 ml-7 mr-7 py-2 px-2 border border-gray-300"
              key={el.id}
              src={el.imgUrl}
              alt=""
            />
          ))}
        </div>
        <div>
          <button
            className="bg-red-600 rounded text-white px-2 py-1 mb-5 mt-5"
            onClick={buttonHandler}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
}
