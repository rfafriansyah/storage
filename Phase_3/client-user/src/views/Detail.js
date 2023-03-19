import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import { fetchProduct } from "../store/actions/productAction";

export default function DetailProduct() {
  const { productId } = useParams();
  const { product, errorProduct, loadingProduct } = useSelector(
    (state) => state.productReducer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProduct(productId));
  }, [dispatch, productId]);

  if (!loadingProduct) {
    return (
      <button
        disabled
        type="button"
        className="py-2.5 px-5 mr-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center flex justify-center item-center w-full min-h-screen"
      >
        <svg
          role="status"
          className="inline mr-2 w-4 h-4 text-gray-200 animate-spin dark:text-gray-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="#1C64F2"
          />
        </svg>
        Loading...
      </button>
    );
  }

  if (errorProduct) {
    console.log(errorProduct);
  }

  const formatPrice = (price) => {
    return price.toLocaleString("id-ID", {
      currency: "IDR",
      style: "currency",
    });
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="flex min-h-8/10 w-full">
        <div className="w-3/4 flex mt-5 ml-4 h-1/2">
          <div className="flex w-1/2 h-1/2 border py-2 px-2">
            <img src={product.mainImg} className=" w-full" alt="" />
          </div>
          <div className="flex flex-wrap h-1/2">
            {product.Images.map((el) => (
              <img
                key={el.id}
                src={el.imgUrl}
                alt=""
                className="w-[200px] h-[200px] mr-2 ml-2 mb-2 border py-2 px-2"
              />
            ))}
          </div>
        </div>
        <div className="w-1/4 mt-5 flex flex-col items-center mr-12">
          <div>
            <p>{product.name}</p>
            <div>
              <p>{formatPrice(product.price)}</p>
              <span className="w-1//5 rounded p-2 bg-green-300 ml-2 mb-4 mt-3 item-center inline-block">
                {product.Category.name}
              </span>
            </div>
          </div>
          <div className="mb-5">{product.description}</div>
        </div>
      </div>
    </div>
  );
}
