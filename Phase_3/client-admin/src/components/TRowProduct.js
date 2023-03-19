import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteProduct } from "../store/actions/productAction";

export default function Product({ product, idx }) {
  const { products } = useSelector((state) => state.productReducer);
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const showImages = () => {
    navigate(`${product.id}/show-images`);
  };

  const editHanlder = (id) => {
    navigate(`${id}/edit-product`);
  };

  const deleteHandler = (e) => {
    dispatch(deleteProduct(product.id, products, idx));
  };

  const formatPrice = (price) => {
    return price.toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
    });
  };

  return (
    <tr>
      <td className="border">{idx + 1}</td>
      <td className="border">{product.name}</td>
      <td className="border">{product.Category.name}</td>
      <td className="border ">{formatPrice(product.price)}</td>
      <td className="border">{product.User.email}</td>
      <td className="border">
        <img src={product.mainImg} alt="" className="w-full h-[325px]" />
      </td>
      <td className="border">
        <button className="bg-green-400 rounded px-2 py-1" onClick={showImages}>
          Show Images
        </button>
      </td>
      <td className="border">
        <button
          className="bg-blue-400 rounded px-2 py-1 mr-2"
          onClick={() => editHanlder(product.id)}
        >
          Edit
        </button>
        <button
          className="bg-red-500 rounded px-2 py-1"
          onClick={deleteHandler}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}
