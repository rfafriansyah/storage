import { useNavigate } from "react-router-dom";

export default function CardProduct({ product }) {
  const navigate = useNavigate();
  const handleDetail = () => {
    navigate(`${product.id}/${product.slug}`);
  };

  const formatPrice = (price) => {
    return price.toLocaleString("id-ID", {
      currency: "IDR",
      style: "currency",
    });
  };

  return (
    <div
      className="w-1/6 bg-blue-100 mr-6 mb-5 ml-6 mt-5 rounded"
      onClick={handleDetail}
    >
      <div>
        <img
          className="w-full rounded rounded-b-none h-1/2"
          src={product.mainImg}
          alt=""
        />
      </div>
      <div className="ml-2 mr-2">
        <p>{product.name}</p>
        <p>{formatPrice(product.price)}</p>
        {/* <p>{product.description}</p> */}
      </div>
      <span className="w-1/3 rounded p-2 bg-green-300 ml-2 mb-4 mt-3 item-center inline-block">
        {product.Category.name}
      </span>
    </div>
  );
}
