import Sidebar from "../components/Sidebar";
import TableCategory from "../components/TableCategory";
export default function CategoryList() {
  return (
    <div className="flex">
      <Sidebar></Sidebar>
      <TableCategory></TableCategory>
    </div>
  );
}
