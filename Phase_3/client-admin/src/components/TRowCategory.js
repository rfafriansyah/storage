import { useSelector, useDispatch } from "react-redux";
import { deleteCategory } from "../store/actions/categoryAction";

export default function TRowCategory({ category, idx }) {
  const { categories } = useSelector((state) => state.categoryReducer);
  const dispatch = useDispatch();

  const deleteHandler = (e) => {
    dispatch(deleteCategory(category.id, categories, idx));
  };

  return (
    <tr>
      <td className="border">{idx + 1}</td>
      <td className="border">{category.name}</td>
      <td className="border">{category.createdAt}</td>
      <td className="border">
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
